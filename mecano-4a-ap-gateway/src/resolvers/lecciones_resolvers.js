const leccionesResolvers = {
    Query: {
        traerLecciones: async function(_, {nivel}, context) {

        },

        traerLeccionPorId: async function(_, {idLeccion}, context) {

        },

        traerLeccionesPorNivel: async function(_, {nivel}, context) {

        },

        traerLeccionPorNivelYLeccion: async function(_, {nivel, nLeccion}, context) {

        },
    },

    Mutation: {
        crearLeccion: async function(_, {leccion}, context) {
            
        },

        actualizarLeccionPorNivelYLeccion: async function(_, {nivel, nLeccion, leccionNueva}, context) {

        },

        actualizarLeccionPorId: async function(_, {idLeccion, leccionNueva}, context) {

        },

        eliminarLeccionPorNivelYLeccion: async function(_, {nivel, nLeccion}, context) {

        },

        eliminarLeccionPorId: async function(_, {idLeccion}, context) {

        },
    }
};

module.exports = leccionesResolvers;
