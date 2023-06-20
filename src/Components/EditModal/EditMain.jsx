import { StyleSheet, Text, View, Dimensions, Modal, FlatList, TextInput, Pressable } from 'react-native'
import React from 'react'
import { Formik } from 'formik';
import { validate } from '../../Screens/Register/Register';
import { editFields, initValue } from './editFields';
import Buttons from '../Buttons/Buttons';
import { useDispatch, useSelector } from 'react-redux';


const EditMain = () => {
  const editMainVisible = useSelector((state) => state.visible.editMainVisible);
  const dispatch = useDispatch()

  return (
    <Modal visible={editMainVisible} transparent>
        <View style={styles.container}>
            <Text style={styles.title}>Edit Your Account</Text>
            <Formik
                initialValues={initValue}
                validate={validate}
                >{({values, handleChange, handleBlur, handleSubmit, errors, touched}) => (
                    <View style={{height:'85%'}}>
                        <FlatList
                            data={editFields}
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
                        style={{width:Dimensions.get('window').width * 0.8}}
                        />
                <Pressable
            onPress={() => dispatch({type:'SET_EDIT_MAIN', payload: false})}
                style={({pressed}) => [{backgroundColor: pressed ? '#9c0327' : '#fa023c'}, styles.submitBtn]}>
                        <Text style={{color:'#ffff', fontWeight:'bold', fontSize:16}}>Update</Text>
                </Pressable>
                    </View>
                )}</Formik>
        </View>
    </Modal>
  )
}

export default EditMain


const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width * 0.8,
        height:Dimensions.get('window').height / 2,
        position:'absolute',
        top:80,
        left:35,
        backgroundColor:'#ffff',
        borderRadius:15
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
        textAlign:'center'
    },
    input:{
        borderBottomWidth:2,
        borderColor:'#fc3f00',
        height:45,
        fontSize:18,
        marginHorizontal:15,
        color:'#fc3f00'
    },
    submitBtn: {
        width: Dimensions.get('window').width /2,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        alignSelf:'center',
    }

})