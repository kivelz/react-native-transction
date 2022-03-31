import { Text, View } from 'react-native'
import React, { Component } from 'react'
import TransactionData from '../../../api/getTransaction'


export class TransactionScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems:'center',  justifyContent:'center',}}>
      <Text style={{fontSize: 18}}>Transaction Screen</Text> 
      
       <TransactionData navigation={this.props.navigation} pageParams={'Transaction'}/>
      
    </View>
    )
  }
}

export default TransactionScreen