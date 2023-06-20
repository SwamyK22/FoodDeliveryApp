import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import Review from '../Review/Review';


const MenuItem = ({item}) => {
  return (
    <View style={styles.container}>
              <View style={styles.details}>
                <View style={styles.vegNonvegLogo}>
                  {item?.card?.info?.category?.includes('veg') ? (
                    <Image
                      source={require('../../../assets/menu/veg-icon.png')}
                      style={styles.veg}
                    />
                  ) : (
                    <Image
                      source={require('../../../assets/menu/non-veg.png')}
                      style={styles.nonVeg}
                    />
                  )}
                  <Text
                    style={{
                      color: '#E88B11',
                      fontSize: 20,
                      fontWeight: '500',
                      paddingHorizontal:3
                    }}>
                    Bestseller
                  </Text>
                </View>
                <View>
                  <Text
                    numberOfLines={2}
                    style={{
                      fontWeight: '600',
                      fontSize: dimension * 0.06,
                      color: '#000000',
                      marginVertical: dimension / 40,
                      width: dimension / 3,
                    }}>
                    {item?.card?.info?.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '500',
                      color: '#000000',
                    }}>
                    {item?.card?.info?.itemAttribute?.portionSize}
                  </Text>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: '#000000',
                      fontSize:22
                    }}>
                    ₹{(item?.card?.info?.price / 100)}
                  </Text>
                  <Review rate={item?.card?.info?.ratings?.aggregatedRating?.rating} count={item?.card?.info?.ratings?.aggregatedRating?.ratingCount} />
                </View>
              </View>
              <View>
                <Image
                  source={{
                    uri: `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${item?.card?.info?.imageId}`,
                  }}
                  style={{
                    width: dimension / 2,
                    height: dimension / 2,
                    borderRadius: dimension / 20,
                  }}
                />
              </View>
            </View>
  )
}

export default MenuItem;

const dimension = Dimensions.get('window').width;


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: dimension / 40,
        paddingVertical: dimension / 10,
        borderBottomWidth: dimension / 160,
        borderBottomColor: '#00000040',
        justifyContent:'space-between',
      },
      veg: {
        height: dimension / 24,
        width: dimension / 24,
        resizeMode:'contain'
      },
      nonVeg: {
        height: dimension / 20,
        width: dimension / 20,
      },
      vegNonvegLogo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      details: {
        width: dimension * 0.4
      }
})