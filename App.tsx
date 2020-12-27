import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { useApollo } from './src/apollo';
import Home from './src/components/Home';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App ()
{
  return (
    <ApolloProvider client={ useApollo() }>
      <PaperProvider>
        <Fragment>
          <Home />
          <StatusBar style="auto" />
        </Fragment>
      </PaperProvider>
    </ApolloProvider>
  );
}

