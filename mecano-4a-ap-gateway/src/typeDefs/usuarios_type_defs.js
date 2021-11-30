const { gql } = require('apollo-server');
const authTypeDefs = gql `
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
        registrarUsuario    (registroInput  : RegistroInp!)     : Token!
        logIn               (credenciales   : CredencialesInp!) : Token!
        actualizacionToken  (tActualizacion : String!)          : TAcceso!
    }
    type Query {
        detallesUsuarioPorId(idUsuario      : Int!)             : UsuarioDetalle!
    }`;
module.exports = usuariosTypeDefs;