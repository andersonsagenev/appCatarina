import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import About from '../pages/About';

const TabRoutes = createBottomTabNavigator();

const icons: any = {
    Home: {
        name: 'ios-home'
    },
    About: {
        name: 'ios-people'
    },
    Profile: {
        name: 'ios-call'
    }
};

const Tab: React.FC = () => (
    <TabRoutes.Navigator 
    screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size}) =>  {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
        }
    })
    }
    tabBarOptions={ {
        style: {
            backgroundColor: '#121212121'
        },
        activeTintColor: '#f0610e'
    }}
    >
    <TabRoutes.Screen name="Home" component={Home}/>
    <TabRoutes.Screen name="About" component={About}/>
    <TabRoutes.Screen name="Profile" component={Profile}/>

    </TabRoutes.Navigator>
);

export default Tab;