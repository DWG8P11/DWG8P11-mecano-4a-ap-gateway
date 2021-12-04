const { gql } = require('apollo-server');

// TODO Fecha...
const puntajesTypeDefs = gql(`
    input PuntajeIn {
        usuario     : String!
        id_leccion  : String!
        precision   : Float!
        cpme        : Int!
        segundos    : Int!
        fecha       : String
    }

    type PuntajeOut {
        id          : String!
        usuario     : String!
        id_leccion  : String!
        precision   : Float!
        cpme        : Int!
        segundos    : Int!
        fecha       : String
    }

    extend type Query {
        traerPuntajes               (usuario    : String, idLeccion : String                ): [PuntajeOut!]!
        traerPuntajesUsuarioLeccion (nivel      : Int!  , nLeccion  : Int!, usuario: String ): [PuntajeOut!]!
        traerPuntaje                (idPuntaje  : String!                                   ): PuntajeOut!
    }

    extend type Mutation {
        crearPuntaje    (puntaje    : PuntajeIn!                ): PuntajeOut!
        eliminarPuntaje (idPuntaje  : String!                   ): String
        eliminarPuntajes(usuario    : String, idLeccion: String ): String
    }
`);

module.exports = puntajesTypeDefs;