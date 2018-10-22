const express = require('express');
//$FlowFixMe
const expressGraphQL = require('express-graphql');
const app = express();
const schema = require('./backend/schema');

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('Listening');
});
