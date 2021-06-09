import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home';
import Support from '../pages/Support';
import About from '../pages/NewLink';
import Links from '../pages/Links';

const TabRoutes = createBottomTabNavigator();

const icons: any = {
    Home: {
        name: 'ios-home'
    },
    About: {
        name: 'ios-people'
    },
    Links: {
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
    <TabRoutes.Screen name="Links" component={Links}/>

    </TabRoutes.Navigator>
);

export default Tab;