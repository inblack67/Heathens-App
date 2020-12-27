import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';
import Button from 'react-native-paper/src/components/Button';
import Surface from 'react-native-paper/src/components/Surface';
import TextInput from 'react-native-paper/src/components/TextInput/TextInput';
import HelperText from 'react-native-paper/src/components/HelperText';
import { globalStyles } from '../globalStyles';
import { IRegister } from '../interfaces';

const Register = () =>
{
    const { handleSubmit, errors, register, setValue, getValues } = useForm<IRegister>( {
    } );

    const { name, email, password } = getValues();

    useEffect( () =>
    {
        register( 'name', {
            required: 'Required'
        } );
        register( 'email', {
            required: 'Required'
        } );
        register( 'password', {
            required: 'Required'
        } );
    }, [ register ] );

    const handleRegister = ( data: IRegister ) =>
    {
        console.log( data );
    };

    return (
        <View>
            <Surface style={ { ...styles.container, ...globalStyles.mt4 } }>
                <Text style={ globalStyles.textCenter }>Register</Text>
                <TextInput
                    label="Name"
                    value={ name }
                    onChangeText={ text => setValue( 'name', text ) }
                    error={ errors.name ? true : false }
                />
                <HelperText type='error' visible={ errors.name ? true : false }>
                    { errors.name?.message }
                </HelperText>
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

export default Register;
