import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-paper/src/components/Button';
import Surface from 'react-native-paper/src/components/Surface';
import TextInput from 'react-native-paper/src/components/TextInput/TextInput';
import HelperText from 'react-native-paper/src/components/HelperText';
import { globalStyles } from '../globalStyles';
import { ILogin } from '../interfaces';

const Login = () =>
{
    const { handleSubmit, errors, register, setValue, getValues } = useForm<ILogin>( {
    } );

    const { email, password } = getValues();

    useEffect( () =>
    {
        register( 'email', {
            required: 'Required'
        } );
        register( 'password', {
            required: 'Required'
        } );
    }, [ register ] );

    const handleRegister = ( data: ILogin ) =>
    {
        console.log( data );
    };

    return (
        <View>
            <Surface style={ { ...styles.container, ...globalStyles.mt4 } }>
                <Text style={ globalStyles.textCenter }>Login</Text>
                <TextInput
                    label="Email"
                    value={ email }
                    onChangeText={ text => setValue( 'email', text ) }
                    error={ errors.email ? true : false }
                />
                <HelperText type='error' visible={ errors.email ? true : false }>
                    { errors.email?.message }
                </HelperText>
                <TextInput
                    label="Password"
                    value={ password }
                    onChangeText={ text => setValue( 'password', text ) }
                    error={ errors.password ? true : false }
                />
                <HelperText type='error' visible={ errors.password ? true : false }>
                    { errors.password?.message }
                </HelperText>
                <Button mode='contained' onPress={ handleSubmit( handleRegister ) }>Submit</Button>
            </Surface>
        </View>
    );
};


const styles = StyleSheet.create( {
    container: {
    }
} );

export default Login;
