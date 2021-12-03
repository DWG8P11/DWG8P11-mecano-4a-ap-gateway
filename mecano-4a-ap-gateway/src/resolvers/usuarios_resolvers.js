const usuariosResolvers = {
    Query: {
        detallesUsuarioPorId: async function(_, {idUsuario}, context) {
            if (idsuario == userIdToken) {
                return context.dataSources.UsuariosAPI.getUser(idUsuario);
            }
        },

        listaUsuarios: async function(_, __, context) {

        }
    },

    Mutation: {
        logIn: async function(_, {credenciales}, context) {

        },

        actualizarToken: async function(_, {tActualizacion}, context) {

        },

        registrarUsuario: async function(_, {registroInput}, context) {

        },

        actualizarUsuarios: async function(_, {idUsuario, actualizacionInput}, context) {

        },

        eliminarUsuarios: async function(_, {idUsuario}, context) {

        }
    }
}

module.exports = usuariosResolvers