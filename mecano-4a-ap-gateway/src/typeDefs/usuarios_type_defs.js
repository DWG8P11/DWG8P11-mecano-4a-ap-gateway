const { gql } = require('apollo-server');

const usuariosTypeDefs = gql(`
    type Token {
        refresh : String!
        access  : String!
    }
    type TAcceso {
        access: String!
    }
    input CredencialesIn {
        correo  : String!
        password: String!
    }
    input UsuarioIn {
        nombre      : String!
        usuario     : String!
        correo      : String!
        telefono    : Int!
        pais        : String
        departamento: String
        ciudad      : String
        password    : String!
        is_staff    : String
    }
    type UsuarioOut {
        id              : Int!
        nombre          : String!
        usuario         : String!
        correo          : String!
        telefono        : Int!
        pais            : String!
        departamento    : String!
        ciudad          : String!
        administrador   : String!
    }
    type Mutation {
        logIn               (credenciales   : CredencialesIn!)                      : Token!
        actualizarToken     (tActualizacion : String!)                               : TAcceso!
        registrarUsuario    (registroInput  : UsuarioIn!  )                          : Token!
        actualizarUsuario   (idUsuario      : Int!, actualizacionInput: UsuarioIn!  ): UsuarioOut!
        eliminarUsuario     (idUsuario      : Int!)                                  : Int
    }
    type Query {
        detallesUsuarioPorId(idUsuario      : Int!)             : UsuarioOut!
        listaUsuarios                                           : [UsuarioOut!]!
    }`);

module.exports = usuariosTypeDefs;
