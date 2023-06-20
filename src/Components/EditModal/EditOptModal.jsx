import { StyleSheet, Text, View, Modal, TextInput, Pressable, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';


const updateValue = async (items, item, newVal, key) => {
    item.key = newVal
    const upUser = [...items.slice(0,index),item , ...items.slice(index + 1)]
    await AsyncStorage.setItem('user', JSON.stringify(upUser))
    await AsyncStorage.setItem('token', JSON.stringify(item))
}

const EditOptModal = ({title, visible, setVisible}) => {
  const dispatch =  useDispatch();

  const oldValRef = useRef();
  const newValRef = useRef();

  const editValues = async (item, oldVal, newVal) => {
    const users = await AsyncStorage.getItem('user');
    const pUsers = JSON.parse(users)
    const u = await AsyncStorage.getItem('token');
    const parseUser = JSON.parse(u)
     const index = pUsers.findIndex((x) => x.email === parseUser.email)

    switch(item) {
        case 'Name':
            if(oldVal === parseUser.name){
                updateValue(pUsers, parseUser, newVal, 'name');
            } else {
                dispatch({type:'SET_EDITERR', payload: '...Input miss match'})
            }
            break;
        default:
            break;

    }
  }

  return (
    <Modal visible={visible} transparent>
        <View style={styles.container}>
        <Text style={styles.title}>Change your {title}</Text>
        <TextInput ref={oldValRef} placeholder={`Old ${title}`} style={styles.input}/>
        <TextInput ref={newValRef} placeholder={`New ${title}`} style={styles.input}/>
        <View style={styles.opt}>
            <Pressable 
            onPress={() => setVisible(false)}
            >
                <Text style={styles.optText}>Cancel</Text>
            </Pressable>
            <Pressable 
            onPress={() => editValues(title, oldValRef.current.value, newValRef.current.value)}
            >
                <Text style={styles.optText}>Ok</Text>
            </Pressable>
        </View>
        </View>
    </Modal>
  )
}

export default EditOptModal

const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.8,
        height:200,
        position:'absolute',
        bottom:80,
        left:30,
        backgroundColor:'#ffff',
        borderRadius:10
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10
    },
    input:{
        borderBottomWidth:2,
        borderColor:'#fc3f00',
        height:50,
        fontSize:22,
        marginHorizontal:15,
        color:'#fc3f00'
    },
    optText:{
        color:'#a2f5e9',
        fontSize:18,
        fontWeight:'bold'
    },
    opt:{
        flexDirection:'row',
        width:150,
        position:'absolute',
        bottom:0,
        right:0,
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:15
    }
})