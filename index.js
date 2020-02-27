import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema";
import resolvers from "./resolvers";

const app = express();

app.get("/", (reg, res) => {
  res.send("GraphQL is cool!");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

const port = 8080;
app.listen(port, () =>
  console.log(`Running server on port http://localhost:${port}/graphql`)
);
