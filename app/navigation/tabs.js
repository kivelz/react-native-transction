import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../view/screen/HomeScreen";
import ProfileScreen from "../view/screen/ProfileScreen";
import BuyScreen from "../view/screen/BuyScreen";
import TransactionScreen from "../view/screen/TransactionScreen";
import NotificationScreen from "../view/screen/NotificationScreen";
import { NavigationContainer } from "@react-navigation/native"
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
function PaymentStack() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Payment" component={BuyScreen} />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Buy" component={NotificationScreen} />
    </Stack.Navigator>
  );
}
function TransactionStack() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Transaction" component={TransactionScreen} />
      <Tab.Screen name="Buy" component={NotificationScreen} />
    </Stack.Navigator>
  );
}
function BottomBarNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack}   options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Buy" component={PaymentStack}   options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping-outline" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Transaction" component={TransactionStack}   options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cards-outline" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Profile" component={ProfileStack}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="human-male" color={color} size={26} />
          ),
        }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Explore"
          component={BottomBarNavigation}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Profiless" component={Pay} />
        <Stack.Screen name="Settings" component={TransactionScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;