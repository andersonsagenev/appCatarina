import React from 'react';
import StackRoutes from './stack.routes';
import { NavigationContainer,
         DefaultTheme as NavigationDefaultTheme,
         DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

import { DrawerContent } from '../components/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { AuthContext } from '../components/context';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
    Provider as PaperProvider, 
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme 
  } from 'react-native-paper';

  const Drawer = createDrawerNavigator();
  // const [isDarkTheme, setIsDarkTheme] = React.useState(false);

//   const initialLoginState = {
//     isLoading: true,
//     userName: null,
//     userToken: null,
//   };


import Tab from '../routes/tab.routes';
import SupportScreen from '../pages/Support';
import SettingsScreen from '../pages/Settings';
import BookmarkScreen from '../pages/Bookmark';

// const CustomDefaultTheme = {
//     ...NavigationDefaultTheme,
//     ...PaperDefaultTheme,
//     colors: {
//       ...NavigationDefaultTheme.colors,
//       ...PaperDefaultTheme.colors,
//       background: '#ffffff',
//       text: '#333333'
//     }
//   }
  
//   const CustomDarkTheme = {
//     ...NavigationDarkTheme,
//     ...PaperDarkTheme,
//     colors: {
//       ...NavigationDarkTheme.colors,
//       ...PaperDarkTheme.colors,
//       background: '#333333',
//       text: '#ffffff'
//     }
//   }

// const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

// const loginReducer = (prevState: any, action: any) => {
//     switch( action.type ) {
//       case 'RETRIEVE_TOKEN': 
//         return {
//           ...prevState,
//           userToken: action.token,
//           isLoading: false,
//         };
//       case 'LOGIN': 
//         return {
//           ...prevState,
//           userName: action.id,
//           userToken: action.token,
//           isLoading: false,
//         };
//       case 'LOGOUT': 
//         return {
//           ...prevState,
//           userName: null,
//           userToken: null,
//           isLoading: false,
//         };
//       case 'REGISTER': 
//         return {
//           ...prevState,
//           userName: action.id,
//           userToken: action.token,
//           isLoading: false,
//         };
//     }
//   };

// const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

// const authContext = React.useMemo(() => ({
//     signIn: async(foundUser: any) => {
//       // setUserToken('fgkj');
//       // setIsLoading(false);
//       const userToken = String(foundUser[0].userToken);
//       const userName = foundUser[0].username;
      
//       try {
//         await AsyncStorage.setItem('userToken', userToken);
//       } catch(e) {
//         console.log(e);
//       }
//       // console.log('user token: ', userToken);
//       dispatch({ type: 'LOGIN', id: userName, token: userToken });
//     },
//     signOut: async() => {
//       // setUserToken(null);
//       // setIsLoading(false);
//       try {
//         await AsyncStorage.removeItem('userToken');
//       } catch(e) {
//         console.log(e);
//       }
//       dispatch({ type: 'LOGOUT' });
//     },
//     signUp: () => {
//       // setUserToken('fgkj');
//       // setIsLoading(false);
//     },
//     toggleTheme: () => {
//       setIsDarkTheme( isDarkTheme => !isDarkTheme );
//     }
//   }), []);


const Routes = () => (
   
    <NavigationContainer>
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={Tab} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
     
    </NavigationContainer>
)

     {/* 
        <StackRoutes /> 
     */}
   


export default Routes;