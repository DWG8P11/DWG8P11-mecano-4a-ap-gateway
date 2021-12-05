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

        traerPuntajesUsuarioLeccion: async function(_, {nivel, nLeccion, usuario}, contexto) {
            // Hacer uso del microservicio de lecciones para determinar idLeccion
            let leccion = contexto.dataSources.leccionesAPI.traerLeccion(nivel, nLeccion);

            return contexto.dataSources.putnajesAPI.traerPuntajes(usuario, leccion.id);
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

            let paramsPeticion = {}

            if (usuario) {
                paramsPeticion.usuario = usuario;
            }

            if (idLeccion) {
                paramsPeticion.idLeccion = idLeccion;
            }

            return contexto.dataSources.puntajesAPI.borrarPuntajes(usuario, idLeccion)
        },
    }
};

module.exports = puntajesResolvers;
