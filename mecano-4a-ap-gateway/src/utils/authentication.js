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

            // console.log("Request options", requestOptions)

            let response = await fetch(`${serverConfig.mecano_4a_be_usuarios_url}/verifyToken/`,
                requestOptions)
                // .then(resp => {
                //     console.log("resp en then", typeof(resp), resp)
                //     response = resp
                // }).catch(err => {
                //     console.log("error en fetch")
                //     response = null

                // })

            let response_body = (await response.json())
            
            console.log("despues del fetch")
            console.log("Response:", typeof(response), response, response.status)
            console.log("Response body", typeof(response_body), response_body)

            if (response.status != 200) {
                // throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401)
                console.log("No se obtuvo un 200");
                return { usuarioT: null, token: token.substring(7)}
            }
            console.log("se obtuvo un 200")

            console.log("A punto de retornar el contexto")

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