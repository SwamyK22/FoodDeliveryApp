import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Flash from '../Screens/Flash/Flash';
import Register from '../Screens/Register/Register';
import BottomTab from './BottomTab';
import Loginpage from '../Screens/Login/Loginpage';
import { onAuthStateChanged } from '@firebase/auth';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import Menu from '../Screens/Menu/Menu';

const Stack = createNativeStackNavigator();

const FoodDeliveryApp = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user)
    })
  },[])
  return (
   <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown: false}}
        >
        {user ? (
          <>
          <Stack.Screen name='home' component={BottomTab} />
          <Stack.Screen name='menu' component={Menu} />
          </>
        ) : (
          <>
          <Stack.Screen name='flash' component={Flash} />
          <Stack.Screen name='login' component={Loginpage} />
          <Stack.Screen name='register' component={Register} /></>
        )}
            
            
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default FoodDeliveryApp

const styles = StyleSheet.create({})