const { ApolloServer } = require('apollo-server');

const typeDefs         = require('./typeDefs');
const resolvers        = require('./resolvers');
const UsuariosAPI      = require('./dataSources/usuarios_api');
const PuntajesAPI      = require('./dataSources/puntajes_api');
const NivelesAPI       = require('./dataSources/niveles_api');
const LeccionesAPI     = require('./dataSources/lecciones_api');
const authentication   = require('./utils/authentication');

const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,

    dataSources: () => ({
        usuariosAPI  : new UsuariosAPI(),
        puntajesAPI  : new PuntajesAPI(),
        nivelesAPI   : new NivelesAPI (),
        leccionesAPI : new LeccionesAPI (),
    }),
    introspection : true,
    playground    : true
});

server.listen(process.env.PORT || 4000).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
    });



