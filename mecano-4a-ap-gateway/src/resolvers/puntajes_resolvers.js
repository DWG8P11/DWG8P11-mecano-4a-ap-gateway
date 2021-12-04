const puntajesResolvers = {
    Query: {
        traerPuntajes: async function(_, {usuario, idLeccion}, contexto) {
            if (usuario) {
                if (!contexto.usuarioT || !contexto.usuarioT.es_administrador) {
                    throw new ApolloError("No tienes los permisos para ver los puntajes de este usuario.", 401)
                }
            }
            return contexto.dataSources.puntajesAPI.traerPuntajes(usuario, idLeccion);
        },

        traerPuntajesUsuarioLeccion: async function(_, {nivel, nLeccion, usuario}, contexto) {
            // TODO
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
            return contexto.dataSources.puntajeesAPI.registrarPuntaje(puntaje);
        },

        eliminarPuntaje: async function(_, idPuntaje, contexto) {
            if (!contexto.usuarioT || !contexto.usuarioT.es_administrador) {
                throw new ApolloError("No tienes los permisos para borrar un puntaje.", 401)
            }

            return  contexto.dataSources.puntajeesAPI.borrarPuntaje(idPuntaje);
        },

        eliminarPuntajes: async function(_, {usuario, idLeccion}, contexto) {
            if (!contexto.usuarioT || !contexto.usuarioT.es_administrador) {
                throw new ApolloError("No tienes los permisos para borrar un puntaje.", 401)
            }

            // TODO
        },
    }
};

module.exports = puntajesResolvers;
