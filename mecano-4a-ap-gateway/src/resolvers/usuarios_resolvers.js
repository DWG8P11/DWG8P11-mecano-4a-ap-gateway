const { ApolloError } = require("apollo-server-errors");

const usuariosResolvers = {
    Query: {
        detallesUsuarioPorId: async function(_, {idUsuario}, context) {
            if (!context.usuarioT){
                throw new ApolloError("No autenticado. Acceso No Autorizado", 401)
            }

            if (idUsuario == context.usuarioT.id || context.usuarioT.es_administrador) {
                return context.dataSources.usuariosAPI.getUser(idUsuario); // Si no existe, el API Gateway da una respuesta http manifestando que no se encontró. Esto NO bota un error, un try catch no hace nada porque nunca se llegará al catch
            }
            
            throw new ApolloError("Acceso No Autorizado", 401)
        },

        detallesUsuarioAutenticado: async function(_, __, context) {
            if (!context.usuarioT) {
                throw new ApolloError("No hay usuario autenticado.", 400)
            }

            // return this.detallesUsuarioPorId(_, {idUsuario: context.usuarioT.id}, context); // Esto funciona
            return context.dataSources.usuariosAPI.getUser(idUsuario);
        },

        listaUsuarios: async function(_, __, context) {
            // TODO Agregar 
            return [];
        }
    },

    Mutation: {
        logIn: async function(_, {credenciales}, context) {
            return context.dataSources.usuariosAPI.authRequest(credenciales);
        },

        actualizarToken: async function(_, {tActualizacion}, context) {
            return context.dataSources.usuariosAPI.refreshToken(tActualizacion);
        },

        registrarUsuario: async function(_, {registroInput}, context) {
            // TODO Confirmar que si el usuario a crear es administrador, entonces la persona autenticada es administradora
            console.log("Tipo de dato registroInput", typeof(registroInput), registroInput)
            return context.dataSources.usuariosAPI.createUser(registroInput);
        },

        actualizarUsuario: async function(_, {idUsuario, actualizacionInput}, context) {
            // Error: no autenticado
            if (!context.usuarioT){
                throw new ApolloError("No autenticado. Modificación no autorizada", 401)
            }

            // Permitir: si el usuario autenticado es el que se desea afectar
            if (idUsuario == context.usuarioT.id) {
                return context.dataSources.usuariosAPI.update(idUsuario, actualizacionInput);
            }
            
            // Permitir: si el usuario autenticado es administrador y 
            //           no se va a afectar a otro usuario administrador
            if (context.usuarioT.es_administrador && !(await context.dataSources.usuariosAPI.getUser(idUsuario)).administrador) {
                return context.dataSources.usuariosAPI.update(idUsuario, actualizacionInput);
            }

            throw new ApolloError("Modificación no autorizada", 401);
        },

        // TODO Actualizar usuario autenticado?

        eliminarUsuario: async function(_, {idUsuario}, context) {
            // TODO Solo permitir que se borre mi propio usuario, o si soy administrador cualquier otro usuario que no sea administrador
            // TODO Eliminar todos los puntajes de este usuario?
            return context.dataSources.usuariosAPI.delete(idUsuario);
        }
    }
}

module.exports = usuariosResolvers