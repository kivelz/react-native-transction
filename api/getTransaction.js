import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import Notification from '../app/view/screen/NotificationScreen'

import customerData from  './data.json'
import axios from 'axios';


const TransactionData = props => {
  const [isLoading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const [getError, setError] = useState(null);

  const getData = () => { 
    axios
    .get('https://623ff07f0adaf66ad748df81.mockapi.io/api/v1/transactions')
    .then(function (response) {
      // handle success
      console.log('responses', response.data)
      setTransaction(response.data)
    })
    .catch(function (error) {
      // handle error
      alert(error.message);
    })
};
  useEffect(() => {
      setLoading(true);
      getData();
  }, []);

  const navigateToDetailScreen = (id) => {
    props.navigation.navigate("DetailPage", {id: id})
  }
  console.log('alltransaction', transaction)
  return(
    <View>
        <View>
            <View style={{paddingVertical: 20, alignItems:'center'}}> 
            {transaction.map((item, index) => (
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

