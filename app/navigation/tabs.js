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
import TransactionDetailScreen from "../view/screen/TransactionDetailScreen";

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
      <Tab.Screen name="Buy" component={BuyScreen} />
    </Stack.Navigator>
  );
}
function ProfileStack() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      {/* <Tab.Screen name="Notification" component={NotificationScreen} /> */}
    </Stack.Navigator>
  );
}
function TransactionStack() {
  return (
    <Stack.Navigator>
      <Tab.Screen name="Transaction" component={TransactionScreen} />
     
    </Stack.Navigator>
  );
}
function AppNavigation() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false,gestureEnabled: true}}>
      <Tab.Screen name="Home" component={HomeStack}   options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Buy" component={PaymentStack}   screenOptions={{headerShown: false}} options={{
          tabBarLabel: 'Buy',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="shopping-outline" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="Transaction" component={TransactionStack}   options={{
          tabBarLabel: 'Transaction',
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

      <Stack.Navigator>
        <Stack.Screen
          name="Explore"
          component={AppNavigation}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ headerShown: true }}
        />
          <Stack.Screen
          name="DetailPage"
          component={TransactionDetailScreen}
          options={{ headerShown: true, headerTitle:'' }}
        />
      </Stack.Navigator>
  
  );
}

export default App;