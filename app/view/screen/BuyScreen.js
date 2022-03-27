import { Text, View } from 'react-native'
import React, { Component } from 'react'
import TransactionData from '../../../api/getTransaction.js'

export class BuyScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems:'center', flexGrow: 1, justifyContent:'center'}}>
        <Text style={{fontSize: 18}}>Buy Screen</Text> 
      </View>
    )
  }
}

export default BuyScreen