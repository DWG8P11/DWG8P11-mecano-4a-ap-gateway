const usuariosResolvers  = require('./usuarios_resolvers');
const nivelesResolvers   = require('./niveles_resolvers');
const leccionesResolvers = require('./lecciones_resolvers');
const puntajesResolvers  = require('./puntajes_resolvers');

const adicionalesResolvers = {
    Query: {
        tocarMicroServicios: async function(_, __, contexto) {
            contexto.dataSources.usuariosAPI.tocarMicroservicio();
            contexto.dataSources.nivelesAPI.tocarMicroservicio();
            contexto.dataSources.puntajesAPI.tocarMicroservicio();

            return "Microservicios tocados.";
        }
    }
}

const lodash = require('lodash');

const resolvers = lodash.merge(usuariosResolvers, nivelesResolvers, leccionesResolvers, puntajesResolvers, adicionalesResolvers);

// Nombre del objeto que se debe importar en el index.js general para obtener los resolvers:
module.exports = resolvers;
