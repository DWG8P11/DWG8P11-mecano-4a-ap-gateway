//Se llama al typedef (esquema) de cada submodulo
const usuariosTypeDefs  = require('./usuarios_type_defs');
const nivelesTypeDefs   = require('./niveles_type_defs');
const leccionesTypeDefs = require('./lecciones_type_defs');
const puntajesTypeDefs  = require('./puntajes_type_defs');

const { gql } = require('apollo-server');
const adicionalesTypeDefs = gql(`
    extend type Query {
        tocarMicroServicios: String
    }
`);

//Se unen
const schemasArrays = [usuariosTypeDefs, nivelesTypeDefs, leccionesTypeDefs, puntajesTypeDefs, adicionalesTypeDefs];

//Se exportan
module.exports = schemasArrays;