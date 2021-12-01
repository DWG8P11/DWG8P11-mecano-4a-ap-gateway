const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class NivelesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.mecano_4a_be_niveles_url;
    }

    async nuevaLeccion(nuevaLeccion) {
        return await this.post(`/aprende/lecciones`);
    }
    async traerLeccion(leccion) {
        return await this.get(`/aprende/lecciones/{nivel}/{nLeccion}`);
    }

    async traerLeccionPorId(leccion) {
        return await this.get(`/aprende/lecciones/{idLeccion}`);
    }

    async traertodasLecciones(lecciones) {
        return await this.get(`/aprende/lecciones`);
    }

    async actualizarLeccion(leccionNueva) {
        return await this.put(`/aprende/lecciones/{nivelViejo}/{nLeccionViejo}`);
    }

    async borrarLeccion(idLeccion) {
        return await this.delete(`/aprende/lecciones/{nivel}/{nLeccion}`, idLeccion);
    }

   

    GET: traer la lección identificada identificada por el número de nivel y número de lección dados
    PUT: actualizar la lección indicada.
    DELETE: actualizar la lección indicada.
    
}
module.exports = AccountAPI;