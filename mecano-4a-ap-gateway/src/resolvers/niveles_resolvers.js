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

        actualizarNiveles: async function(_, {idNivelViejo, actualizacionInput}, context) {

        },

        eliminarNivels: async function(_, {idNivel}, context) {

        },
    }
};

module.exports = nivelesResolvers;
