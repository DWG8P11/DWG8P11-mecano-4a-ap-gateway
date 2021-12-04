const { ApolloError } = require('apollo-server');
const serverConfig = require('../server');
const fetch = require('node-fetch');

const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';
    if (token == '')
        return { usuarioT: null }
    else { // Hay un token
        try {
            let requestOptions = {
                method: 'POST', headers: { "Content-Type": "application/json" },
                body: JSON.stringify({token: token.substring(7)}), redirect: 'follow'
            };

            let response = await fetch(`${serverConfig.mecano_4a_be_usuarios_url}/verifyToken/`,
                requestOptions) // De tipo objeto

            let response_body = (await response.json()) // El cuerpo de la respuesta

            if (response.status != 200) {
                // throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401)
                return { usuarioT: null, token: token.substring(7)}
            }

            return {usuarioT: {
                            id: response_body.UserId,
                            usuario: response_body.usuario,
                            es_administrador: response_body.es_administrador
                        },
                    token: token.substring(7)
                    };
        }
        catch (error) {
            throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
        }
    }
}
module.exports = authentication;