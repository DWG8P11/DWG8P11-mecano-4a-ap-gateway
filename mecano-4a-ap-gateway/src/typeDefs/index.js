//Se llama al typedef (esquema) de cada submodulo
const usuariosTypeDefs  = require('./usuarios_type_defs');
const nivelesTypeDefs   = require('./niveles_type_defs');
const leccionesTypeDefs = require('./lecciones_type_defs');
const puntajesTypeDefs  = require('./puntajes_type_defs');

//Se unen
const schemasArrays = [usuariosTypeDefs, nivelesTypeDefs, leccionesTypeDefs, puntajesTypeDefs];

//Se exportan
module.exports = schemasArrays;