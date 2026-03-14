import { shield, and, or } from "graphql-shield";
import { isAuthenticated, isAdmin, isTeacher } from "./rules";

export const permissions = shield({
  Query: {
    me: isAuthenticated,

    users: isAdmin,

    teachers: or(isAdmin, isTeacher),

    students: or(isAdmin, isTeacher),
  },

  Mutation: {
    // createTeacher: isAdmin,
    // createStudent: or(isAdmin, isTeacher),
    // deleteUser: isAdmin,
  },
});
