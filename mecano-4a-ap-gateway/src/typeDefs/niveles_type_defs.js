const { gql } = require('apollo-server');

// TODO mejorar imagen
// TODO mejorar eliminar en el back para que retorne el ID

const nivelesTypeDefs = gql(`
    input NivelIn {
        id          : Int!
        nombre      : String!
        descripcion : String
        imagen      : String
    }

    type NivelOut {
        id          : Int!
        nombre      : String!
        descripcion : String!
        imagen      : String!
    }

    extend type Query {
        traerNiveles                : [NivelOut!]!
        traerNivel  (idNivel: Int!) : NivelOut!
    }

    extend type Mutation {
        registrarNivel  (nivel          : NivelIn!                    )   : NivelOut!
        actualizarNivel (idNivelViejo   : Int!, nivelNuevo: NivelIn!  )   : NivelOut!
        eliminarNivel   (idNivel        : Int!                      )   : Int
    }
`);

module.exports = nivelesTypeDefs;