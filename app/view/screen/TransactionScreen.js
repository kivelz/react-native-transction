import { Text, View } from 'react-native'
import React, { Component } from 'react'
import TransactionData from '../../../api/api'

export class TransactionScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems:'center',  justifyContent:'center',}}>
      <Text style={{fontSize: 18}}>Transaction Screen</Text> 
       <TransactionData/>
      
    </View>
    )
  }
}

export default TransactionScreen