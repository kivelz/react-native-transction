import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import customerData from  './data.json'


const TransactionDataById = props => {
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

  const toggleNavigation = (id) => {
    props.navigation.navigate("DetailPage", id={id})
  }
console.log('route ', props)
  return(
    <View>
              <View>
          {isLoading ? <Text>Loading...</Text> :
          (
            <View style={{paddingVertical: 20}}> 
            {customerData.transactions.find((item) => {
                if(item.id == props.route.params.id) {
                  console.log('o yea')
                  return item;
                }
            })}
          
            </View>       
          )}
    </View>
      </View>
  );
};
export default TransactionDataById;

