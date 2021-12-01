const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class PuntajesAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.mecano_4a_be_puntajes_url;
    }

    async registrarPuntaje(puntaje) {
        puntaje = new Object(JSON.parse(JSON.stringify(puntaje)));
        return await this.post(`/aprende/puntajes`, puntaje);
    }

    async traerPuntajes(nombre_usuario,id_leccion) {
        return await this.get(`/aprende/puntajes`, {usuario= nombre_usuario, idLeccion = id_leccion});
    }

    async traerPuntaje(idPuntaje) {
        return await this.get(`/aprende/puntajes/${idPuntaje}`);
    }

    async actualizarPuntaje(idViejo, puntajeNuevo) {
        puntajeNuevo = new Object(JSON.parse(JSON.stringify(puntajeNuevo)));
        return await this.put(`/aprende/puntajes/${idViejo}`, puntajeNuevo);
    }
    
    async borrarPuntaje(idPuntaje) {
        return await this.delete(`/aprende/puntajes/${idPuntaje}/`);
    }

    async borrarPuntajes(nombre_usuario, id_leccion) {
        return await this.delete(`/aprende/puntajes/`,{usuario= nombre_usuario, idLeccion = id_leccion});
    }

    
}
module.exports = PuntajesAPI;