import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://rampap-hub-staging.herokuapp.com/graphql',
  cache: new InMemoryCache(),
});
