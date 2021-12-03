const usuariosResolvers = {
    Query: {
        detallesUsuarioPorId: async function(_, {idUsuario}, context) {
            if (idsuario == context.userT.id) {
                return context.dataSources.UsuariosAPI.getUser(idUsuario);
            }
        },

        listaUsuarios: async function(_, __, context) {
            // TODO Agregar 
            return [];
        }
    },

    Mutation: {
        logIn: async function(_, {credenciales}, context) {
            return context.dataSources.usuariosApi.authRequest(credenciales);
        },

        actualizarToken: async function(_, {tActualizacion}, context) {
            return context.dataSources.usuariosApi.refreshToken(tActualizacion);
        },

        registrarUsuario: async function(_, {registroInput}, context) {
            return context.dataSources.usuariosApi.createUser(registroInput);
        },

        actualizarUsuarios: async function(_, {idUsuario, actualizacionInput}, context) {
            return context.dataSources.usuariosApi.update(idUsuario, actualizacionInput);
        },

        eliminarUsuarios: async function(_, {idUsuario}, context) {
            return context.dataSources.usuariosApi.delete(idUsuario);
        }
    }
}

module.exports = usuariosResolvers