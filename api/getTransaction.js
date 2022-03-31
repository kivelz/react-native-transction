import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';


const TransactionData = props => {
  const [isLoading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const [error, setError] = useState(null)
 
  const getData = () => { 
    setLoading(true)
    console.log('propsss', props)
    axios
    .get('https://623ff07f0adaf66ad748df81.mockapi.io/api/v1/transactions/')
    .then(function (response) {
      // handle success
      setLoading(false)
      const unreadData = response.data.filter(data => data.notification_read == false);
      setTransaction(props.pageParams != 'Transaction' ? unreadData: response.data)
    })
    .catch(function (error) {
      // handle error
      setLoading(false)
      setError(error)
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
  return(
    <View>
        <View>
            <View style={{paddingVertical: 20, alignItems:'center'}}> 
            {transaction.map((item, index) => (
              <TouchableOpacity key={index} style={{marginVertical: 5}} onPress={() => navigateToDetailScreen(item.id)}>
                {props.pageParams != 'Transaction' ? (
                    <Text style={{color:'#0000EE', fontSize:16}}>Unread notification - Transaction {item.id}</Text>
                ):   <Text style={{color:'#0000EE', fontSize:16}}>Transaction {item.id}</Text>}
                     
              </TouchableOpacity>       
            ))}
            {isLoading && (
              <ActivityIndicator/>
            )}
            {error != null && (
              <Text>{error}</Text>
            )}
            </View>          
        </View>
      </View>
  );
};
export default TransactionData;

