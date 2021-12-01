const { gql } = require('apollo-server');
const voidTypeDef = gql(`
    type Void { }
`);

module.exports = voidTypeDef;