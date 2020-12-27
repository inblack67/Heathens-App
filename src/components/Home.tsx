import React from 'react';
import { View, Text } from 'react-native';
import { useHelloQuery } from '../generated/graphql';
import Preloader from './Preloader';

const Home = () =>
{
    const { loading, data } = useHelloQuery();

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
        </View>
    );
};

export default Home;
