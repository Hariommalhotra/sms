import { rule } from "graphql-shield";

export const isAuthenticated = rule()(async (_, __, ctx) => {
  return !!ctx.user;
});

export const isAdmin = rule()(async (_, __, ctx) => {
  return ctx.user?.role === "ADMIN";
});

export const isTeacher = rule()(async (_, __, ctx) => {
  return ctx.user?.role === "TEACHER";
});

export const isStudent = rule()(async (_, __, ctx) => {
  return ctx.user?.role === "STUDENT";
});
