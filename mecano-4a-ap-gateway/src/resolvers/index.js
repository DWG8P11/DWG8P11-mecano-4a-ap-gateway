const usuariosResolvers  = require('./usuarios_resolvers');
const nivelesResolvers   = require('./niveles_resolvers');
const leccionesResolvers = require('./lecciones_resolvers');
const puntajesResolvers  = require('./puntajes_resolvers');

const lodash = require('lodash');

const resolvers = lodash.merge(usuariosResolvers, nivelesResolvers, leccionesResolvers, puntajesResolvers);

// Nombre del objeto que se debe importar en el index.js general para obtener los resolvers:
module.exports = resolvers;
