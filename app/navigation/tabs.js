import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../view/screen/HomeScreen";
import ProfileScreen from "../view/screen/ProfileScreen";
import BuyScreen from "../view/screen/BuyScreen";
import TransactionScreen from "../view/screen/TransactionScreen";
import NotificationScreen from "../view/screen/NotificationScreen";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            showLabel:false,
            style:{},
        }}
        >
            <Tab.Screen name="Home" component={HomeScreen}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }} />
            <Tab.Screen name="Buy" component={BuyScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping-outline" color={color} size={26} />
          ),
        }}  />
            <Tab.Screen name="Transaction" component={TransactionScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cards-outline" color={color} size={26} options={{
                tabBarLabel: 'Home',  
              }} />
          ),
        }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="human-male" color={color} size={26} />
          ),
        }}  />
        </Tab.Navigator>
    )
}

export default Tabs;