import { StyleSheet, Text, View, Dimensions, FlatList, Pressable, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'
import Logo from '../../Components/Logo/Logo'
import Buttons from '../../Components/Buttons/Buttons'
import { SafeAreaView } from 'react-native-safe-area-context'
import Input from '../../Components/Input/Input'
import { Formik } from 'formik'
import { initValue, registerField } from './registerField'
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux'
import { addServerError, removeServerError } from '../../redux/actions/serverError'
import { setUser } from '../../redux/actions/setUser'
import AsyncStorage from '@react-native-async-storage/async-storage'


export const validate = (values) => {
  const errors = {};
  if(!values.name){
    errors.name = '...Required'
  }
 
   if (!values.email) {
     errors.email = '...Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = '...Invalid email address';
   }
 
   if (!values.mobile) {
     errors.mobile = '...Required';
   } else if (!/^[6-9]\d{9}$/i.test(values.mobile)) {
     errors.mobile = '...Invalid mobile nomber';
   }
   if(!values.password){
    errors.password = '...Required'
  }
  if(!values.confirmPassword){
    errors.confirmPassword = '...Required'
  }
  else if(values.password !== values.confirmPassword){
    errors.confirmPassword = '...Password should match'
  }
 
 
   return errors;
}

const Register = ({navigation}) => {

  const serverErr = useSelector((state) => state.serverErr);
    const dispatch = useDispatch();
  const auth = FIREBASE_AUTH

  const signup = async (values) => {
    const {email, password } = values;
    const {confirmPassword, ...rest} = values
    // await AsyncStorage.setItem('user', JSON.stringify([]))
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = await AsyncStorage.getItem('user');
        const parseUser = JSON.parse(user)
        parseUser.push(rest)
        await AsyncStorage.setItem('user', JSON.stringify(parseUser))
        dispatch(setUser(rest))
    } catch (error) {
     const index = error.message.split('').findIndex((x) => x === '/')
     const length = error.message.length
      dispatch(addServerError(error.message.slice(index + 1, length-2)))
      setTimeout(() => dispatch(removeServerError(null)), 2000)
    }
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.registerContainer}>
        <Logo page='Register'/>
        {serverErr && <Text style={styles.serverErr}>{serverErr}</Text>}
        <Formik
        initialValues={initValue}
        onSubmit={(values) => signup(values)}
        validate={validate}
        >{({values, handleBlur, handleChange, handleSubmit, errors, touched}) => (
           <View
           style={styles.flatList}
           >
         <FlatList
         data={registerField}
         keyExtractor={(item, index) => index + item.name}
         renderItem={({item}) => (
          <>
          <TextInput 
          placeholder={item.placeholder} style={item.inputStyle}
          onChangeText={handleChange(item.name)}
          onBlur={handleBlur(item.name)}
          secureTextEntry={item.placeholder.includes('Password')}
          value={values[item.name]}
          />
          {errors[item.name] && touched[item.name] ? ( <Text 
            style={{color:'#e34d12'}}
            >{errors[item.name]}</Text>) : null}
            </>
         )}
         />
         <Buttons title='SignIn' onPress={handleSubmit}/>
         </View>
        )}</Formik>
       
      
          <View style={styles.newUser}>
                <Text style={styles.userText}>Already have an account? </Text>
                <Pressable onPress={() => navigation.navigate('login')}>
                    <Text style={{...styles.userText, color:'#fc5203'}}> Login</Text>
                </Pressable>
            </View>
      </View>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        width:Dimensions.get('window').width
    },
    registerContainer:{
        alignItems:'center',
        marginVertical:80
    },
    flatList:{
        height: Dimensions.get('window').width / 1.1,
        marginVertical:5
      },
      newUser:{
        flexDirection:'row',
        marginVertical:10
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