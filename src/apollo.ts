import { ApolloClient, InMemoryCache } from '@apollo/client';

export const useApollo = () => new ApolloClient( {
    cache: new InMemoryCache(),
    // uri: process.env.SERVER_URL,
    uri: 'http://localhost:5000/graphql'
} );