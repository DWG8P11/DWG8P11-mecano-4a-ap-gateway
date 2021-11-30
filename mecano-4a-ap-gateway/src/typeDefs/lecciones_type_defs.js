const { gql } = require('apollo-server');

// TODO Mejorar imagen... como entero64?
const leccionesTypeDefs = gql(`
    input LeccionIn {
        titulo: String!
        nivel: Int!
        n_leccion: Int!
        texto: String!
        teclas: [String!]!
        imagen: String
        mini1: Int!
        mini2: Int!
        mini3: Int!
        mini4: Int!
        ignorarMayus: Boolean
        ignorarTildes: Boolean
        ignorarDieres: Boolean
    }

    type LeccionOut {
        id: String!
        titulo: String!
        nivel: Int!
        n_leccion: Int!
        texto: String!
        teclas: [String!]!
        imagen: String!
        mini1: Int!
        mini2: Int!
        mini3: Int!
        mini4: Int!
        ignorarMayus: Boolean!
        ignorarTildes: Boolean!
        ignorarDieres: Boolean!
    }

    extend type Query {
        traerLecciones(nivel: Int): [LeccionOut!]!
        traerLeccionPorId(idLeccion: String!): LeccionOut!
        traerLeccionPorNivel(nivel: Int!, nLeccion: Int!): LeccionOut!
    }

    extend type Mutation {
        crearLeccion(leccion: LeccionIn!): LeccionOut!
        actualizarLeccionPorNivel(nivelViejo: Int!, nLeccionViejo: Int!, leccionNueva: LeccionIn!): LeccionOut!
        actualizarLeccionPorId(idLeccion: String!, leccionNueva: LeccionIn!): LeccionOut!
        eliminarLeccionPorNivel(nivel: Int!, nLeccion: Int!): Int
        eliminarLeccionPorId(idLeccion: String!): Int
    }
`);

module.exports = leccionesTypeDefs;
