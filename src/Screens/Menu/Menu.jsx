import {
    StyleSheet,
    FlatList,
    Dimensions,
    LogBox,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import axiosInstance from '../../utils/axiosInstance';
import MenuItem from '../../Components/MenuItem/MenuItem';

  
  const dimension = Dimensions.get('window').width;
  const Menu = () => {
    const [menu, setMenu] = useState([]);
    console.log(menu);
    const fetchData = async () => {
      const menuData = await axiosInstance.get(
        'https://naveensutar.github.io/FoodData/menuItem.json',
      );
      const resData = await menuData.data;
      console.log('reData', resData?.itemCards);
      setMenu(resData.itemCards);
    };
    useEffect(() => {
      fetchData();
      LogBox.ignoreLogs(['ReactImageView']);
    }, []);
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={menu}
          renderItem={({item}) => (
           <MenuItem item={item} />
          )}
        />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    innerContainer: {
      flexDirection: 'row',
      marginHorizontal: dimension / 40,
      paddingVertical: dimension / 10,
      borderBottomWidth: dimension / 160,
      borderBottomColor: '#00000040',
      gap: dimension / 80,
    },
    veg: {
      height: dimension / 24,
      width: dimension / 24,
    },
    nonVeg: {
      height: dimension / 20,
      width: dimension / 20,
    },
    vegNonvegLogo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });
  
  export default Menu;