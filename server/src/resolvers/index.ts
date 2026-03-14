import { authResolvers } from "./authResolver";

export const resolvers = {
  Mutation: {
    ...authResolvers,
  },
};
