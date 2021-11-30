const { gql } = require('apollo-server');

// TODO Mejorar imagen... como entero64?
const puntajesTypeDefs = gql(`


    extend type Query {
        traerPuntajes(usuario: String, idLeccion: String): [PuntajeOut!]!
        traerPuntajesUsuarioLeccion(nivel: Int!, nLeccion: Int!, usuario: String): [PuntajeOut!]!
        traerPuntaje(idPuntaje: String!): PuntajeOut!
    }

    extend type Mutation {
        crearPuntaje(puntaje: PuntajeIn!): PuntajeOut!
        eliminarPuntaje(idPuntaje: String!): Int
        eliminarPuntajes(usuario: String, idLeccion: String): Int
    }
`);

module.exports = puntajesTypeDefs;