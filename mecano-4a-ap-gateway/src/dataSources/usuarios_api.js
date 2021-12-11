const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');
class UsuariosAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = serverConfig.mecano_4a_be_usuarios_url;
    }
    async createUser(user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.post(`/user/`, user);
    }
    async getUser(userId) {
        // console.log("En getUser (datasources) Token ", this.context.token)
        return await this.get(`/user/${userId}/`, {}, {headers: {Authorization: `Bearer ${this.context.token}`}});
    }
    async authRequest(credentials) {
        credentials = new Object(JSON.parse(JSON.stringify(credentials)));
        return await this.post(`/login/`, credentials);
    }
    async refreshToken(token) {
        token = new Object(JSON.parse(JSON.stringify({ refresh: token })));
        return await this.post(`/refresh/`, token);
    }

    async delete(userId) {
        return await this.delete(`/delete/${userId}/`, {}, {headers: {Authorization: `Bearer ${this.context.token}`}});
    }

    async update(userId,user) {
        user = new Object(JSON.parse(JSON.stringify(user)));
        return await this.patch(`/update/${userId}/`, user, {headers: {Authorization: `Bearer ${this.context.token}`}});
    }

}
module.exports = UsuariosAPI;