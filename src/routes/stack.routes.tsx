import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../pages/SplashScreen';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Tab from '../routes/tab.routes';


const StackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
        cardStyle: {
           // backgroundColor: #e79a9a;
        },
    }}>

    <StackRoutes.Screen name="SplashScreen" component={SplashScreen}/>
    <StackRoutes.Screen name="SignIn" component={SignIn}/>
    <StackRoutes.Screen name="Home" component={Tab} options={{ headerShown: false }}/>
    <StackRoutes.Screen name="SignUp" component={SignUp}/>

    </StackRoutes.Navigator>
)

export default AppRoutes;