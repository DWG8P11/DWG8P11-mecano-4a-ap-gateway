const puntajesResolvers = {
    Query: {
        traerPuntajes: async function(_, {usuario, idLeccion}, context) {

        },

        traerPuntajesUsuarioLeccion: async function(_, {nivel, nLeccion, usuario}, context) {

        },

        traerPuntaje: async function(_, {idPuntaje}, context) {

        },
    },

    Mutation: {
        crearPuntaje: async function(_, {puntaje}, context) {

        },

        eliminarPuntaje: async function(_, idPuntaje, context) {

        },

        eliminarPuntajes: async function(_, {usuario, idLeccion}, context) {

        },
    }
};

module.exports = puntajesResolvers;
