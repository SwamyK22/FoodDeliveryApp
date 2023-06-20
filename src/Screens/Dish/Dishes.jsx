import { StyleSheet, TextInput, ScrollView, LogBox, FlatList, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import Location from '../../Components/Location/Location';
import axiosInstance from '../../utils/axiosInstance';
import { SliderBox } from "react-native-image-slider-box";
import ResturantCard from '../../Components/ResturantCard/ResturantCard';
import { useDispatch, useSelector } from 'react-redux';
import { setImgs } from '../../redux/actions/setImgs';
import { setResturants } from '../../redux/actions/setResturants';



const Dishes = ({navigation}) => {

    const url = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
    const dispatch = useDispatch()
    const {imgs, resturants} = useSelector((state) => ({
        imgs: state.imgs,
        resturants: state.resturants
    }))
    
    

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get('FoodData/data.json');
            const data = await res.data
            const slideImgs = data.cards[0]?.data?.data?.cards.map((x) => `${url}${x.data.creativeId}`);
            dispatch(setImgs(slideImgs))
            const resturant = data.cards[2]?.data?.data?.cards
            dispatch(setResturants(resturant))
        } catch (error) {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
        }
    };
    

    useEffect(()=>{
        fetchData()
        LogBox.ignoreLogs(['VirtualizedLists'])
    },[])

  return (
    <SafeAreaView style={{flex:1}}>
      <Location />
      <TextInput placeholder='Search' style={styles.searchInput}/>
    <ScrollView>
    <SliderBox 
    images={imgs}
    sliderBoxHeight={200}
    autoplay
    circleLoop
    resizeMode='contain'
    inactiveDotColor="#90A4AE"
    dotColor="#FFEE58"
    />
    <FlatList 
    data={resturants}
    renderItem={({item}) => (
        <Pressable onPress={() => navigation.navigate('menu')}>
        <ResturantCard item={item} />
        </Pressable>
    )}
    keyExtractor={(item,index) => index + item.data.name}
    />

    </ScrollView>
    </SafeAreaView>
  )
}

export default Dishes

const styles = StyleSheet.create({
    searchInput:{
        borderWidth:1,
        borderRadius:10,
        alignSelf:'center',
        width:'90%',
        padding:5,
        fontSize:18,
        marginVertical:10
    }
})