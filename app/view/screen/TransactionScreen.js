import { Text, View } from 'react-native'
import React, { Component } from 'react'
import TransactionData from '../../../api/getTransaction'


export class TransactionScreen extends Component {
  render() {
    const { navigate } = this.props.navigation;
    console.log('navigation',this.props.navigation);
    return (
      <View style={{flex: 1, alignItems:'center',  justifyContent:'center',}}>
      <Text style={{fontSize: 18}}>Transaction Screen</Text> 
      
       <TransactionData navigation={this.props.navigation}/>
      
    </View>
    )
  }
}

export default TransactionScreen