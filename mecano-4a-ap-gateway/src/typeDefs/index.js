//Se llama al typedef (esquema) de cada submodulo
const nivelesTypeDefs = require('./niveles_type_defs');
const leccionesTypeDefs = require('./lecciones_type_defs');
const puntajesTypeDefs = require('./puntajes_type_defs');

//Se unen
const schemasArrays = [nivelesTypeDefs, leccionesTypeDefs, puntajesTypeDefs];

//Se exportan
module.exports = schemasArrays;