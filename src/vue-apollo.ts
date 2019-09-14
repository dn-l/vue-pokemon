import Vue from 'vue';
import VueApollo from 'vue-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

Vue.use(VueApollo);

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: new HttpLink({
    uri: process.env.GRAPHQL_URI || 'https://graphql-pokemon.now.sh',
    fetch,
  }),
  cache: new InMemoryCache(),
});


export default () => new VueApollo({
  defaultClient: apolloClient,
});
