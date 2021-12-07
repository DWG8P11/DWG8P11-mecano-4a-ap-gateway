const { ApolloError } = require("apollo-server-errors");

const leccionesResolvers = {
    Query: {
        traerLecciones: async function(_, {nivel}, contexto) {
            // nivel es opcional
            return contexto.dataSources.leccionesAPI.traertodasLecciones(nivel);
        },

        traerLeccionesLigeras: async function(_, {nivel}, contexto) {
            // nivel es opcional
            return contexto.dataSources.leccionesAPI.traertodasLeccionesLigeras(nivel);
        },

        traerLeccionPorId: async function(_, {idLeccion}, contexto) {
            return contexto.dataSources.leccionesAPI.traerLeccionPorId(idLeccion);
        },

        traerLeccionPorNivelYLeccion: async function(_, {nivel, nLeccion}, contexto) {
            return contexto.dataSources.leccionesAPI.traerLeccion(nivel, nLeccion);
        },
    },

    Mutation: {
        crearLeccion: async function(_, {leccion}, contexto) {
            if (!contexto.usuarioT || (!contexto.usuarioT.es_administrador)) {
                throw new ApolloError("No tienes los permisos para modificar las Lecciones.", 401)
            }

            return contexto.dataSources.leccionesAPI.registrarLeccion(leccion);
        },

        actualizarLeccionPorNivelYLeccion: async function(_, {nivelViejo, nLeccionViejo, leccionNueva}, contexto) {
            if (!contexto.usuarioT || (!contexto.usuarioT.es_administrador)) {
                throw new ApolloError("No tienes los permisos para modificar las Lecciones.", 401)
            }
            
            return contexto.dataSources.leccionesAPI.actualizarLeccion(nivelViejo, nLeccionViejo, leccionNueva);
        },

        actualizarLeccionPorId: async function(_, {idLeccion, leccionNueva}, contexto) {
            if (!contexto.usuarioT || (!contexto.usuarioT.es_administrador)) {
                throw new ApolloError("No tienes los permisos para modificar las Lecciones.", 401)
            }

            return contexto.dataSources.leccionesAPI.actualizarLeccionPorId(idLeccion, leccionNueva);
        },

        eliminarLeccionPorNivelYLeccion: async function(_, {nivel, nLeccion}, contexto) {
            if (!contexto.usuarioT || (!contexto.usuarioT.es_administrador)) {
                throw new ApolloError("No tienes los permisos para modificar las Lecciones.", 401)
            }

            return contexto.dataSources.leccionesAPI.borrarLeccion_sin_detalle(nivel, nLeccion);
        },

        eliminarLeccionPorId: async function(_, {idLeccion}, contexto) {
            if (!contexto.usuarioT || (!contexto.usuarioT.es_administrador)) {
                throw new ApolloError("No tienes los permisos para modificar las Lecciones.", 401)
            }

            return contexto.dataSources.leccionesAPI.borrarLeccionPorId(idLeccion);
        },
    }
};

module.exports = leccionesResolvers;
