import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import Notification from '../app/view/screen/NotificationScreen'

import customerData from  './data.json'


const TransactionData = props => {
  const [isLoading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState(null);
  const [getError, setError] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);


  const getData = () => {
    console.log('what',customerData)
    setLoading(true);
    if(customerData.transactions != undefined) {
      try {
       setTransaction(customerData.transactions);
       console.log(transaction,'abc')
        setLoading(false)
      } catch(e) {
        setError(e.toString());
        setLoading(false)
      }
    } 
}

  useEffect(() => {
      setLoading(true);
      getData();
  }, []);

  const toggleModaL = () => {
    setModalVisible(!isModalVisible);
  }

  return(
    <View>
<View>
          {isLoading ? <Text>Loading...</Text> :
          (
            <View style={{paddingVertical: 20}}> 
            {customerData.transactions.map((item, index) => (
              <TouchableOpacity style={{marginVertical: 5}} onPress={() => toggleModaL()}>
                       <Text style={{color:'#0000EE', fontSize:16}}>Transaction {item.id}</Text>
              </TouchableOpacity>       
            ))}
            </View>       
          )}
    </View>
      
          <Notification isVisible={isModalVisible}/>
      </View>
  );
};
export default TransactionData;