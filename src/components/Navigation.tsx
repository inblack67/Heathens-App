import React, { Fragment } from 'react';
import Button from 'react-native-paper/src/components/Button';

const Navigation = ( { navigation }: any ) =>
{
    const handleNavigation = ( route: string ) =>
    {
        navigation.navigate( route );
    };

    return ( <Fragment>
        <Button mode='contained' onPress={ () => handleNavigation( 'Register' ) }>
            Register
             </Button>
        <Button mode='contained' onPress={ () => handleNavigation( 'Login' ) }>
            Login
             </Button>
        <Button mode='contained' onPress={ () => handleNavigation( 'Home' ) }>
            Home
             </Button>
    </Fragment> );
};

export default Navigation;
