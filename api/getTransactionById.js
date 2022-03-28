import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';


const TransactionDataById = props => {
  const [isLoading, setLoading] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const [getError, setError] = useState(null);

  const getData = async () => { 
   await axios
    .get('https://623ff07f0adaf66ad748df81.mockapi.io/api/v1/transactions/' + props.id)
    .then(function (response) {
      // handle success
      setTransaction(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error.message)
      alert(error.message);
    })
};
  useEffect(() => {
      setLoading(true);
      getData();
  }, []);

  console.log('alltransaction', transaction)
  return(
    <View>
        <View>
            <View style={{paddingVertical: 20, alignItems:'center'}}> 
            <Text>Transaction ID is {transaction.id}</Text>
            </View>       
        
    </View>
      </View>
  );
};
export default TransactionDataById;

