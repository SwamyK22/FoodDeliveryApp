import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ProfileOpt = ({title, options}) => {
  return (
    <Pressable style={styles.container}>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.option}>{options}</Text>
      </View>
      <FontAwesome5 name='chevron-right' style={styles.c_right} />
    </Pressable>
  )
}

export default ProfileOpt

const styles = StyleSheet.create({
    container: {
        width:'90%',
        paddingVertical:15,
        borderBottomWidth:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:16,
    },
    option:{
        fontWeight:'bold',
        color:'#9b9e9d'
    },
    c_right:{
        paddingHorizontal:15,
    }
})