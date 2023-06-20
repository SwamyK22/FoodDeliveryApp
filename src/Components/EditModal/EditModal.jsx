import { View, Text, Modal, FlatList, StyleSheet, Dimensions, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EditOptModal from './EditOptModal';
import { Formik } from 'formik'
import { validate } from '../../Screens/Login/Loginpage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const list = [{
    name:'email',
    placeholder:'Email Address'
    },
    {
        name:'password',
        placeholder:'Password'
    }
]
    
const EditModal = () => {
  const editVisible = useSelector((state) => state.visible.editVisible);
  const [visible, setVisible] = useState(false)
  
    const dispatch = useDispatch();

    const checkOldValue = async (values) => {
        const users = await AsyncStorage.getItem('user');
        const pUsers = JSON.parse(users)
        const u = await AsyncStorage.getItem('token');
        const parseUser = JSON.parse(u)
        if(values.email === parseUser.email && values.password === parseUser.password){
            dispatch({type:'SET_EDIT_MAIN', payload: true})
            dispatch({type:'SET_EDIT', payload: false})
        }
    }

  return (
    <Modal visible={editVisible} transparent animationType='slide'>
            <View
            style={[styles.modalContainer, {opacity: visible ? 0 : 1}]}>
                <View  style={styles.smallBox} />                    
                <Text style={styles.editText}>Edit Your Account</Text>
                <Formik
                initialValues={{
                    email:'',
                    password:''
                }}
                validate={validate}
                onSubmit={(values) => checkOldValue(values)}
                >{({values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
                    <View style={{height:'75%'}}>
                        <FlatList
                data={list}
                keyExtractor={(item,index) => index + item}
                renderItem={({item}) => (
                    <>
                    <TextInput 
                    autoCapitalize='none'
                    onChangeText={handleChange(item.name)}
                    onBlur={handleBlur(item.name)}
                    value={values[item.name]}
                    placeholder={item.placeholder} style={styles.input}/>
                    {errors[item.name] && touched[item.name] ? ( <Text 
                        style={{color:'#e34d12', paddingHorizontal:30, fontSize:16}}
                        >{errors[item.name]}</Text>) : null}
                    </>
                )}
                style={{width:Dimensions.get('window').width * 0.9}}
                />


                    <View style={styles.opt}>
                        <Pressable 
                        onPress={() => dispatch({type:'SET_EDIT', payload: false})}
                        >
                            <Text style={styles.optText}>Cancel</Text>
                        </Pressable>
                        <Pressable 
                        onPress={handleSubmit}
                        >
                            <Text style={styles.optText}>Ok</Text>
                        </Pressable>
                    </View>
                    </View>
                )}</Formik>
                
            </View>
    </Modal>
  )
}

export default EditModal;

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: Dimensions.get('window').height * 0.4,
        backgroundColor: '#ffff',
        borderRadius: 15,
        position:'absolute',
        bottom:0,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        alignItems:'center',
    },
    smallBox:{
        width:60,
        height:7,
        backgroundColor:'#E5ECFF',
        borderRadius:42,
        marginVertical:15
    },
    editText:{
        fontSize:26,
        color:'#fc3f00',
        fontWeight:'bold',
        textAlign:'center'
    },
    close:{
        backgroundColor:'#fc3f00',
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        height:40,
        borderRadius:10,
        marginVertical:10
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
        fontSize:25,
        fontWeight:'bold'
    },
    opt:{
        flexDirection:'row',
        width:200,
        position:'absolute',
        bottom:0,
        right:0,
        justifyContent:'space-between',
        paddingHorizontal:30,
        paddingVertical:15
    }
});
