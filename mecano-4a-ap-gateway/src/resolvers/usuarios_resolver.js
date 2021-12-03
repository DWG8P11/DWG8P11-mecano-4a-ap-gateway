const usuariosResolvers = {
    Query: {
        detallesUsuarioPorId: function(_, {idUsuario}, {dataSources, userIdToken}) {
            if (idsuario == userIdToken) {
                return dataSources.UsuariosAPI.getUser(idUsuario);
            }
        },

        

    },

    Mutation: {

    }
}