import { Button, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import About from '../../Components/About/About';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProfileOpt from '../../Components/profileOpt/ProfileOpt';
import Buttons from '../../Components/Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';
import LogoutModal from '../../Components/logouModal/LogoutModal';
import EditModal from '../../Components/EditModal/EditModal';
import { setUser } from '../../redux/actions/setUser';
import EditMain from '../../Components/EditModal/EditMain';


const Profile = () => {
  const dispatch = useDispatch()

  const {logoutVisible, editVisible} = useSelector((state) => ({
    logoutVisible: state.visible.logoutVisible,
    editVisible: state.visible.editVisible
  }))
  //Add User 
  const addUserFromAS = async () => {
    const u = await AsyncStorage.getItem('token');
    const parseUser = JSON.parse(u)
    dispatch(setUser(parseUser))
}

useEffect(() => {
    addUserFromAS()
},[])
  return (
    <SafeAreaView style={[styles.container, {opacity: logoutVisible || editVisible ? 0.1 : 1}]}>
      <Image source={require('../../../assets/profile/rakshit.jpeg')} style={styles.img} />
      <About />
      <ProfileOpt title='My Account' options='Address, Favourite & Settings'/>
      <ProfileOpt title='Payments & Refunds' options='Manage your Refunds, Payment Modes'/>
      <ProfileOpt title='Help' options='FAQs & Links'/>
      <Buttons title='Logout' onPress={() => dispatch({type:'SET_LOGOUT', payload: true})} />
      <LogoutModal />
      <EditModal />
      <EditMain />
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flex:1,
  },
  img:{
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').height /2.5,
    resizeMode:'contain'
  }
})