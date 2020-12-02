import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabMenu from '../../components/shared/Menus/TabMenu'
import DrawerMenu from '../../components/shared/Menus/DrawerMenu'

import Home from '../../pages/Home'
import Settings from '../../pages/Settings'

const Tab = createBottomTabNavigator()

function RoutesTabMenu () {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      tabBar={props => <TabMenu {...props} />}
    >
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Settings' component={Settings} />
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator()

export default function RoutesDrawerMenu () {
  return (
    <Drawer.Navigator
      drawerStyle={{ width: 300 }}
      overlayColor='#1F2430'
      drawerContent={props => <DrawerMenu {...props} />}
    >
      <Drawer.Screen
        name='Bottom Navigator'
        component={RoutesTabMenu}
      />
    </Drawer.Navigator>
  )
}
