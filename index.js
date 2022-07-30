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
        species: "Linnaeus",
    },
    {
        species: "Hoffman",
    },
    {
        species: "Pygmy",
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


const {
    ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    /**
     * What's up with this embed: true option?
     * These are our recommended settings for using AS;
     * they aren't the defaults in AS3 for backwards-compatibility reasons but
     * will be the defaults in AS4. For production environments, use
     * ApolloServerPluginLandingPageProductionDefault instead.
    **/
    plugins: [
        ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`SlothQL  Server ready at ${url}`);
});