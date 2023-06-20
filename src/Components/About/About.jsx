import { StyleSheet, Text, View, Pressable, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FIREBASE_AUTH } from '../../../FirebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'

const About = () => {
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    
  return (
    <View style={styles.container}>
        <View style={styles.nameContainer}>
            <Text style={styles.name}>{user?.name}</Text>
            <Pressable onPress={() => dispatch({type:'SET_EDIT', payload: true})}>
            <Text style={styles.edit}>EDIT</Text>
            </Pressable>
        </View>
      <Text style={styles.mobile}>{user?.mobile}. {user?.email}</Text>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        width:'90%',
        paddingVertical:15,
        borderBottomWidth:2,
    },
    name:{
        textTransform: 'uppercase',
        fontWeight:'bold',
        fontSize:18
    },
    edit:{
        fontWeight:'bold',
        fontSize:16,
        color:'orange'
    },
    nameContainer:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between',
    },
    mobile:{
        fontWeight:'bold',
        color:'#9b9e9d'
    }
})