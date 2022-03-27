import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import Notification from '../app/view/screen/NotificationScreen'

import customerData from  './data.json'


const TransactionData = props => {
  
  const navigateToDetailScreen = (id) => {
    props.navigation.navigate("DetailPage", {id: id})
  }

  return(
    <View>
        <View>
            <View style={{paddingVertical: 20, alignItems:'center'}}> 
            {customerData.transactions.map((item, index) => (
              <TouchableOpacity style={{marginVertical: 5}} onPress={() => navigateToDetailScreen(item.id)}>
                       <Text style={{color:'#0000EE', fontSize:16}}>Transaction {item.id}</Text>
              </TouchableOpacity>       
            ))}
            </View>         
    </View>
      </View>
  );
};
export default TransactionData;

