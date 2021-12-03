const nivelesResolvers = {
    Query: {
        traerNivel: async function(_, {idNivel}, context) {

        },

        traerNiveles: async function(_, __, context) {

        },
    },

    Mutation: {
        registrarNivel: async function(_, {nivel}, context) {

        },

        actualizarNivel: async function(_, {idNivelViejo, actualizacionInput}, context) {

        },

        eliminarNivel: async function(_, {idNivel}, context) {

        },
    }
};

module.exports = nivelesResolvers;
