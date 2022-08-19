import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://albergue-angelitos-de-4-patas.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});
