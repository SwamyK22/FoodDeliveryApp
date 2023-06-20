import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
    
const LogoutModal = () => {
  const logoutVisible = useSelector((state) => state.visible.logoutVisible);

    const dispatch = useDispatch()
  return (
    <Modal visible={logoutVisible} transparent animationType='slide'>
            <View
            style={styles.modalContainer}>
                <View 
                style={styles.smallBox}
                ></View>
              <Text
                style={styles.mainText}>
                Are you sure want to logout?
              </Text>
              <Text
              style={styles.subText}
              >You will need to again enter your details to login</Text>
             <View style={styles.btnContainer}>
             <TouchableOpacity
             style={styles.yesBtn}
             onPress={() => FIREBASE_AUTH.signOut()}
             >
                <Text
                style={styles.yesTxt}
                >Yes, I want to</Text>
             </TouchableOpacity>
             <TouchableOpacity
             style={styles.noBtn}
             onPress={() => dispatch({type:'SET_LOGOUT', payload: false})}
             >
                <Text
                style={styles.noTxt}
                >No, I don't want to</Text>
             </TouchableOpacity>
             </View>
            </View>
    </Modal>
  )
}

export default LogoutModal;

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: 320,
        backgroundColor: '#ffff',
        borderRadius: 10,
        position:'absolute',
        bottom:0,
        borderTopStartRadius:20,
        borderTopEndRadius:20,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    smallBox:{
        width:60,
        height:7,
        backgroundColor:'#E5ECFF',
        borderRadius:42
    },
    mainText:{
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center',
        textAlign: 'center',
        color:'#ff6803'
      },
      subText:{
        fontSize:12,
        color:'#f57d2c',
        width:180,
        textAlign:'center'
      },
      yesBtn:{
        backgroundColor:'#fc4c00',
        width:280,
        height:45,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
     },
     noBtn:{
        backgroundColor:'#ffff',
        width:280,
        height:45,
        borderRadius:10,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#fc4c00'
     },
     btnContainer:{
        width:'100%',
        height:120,
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'},
    yesTxt:{
        color:'#ffff',
        fontSize:16,
        fontWeight:'bold',
    },
    noTxt:{
        color:'#fc4c00',
        fontSize:16,
        fontWeight:'bold'
    }
});
