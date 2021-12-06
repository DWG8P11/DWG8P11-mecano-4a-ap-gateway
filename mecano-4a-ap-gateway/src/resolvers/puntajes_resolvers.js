const { ApolloError } = require("apollo-server-errors");


const puntajesResolvers = {
    Query: {
        traerPuntajes: async function(_, {usuario, idLeccion}, contexto) {
            // DESCOMENTAR si se quiere limitar un poco el filtro de usuario
            // if (usuario) {
            //     if (!contexto.usuarioT || !contexto.usuarioT.es_administrador) {
            //         throw new ApolloError("No tienes los permisos para ver los puntajes de este usuario.", 401)
            //     }
            // }
            return contexto.dataSources.puntajesAPI.traerPuntajes(usuario, idLeccion);
        },

        traerPuntajesNivel: async function(_, {nivel, nLeccion, usuario}, contexto) {
            // nLeccion y usuario son opcionales

            // Hace uso del microservicio de lecciones para determinar idLeccion necesarias
            if (nLeccion) {
                let leccion = await contexto.dataSources.leccionesAPI.traerLeccion(nivel, nLeccion);
                // Si no encuentra la leccion, traerLeccion bota un 404
                return contexto.dataSources.puntajesAPI.traerPuntajes(usuario, leccion.id);   
            }
            
            // Si no hay leccion especificada
            // Traer los puntajes en cada leccion del nivel. 
            // Alternativa 1: Hacer peticiones de puntaje por cada leccion del nivel
            let leccionesNivel = await contexto.dataSources.leccionesAPI.traertodasLecciones(nivel);

            // Hacer las peticiones y guardar las promesas en un array
            let promesasPuntajesUsuarioNivel = [];
            let puntajesActuales;

            leccionesNivel.forEach(leccion => {
                puntajesActuales = contexto.dataSources.puntajesAPI.traerPuntajes(usuario, leccion.id)
                
                promesasPuntajesUsuarioNivel = promesasPuntajesUsuarioNivel.concat(
                    puntajesActuales
                );
            });

            // Array de estado de promesas finiquitadas (ya sea resueltas o rechazadas)
            resolucionPromesasPuntajes = await Promise.allSettled(promesasPuntajesUsuarioNivel);
            
            // Crear array de puntajes con los valors de las promesas resueltas (i.e. aquellos puntajes que se puduieron traer del servidor)
            puntajesUsuarioNivel = [];

            resolucionPromesasPuntajes.forEach( resolucion => {
                if (resolucion.status == 'fulfilled'){
                    puntajesUsuarioNivel = puntajesUsuarioNivel.concat(resolucion.value);
                }
            })

            return puntajesUsuarioNivel;
        },

        traerPuntaje: async function(_, {idPuntaje}, contexto) {
            return contexto.dataSources.puntajesAPI.traerPuntaje(idPuntaje);
        },
    },

    Mutation: {
        crearPuntaje: async function(_, {puntaje}, contexto) {
            if (!contexto.usuarioT || !contexto.usuarioT.es_administrador) {
                throw new ApolloError("No tienes los permisos para crear un nuevo puntaje.", 401)
            }
            return contexto.dataSources.puntajesAPI.registrarPuntaje(puntaje);
        },

        eliminarPuntaje: async function(_, {idPuntaje}, contexto) {
            if (!contexto.usuarioT || (!contexto.usuarioT.es_administrador)) {// && usuario != contexto.usuarioT.usuario)) {
                throw new ApolloError("No tienes los permisos para borrar un puntaje.", 401)
            }

            return  contexto.dataSources.puntajesAPI.borrarPuntaje(idPuntaje);
        },

        eliminarPuntajes: async function(_, {usuario, idLeccion}, contexto) {
            if (!contexto.usuarioT || (!contexto.usuarioT.es_administrador)) {// && usuario != contexto.usuarioT.usuario)) { && usuario != contexto.usuarioT.usuario)) {
                throw new ApolloError("No tienes los permisos para borrar puntajes.", 401)
            }

            return contexto.dataSources.puntajesAPI.borrarPuntajes(usuario, idLeccion)
        },
    }
};

module.exports = puntajesResolvers;
