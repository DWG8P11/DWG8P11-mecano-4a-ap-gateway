const { gql } = require('apollo-server');
const usuariosTypeDefs = gql(`
    type Token {
        refresh : String!
        access  : String!
    }
    type TAcceso {
        access: String!
    }
    input CredencialesInp {
        username: String!
        password: String!
    }
    input RegistroInp {
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
    type UsuarioDetalles {
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
        logIn               (credenciales   : CredencialesInp!)                      : Token!
        actualizarToken     (tActualizacion : String!)                               : TAcceso!
        registrarUsuario    (registroInput  : RegistroInp!)                          : Token!
        actualizarUsuario   (idUsuario      : Int!, actualizacionInput: RegistroInp!): Token!
        eliminarUsuario     (idUsuario      : Int!)                                  : Token!
    }
    type Query {
        detallesUsuarioPorId(idUsuario      : Int!)             : UsuarioDetalles!
        listaUsuarios                                           : [UsuarioDetalles!]!
    }`);
module.exports = usuariosTypeDefs;