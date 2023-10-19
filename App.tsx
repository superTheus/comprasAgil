import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import Stack from './app/routers/Stack';

const httpLink = createHttpLink({
  uri: 'https://rampap-hub-staging.herokuapp.com/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
}

export default App;
