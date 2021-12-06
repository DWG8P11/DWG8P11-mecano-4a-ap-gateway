const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig       = require('../server');
class NivelesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.mecano_4a_be_niveles_url;
    }

    async registroNuevoNivel(nuevoNivel) {
        nuevoNivel = new Object(JSON.parse(JSON.stringify(nuevoNivel)));
        return await this.post(`/aprende/niveles`, nuevoNivel);
    }

    async traerNiveles() {
        return await this.get(`/aprende/niveles`);
    }

    async traerNivel(id) {
        return await this.get(`/aprende/niveles/${id}`);
    }

    async actualizarNivel(idViejo,nivelNuevo) {
        nivelNuevo = new Object(JSON.parse(JSON.stringify(nivelNuevo)));
        return await this.put(`/aprende/niveles/${idViejo}`, nivelNuevo);
    }

    async borrarNivel(id) {
        return await this.delete(`/aprende/niveles/${id}`);
    }
   
}
module.exports = NivelesAPI;