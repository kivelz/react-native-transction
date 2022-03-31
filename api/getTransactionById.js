import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { ActivityIndicator } from 'react-native-paper';


const TransactionDataById = props => {
  const [isLoading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const getDataById = async () => { 
    setLoading(true)
  await  axios
    .get('https://623ff07f0adaf66ad748df81.mockapi.io/api/v1/transactions/' + props.id)
    .then(function (response) {
      // handle success
      setTransaction(response.data);
      setLoading(false);
    })
    .catch(function (error) {
      // handle error
      setLoading(false)
      alert(error.message);
    })
};
  useEffect(() => {
      setLoading(true);
      getDataById();
  }, []);

  return(
  
    <View>
        <View>
            <View style={{paddingVertical: 20, alignItems:'center'}}> 
            <Text>Transaction ID is {transaction.id}</Text>
            </View> 
            {isLoading && (
              <ActivityIndicator/>
            )}         
    </View>
      </View>
  );
};
export default TransactionDataById;

