import { Text, View } from 'react-native'
import React, { Component } from 'react'
import TransactionData from '../../../api/api'

export class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems:'center', flexGrow: 1, justifyContent:'center'}}>
      <Text style={{fontSize: 18}}>Home Screen</Text> 
    </View>
    )
  }
}

export default HomeScreen