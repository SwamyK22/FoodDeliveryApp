import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

const ResturantCard = ({item}) => {
    const url = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
  return (
    <View style={styles.container}>
      <Image source={{uri:`${url}${item.data.cloudinaryImageId}`}} style={styles.img} />
      <View style={{height: Dimensions.get('window').width / 2}}>
        <View style={styles.details}>
        <Text numberOfLines={1} style={styles.name}>{item.data.name}</Text>
        <View style={{flexDirection:'row', marginVertical:5}}>
            <Image source={require('../../../assets/home/star.png')} style={styles.star} />
            <Text style={styles.time}>{item.data.avgRating}({item.data.totalRatings.toString().slice(0, 2)}K+)</Text>
            <Text style={styles.time}>&bull;{item.data.deliveryTime} mins</Text>
        </View>
        <Text numberOfLines={1} style={{width:'90%'}}>{item.data.cuisines.map((x) => `${x}, `)}</Text>
        <Text>{item.data.area} -{Math.round(item.data.lastMileTravel * 10) / 10} km</Text>
        </View>
        <View style={styles.free}>
        <Image source={require('../../../assets/home/bike.png')} style={styles.bike} />
            <Text style={styles.freeTxt}>FREE DELIVERY</Text>
        </View>
      </View>
    </View>
  )
}

export default ResturantCard

const styles = StyleSheet.create({
    container:{
        height:Dimensions.get('window').width / 2,
        width: Dimensions.get('window').width ,
        flexDirection:'row',
        marginVertical:5
    },
    img:{
        height:Dimensions.get('window').width / 2,
        width: Dimensions.get('window').width / 2,
        borderRadius:15,
        marginLeft:5,
    },
    star:{
        width:20,
        height:20,
        marginRight:5
    },
    name:{
        fontWeight:'bold',
        fontSize:20,
        width:'90%'
    },
    details:{
        width: Dimensions.get('window').width / 2,
        marginHorizontal:10,
        height:'50%',
        marginVertical:20
    },
    free:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#e0dee0',
        justifyContent:'space-around',
        width:120,
        height:30,
        borderRadius:10,
        marginLeft:20,
        marginVertical:5
    },
    freeTxt:{
        fontSize:12,
        fontWeight:'bold',
        color:'#a503fc'
    },
    bike:{
        width:20,
        height:20,
        tintColor:'#a503fc'
    },
    time:{
        fontSize:16,
        fontWeight:'bold'
    }
})