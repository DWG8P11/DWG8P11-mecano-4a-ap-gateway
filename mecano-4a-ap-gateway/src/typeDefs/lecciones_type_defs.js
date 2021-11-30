const { gql } = require('apollo-server');

const leccionesTypeDefs = gql(`
    type Leccion {
        
    }

    extend type Query {
        traerLecciones(nivel: Int): [Leccion!]!
        traerLeccionPorId(idLeccion: String!): Leccion!
        traerLeccionPorNivel(nivel: Int!, nLeccion: Int!): Leccion!
    }

    extend type Mutation {
        crearLeccion(leccion: Leccion!): Leccion!
        actualizarLeccionPorNivel(nivelViejo: Int!, nLeccionViejo: Int!, leccionNueva: Leccion!): Leccion!
        actualizarLeccionPorId(idLeccion: String!, leccionNueva: Leccion!): Leccion!
        eliminarLeccionPorNivel(nivel: Int!, nLeccion: Int!): Int
        eliminarLeccionPorId(idLeccion: String!): Int
    }
`);

module.exports = leccionesTypeDefs;
