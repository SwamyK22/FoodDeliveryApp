import { StyleSheet, 
    TextInput, 
    View, 
    Dimensions, 
    FlatList,
    Platform,
    Text, 
    Pressable,
    Keyboard, 
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import Logo from '../../Components/Logo/Logo'
import { initValue, loginField } from './loginFields';
import Buttons from '../../Components/Buttons/Buttons'
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux'
import { addServerError, removeServerError } from '../../redux/actions/serverError'
import { setUser } from '../../redux/actions/setUser'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const validate = (values) => {
    const errors = {};

     if (!values.email) {
       errors.email = '...Required';
     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
       errors.email = '...Invalid email address';
     }
     if(!values.password){
      errors.password = '...Required'
     }
      return errors;
  }
const Loginpage = ({navigation}) => {

    const serverErr = useSelector((state) => state.serverErr);
    const dispatch = useDispatch();
    const auth = FIREBASE_AUTH;

    const login = async (values) => {
        const {email, password } = values;
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            addUserFromAS(email)
        } catch (error) {
            const index = error.message.split('').findIndex((x) => x === '/')
            const length = error.message.length
            dispatch(addServerError(error.message.slice(index + 1, length-2)))
            setTimeout(() => dispatch(removeServerError(null)), 2000)
        }
    }

    const addUserFromAS = async (email) => {
        const u = await AsyncStorage.getItem('user');
        const parseUser = JSON.parse(u)
        const user = parseUser.find((x) => x.email === email);
        await AsyncStorage.setItem('token', JSON.stringify(user))
        dispatch(setUser(user))
    }

  return (
    <SafeAreaView style={{flex:1}}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
        <Logo page='Login'/>
        <Formik
        initialValues={initValue}
        onSubmit={(values) => login(values)}
        validate={validate}
        >{({values, handleBlur, handleChange, handleSubmit, errors, touched}) => (
            <View style={{height:'90%'}}>
                {serverErr && <Text style={styles.serverErr}>{serverErr}</Text>}
                <FlatList 
                data={loginField}
                keyExtractor={(item,index) => index + item.name}
                renderItem={({item}) => (
                    <>
                    <TextInput 
                    placeholder={item.placeholder} style={item.inputStyle}
                    autoCapitalize='none'
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    value={values[item.name]}
                    secureTextEntry={item.placeholder.includes('Password')}
                    />
                    {errors[item.name] && touched[item.name] ? ( <Text 
                        style={{color:'#e34d12'}}
                        >{errors[item.name]}</Text>) : null}
                    </>
                )}
                />
                <Buttons title='Login' onPress={handleSubmit}/>
            </View>

        )}</Formik>
            <View style={styles.newUser}>
                <Text style={styles.userText}>New User? </Text>
                <Pressable onPress={() => navigation.navigate('register')}>
                    <Text style={{...styles.userText, color:'#fc5203'}}> Register</Text>
                </Pressable>
            </View>
            </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Loginpage

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').width / 2,
        alignItems:'center',
        marginVertical:80
    },
    newUser:{
        flexDirection:'row',
    },
    userText:{
        color:'#123',
        fontWeight:'400',
        fontSize:16
    },
    serverErr: {
        color:'#d40408',
        textAlign:'center',
        fontSize:16,
        fontWeight:'bold'
    }
})