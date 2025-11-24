const RootQuery = `#graphql
  type Hero {
    id: ID!
    name: String!
    city: String!
  }

  type God {
    id: ID!
    name: String!
    domains: [String!]!
  }

  type Quest {
    id: ID!
    title: String!
    status: String!
    hero: Hero!
  }

  type Query {
    heros: [Hero]
    gods: [God]
    quests: [Quest]
  }
`;

export default RootQuery;
