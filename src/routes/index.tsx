import React from 'react';
import StackRoutes from './stack.routes';
import DrawerRoutes from './drawer.routes';
import {useAuth}  from '../components/AuthContext';

import { 
    Provider as PaperProvider, 
    DefaultTheme as PaperDefaultTheme,
    DarkTheme as PaperDarkTheme, 
    ActivityIndicator
  } from 'react-native-paper';
import { View } from 'react-native';

 
  // const [isDarkTheme, setIsDarkTheme] = React.useState(false);

//   const initialLoginState = {
//     isLoading: true,
//     userName: null,
//     userToken: null,
//   };



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

//     toggleTheme: () => {
//       setIsDarkTheme( isDarkTheme => !isDarkTheme );
//     }
//   }), []);


const Routes: React.FC = () => {

    const { signed, loading } = useAuth(); 
   
    if( loading ) {
        return (
            <View style={{ flex:1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#666" />
            </View>
        );
    }
    return signed ? <DrawerRoutes /> : <StackRoutes />; 
}

export default Routes;