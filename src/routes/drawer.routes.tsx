import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Tab from '../routes/tab.routes';
import SupportScreen from '../pages/Support';
import SettingsScreen from '../pages/Settings';
import BookmarkScreen from '../pages/Bookmark';

import { DrawerContent } from '../components/drawerContent';

const Drawer = createDrawerNavigator();

const DrawerRoutes: React.FC = () => (

    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={Tab} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
    </Drawer.Navigator>
);

export default DrawerRoutes;
