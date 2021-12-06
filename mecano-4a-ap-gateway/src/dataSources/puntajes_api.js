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

    async traerPuntajes(nombre_usuario = null, id_leccion = null) {
        console.log("traerPutajes usuario = ", nombre_usuario, "id_leccion =", id_leccion, "fin");
        let paramsPeticion = {}

        if (nombre_usuario) {
            paramsPeticion.usuario = nombre_usuario;
        }

        if (id_leccion) {
            paramsPeticion.idLeccion = id_leccion;
        }
        return await this.get(`/aprende/puntajes`, paramsPeticion);
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

    async borrarPuntajes(nombre_usuario = null, id_leccion = null) {
        let paramsPeticion = {}

        if (nombre_usuario) {
            paramsPeticion.usuario = nombre_usuario;
        }

        if (id_leccion) {
            paramsPeticion.idLeccion = id_leccion;
        }
        
        return await this.delete(`/aprende/puntajes/`, paramsPeticion);
    }

    
}
module.exports = PuntajesAPI;