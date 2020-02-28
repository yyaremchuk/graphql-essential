import express from "express";
import graphqlHTTP from "express-graphql";
import { schema } from "./data/schema";

const app = express();

app.get("/", (reg, res) => {
  res.send("GraphQL is cool!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const port = 8080;
app.listen(port, () =>
  console.log(`Running server on port http://localhost:${port}/graphql`)
);
