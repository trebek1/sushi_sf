//$FlowFixMe
const graphql = require('graphql');
const axios = require('axios');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const RestaurantType = new GraphQLObjectType({
  name: 'Restaurant',
  fields: () => ({
    _id: { type: GraphQLString },
    address: { type: GraphQLString },
    alt: { type: GraphQLString },
    categories: { type: new GraphQLList(GraphQLString) },
    name: { type: GraphQLString },
    phone: { type: GraphQLString },
    price: { type: GraphQLString },
    src: { type: GraphQLString },
    stars: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    restaurant: {
      type: new GraphQLList(RestaurantType),
      args: { id: { type: GraphQLString } },
      resolve(parentValue, args) {
        return axios
          .get(
            `https://sushiapp-456c1.firebaseio.com/restaurants/${
              args.id
            }.json?auth=${process.env.SUSHI || ''}`
          )
          .then(resp => resp.data);
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
