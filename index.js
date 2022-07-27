const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

 
  type Sloth {
    species: String
    
  }


  type Query {
    sloths: [Sloth]
  }
`;

const sloths = [
    {
        species: "Pygmy",
    },
    {
        species: "Linnaeus",
    },
    {
        species: "Hoffman",
    },
    {
        species: "Brown-throated",
    },
    {
        species: "Pale-throated",
    },
    {
        species: "Maned",
    },
];

const resolvers = {
    Query: {
      sloths: () => sloths,
    },
  };