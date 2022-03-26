import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';

import customerData from  './data.json'


const TransactionData = props => {
  const [isLoading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState(null);
  const [getError, setError] = useState(null);
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
  console.log('isloading', isLoading);
  console.log('transaction', transaction);

const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={{flex: 1}}>
       
      </View>
    )
  }
  return(
      <View style={{ flex:1, justifyContent:'center', alignItems:'center', alignSelf:'center', backgroundColor:'yellow'}}>
          {isLoading ? <Text>Loading...</Text> :
          (
            <View style={{}}> 
               <FlatList
                  data={transaction}
                  keyExtractor={({ id }) => id.toString()}
                  renderItem={({ item }) => renderItem({item})}
                 
              />
            </View>
             
          )}
      </View>
  );
};
export default TransactionData;