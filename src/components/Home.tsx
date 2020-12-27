import React from 'react';
import { View, Text } from 'react-native';
import Preloader from './Preloader';
import Navigation from './Navigation';
import { useHelloQueryQuery } from '../generated/graphql';

const Home = ( { navigation }: any ) =>
{
    const { loading, data } = useHelloQueryQuery();

    if ( loading )
    {
        return <Preloader />;
    }

    console.log( data );

    return (
        <View>
            <Text>
                Hello Friend
             </Text>
            <Navigation navigation={ navigation } />
        </View>
    );
};

export default Home;
