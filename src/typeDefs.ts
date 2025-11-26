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
    heroes: [Hero]
    hero(id: ID!): Hero
    gods: [God]
    god(id: ID!): God
    quests: [Quest]
    quest(id: ID!): Quest
  }
`;

export default RootQuery;
