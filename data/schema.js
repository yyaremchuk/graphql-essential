import { buildSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = `
    type Friend {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [Contact]
    }
    
    type Alien {
        id: ID
        firstName: String
        lastName: String
        planet: String
    }
    
    enum Gender {
        MALE
        FEMALE
        OTHER
    }
    
    type Contact {
        firstName: String
        lastName: String
    }
    
    type Query { 
        getOneFriend(id: ID!): Friend,
        getAliens: [Alien]
    }
    
    input FriendInput {
        id: ID
        firstName: String!
        lastName: String
        gender: Gender
        age: Int
        language: String
        email: String
        contacts: [ContactInput]
    }
    
    input ContactInput {
        firstName: String
        lastName: String
    }
    
    type Mutation {
        createFriend(input: FriendInput): Friend,
        updateFriend(input: FriendInput): Friend,
        deleteFriend(id: ID!): String
    }
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers });
