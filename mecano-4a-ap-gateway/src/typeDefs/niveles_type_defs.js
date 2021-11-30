const { gql } = require('apollo-server');

// TODO mejorar imagen
// TODO mejorar eliminar en el back para que retorne el ID
const nivelesTypeDefs = gql(`
    type Nivel {
        id: Int!
        nombre: String!
        descripcion: String
        imagen: String
    }

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