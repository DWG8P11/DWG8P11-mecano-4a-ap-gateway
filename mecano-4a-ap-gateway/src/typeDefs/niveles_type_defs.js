const { gql } = require('apollo-server');

const nivelesTypeDefs = gql(`


    extend type Query {
        traerNiveles: [Nivel!]!
        traerNivel(idNivel: Int!): Nivel!
    }

    extend type Mutation {
        crearNivel(nivel: Nivel!): Nivel!
        actualizarNivel(idNivelViejo: Int!, nivelNuevo Nivel!): Nivel!
        eliminarNivel(idNivel: Int!): Int
    }
`);

module.exports = nivelesTypeDefs;