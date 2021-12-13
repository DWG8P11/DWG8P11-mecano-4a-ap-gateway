const { ApolloError } = require("apollo-server-errors");

const nivelesResolvers = {
    Query: {
        traerNivel: async function(_, {idNivel}, contexto) {
            return contexto.dataSources.nivelesAPI.traerNivel(idNivel);
        },

        traerNiveles: async function(_, __, contexto) {
            return contexto.dataSources.nivelesAPI.traerNiveles();
        },

        traerNivelesLigeros: async function(_, __, contexto) {
            return contexto.dataSources.nivelesAPI.traerNivelesLigeros();
        },
    },

    Mutation: {
        registrarNivel: async function(_, {nivel}, contexto) {
            if (!contexto.usuarioT || !contexto.usuarioT.es_administrador) {
                throw new ApolloError("No tienes los permisos para crear un nuevo nivel.", 401)
            }
            return contexto.dataSources.nivelesAPI.registroNuevoNivel(nivel);
        },

        actualizarNivel: async function(_, {idNivelViejo, nivelNuevo}, contexto) {
            if (!contexto.usuarioT || !contexto.usuarioT.es_administrador) {
                throw new ApolloError("No tienes los permisos para crear una nueva lección.", 401)
            }
            return contexto.dataSources.nivelesAPI.actualizarNivel(idNivelViejo, nivelNuevo);
        },

        eliminarNivel: async function(_, {idNivel}, contexto) {
            if (!contexto.usuarioT || !contexto.usuarioT.es_administrador) {
                throw new ApolloError("No tienes los permisos para borrar un nivel.", 401)
            }
            return  contexto.dataSources.nivelesAPI.borrarNivel(idNivel);
        },
    }
};

module.exports = nivelesResolvers;
