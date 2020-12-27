import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { useApollo } from './src/apollo';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppNavigation } from './src/routes/homeStack';

export default function App ()
{
  return (
    <ApolloProvider client={ useApollo() }>
      <PaperProvider>
        <Fragment>
          <AppNavigation />
          <StatusBar style="auto" />
        </Fragment>
      </PaperProvider>
    </ApolloProvider>
  );
}

