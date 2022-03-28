import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';


const FilterNotificationData = props => {
  const [isLoading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const [Error, setError] = useState(null);

  const getData = () => { 
    console.log('propsss', props)
    axios
    .get('https://623ff07f0adaf66ad748df81.mockapi.io/api/v1/transactions/')
    .then(function (response) {
      // handle success
      const unreadData = response.data.filter(data => data.notification_read == false);
      setTransaction(props.PageParms != 'Transaction' ? unreadData: response.data)
    })
    .catch(function (error) {
      // handle error
      setError(error)
      console.log(error.message)
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
              <TouchableOpacity key={index} style={{marginVertical: 5}} onPress={() => navigateToDetailScreen(item.id)}>
                       <Text style={{color:'#0000EE', fontSize:16}}>Unread notification - Transaction {item.id}</Text>
              </TouchableOpacity>       
            ))}
            {Error != null && (
              <Text>{Error}</Text>
            )}
            </View>       
        
    </View>
      </View>
  );
};
export default FilterNotificationData;

