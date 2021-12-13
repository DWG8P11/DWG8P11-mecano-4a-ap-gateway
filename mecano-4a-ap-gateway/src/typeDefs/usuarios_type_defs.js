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
        telefono    : Float!
        pais        : String
        departamento: String
        ciudad      : String
        password    : String!
        is_staff    : Boolean
    }
    input UsuarioAct {
        nombre      : String
        usuario     : String
        correo      : String
        telefono    : Float
        pais        : String
        departamento: String
        ciudad      : String
        password    : String
        is_staff    : Boolean
    }
    type UsuarioOut {
        id              : Int
        nombre          : String
        usuario         : String
        correo          : String
        telefono        : Float
        pais            : String
        departamento    : String
        ciudad          : String
        administrador   : Boolean
    }
    type Mutation {
        logIn               (credenciales   : CredencialesIn!)                      : Token!
        actualizarToken     (tActualizacion : String!)                              : TAcceso!
        registrarUsuario    (registroInput  : UsuarioIn!  )                         : Token!
        actualizarUsuario   (idUsuario      : Int!, actualizacionInput: UsuarioAct!): UsuarioOut!
        eliminarUsuario     (idUsuario      : Int!)                                 : String
    }
    type Query {
        detallesUsuarioPorId(idUsuario      : Int!)             : UsuarioOut!
        detallesUsuarioAutenticado                              : UsuarioOut!
        listaUsuarios                                           : [UsuarioOut!]!
    }`);

module.exports = usuariosTypeDefs;
