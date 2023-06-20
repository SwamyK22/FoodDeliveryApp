import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { SliderBox } from "react-native-image-slider-box";

const Slider = ({images}) => {

    const url = 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'
    
 const img = images?.map((x) => `${url}${x.data.creativeId}`);
 console.log('====================================');
 console.log(img);
 console.log('====================================');
        return (
            <SliderBox
            images={images?.map((x) => `${url}${x.data.creativeId}`)}
          sliderBoxHeight={400}
           />
        );
}

export default Slider

const styles = StyleSheet.create({})