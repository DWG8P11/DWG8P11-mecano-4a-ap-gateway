const { ApolloError } = require('apollo-server');
const serverConfig = require('../server');
const fetch = require('node-fetch');

const authentication = async ({ req }) => {
    const token = req.headers.authorization || '';
    if (token == '')
        return { userT: null }
    else {
        try {
        let requestOptions = {
            method: 'POST', headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token }), redirect: 'follow'
        };

        let response = await fetch(
            `${serverConfig.mecano_4a_be_usuarios_url}/verifyToken/`,
            requestOptions)
        if (response.status != 200) {
            // throw new ApolloError(`SESION INACTIVA - ${401}` + response.status, 401)
            return { userT: null }
        }

        return { userT: {
                            id: (await response.json()).UserId,
                            usuario: (await response.json()).usuario,
                            es_administrador: (await response.json()).es_administrador
                        } };
    }
    catch (error) {
        throw new ApolloError(`TOKEN ERROR: ${500}: ${error}`, 500);
    }
    }
}
module.exports = authentication;