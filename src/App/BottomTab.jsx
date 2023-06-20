import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dishes from '../Screens/Dish/Dishes';
import Profile from '../Screens/Profile.jsx/Profile';
import { Image } from 'react-native'
const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
        headerShown:false,
        tabBarLabelStyle : {fontWeight:'bold',},
        tabBarIcon: ({focused, }) => {
            let iconName;
            if(route.name === 'Dishes') {
                (iconName = require('../../assets/home/soup.png')), (style = focused ? {width:35, height:35} : {width:25, height:25, tintColor:'gray' })
            }
            if(route.name === 'Profile') {
                (iconName = require('../../assets/home/user.png')), (style = focused ? {width:30, height:30} : {width:25, height:25, tintColor:'gray' })
            }
            return <Image source={iconName} style={style}/>
        },
    })
    }>
      <Tab.Screen name="Dishes" component={Dishes} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;