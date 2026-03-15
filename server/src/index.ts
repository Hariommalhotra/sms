import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
// import fs from "fs";
import path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { resolvers } from "./resolvers";
import { createContext, Context } from "./middleware/context";
import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { permissions } from "./permissions";
const app = express();

// const typeDefs = fs.readFileSync(
//   path.join(__dirname, "schema/user.graphql"),
//   "utf8",
// );
const typesArray = loadFilesSync(
  path.join(process.cwd(), "src/schema/**/*.graphql"),
);
const typeDefs = mergeTypeDefs(typesArray);

// const resolvers = { resolvers };

async function startServer() {
  await mongoose.connect("mongodb://localhost:27017/graphql-auth");

  const schema = makeExecutableSchema({ typeDefs, resolvers });

  const schemaWithMiddleware = applyMiddleware(schema, permissions);
  const server = new ApolloServer<Context>({
    schema: schemaWithMiddleware,
  });

  await server.start();

  app.use(
    "/graphql",
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    }),
    express.json(),
    expressMiddleware(server, { context: createContext }),
  );

  app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/graphql");
  });
}

startServer();
