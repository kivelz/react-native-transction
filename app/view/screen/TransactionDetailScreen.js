import { Text, View } from 'react-native'
import React, { Component } from 'react'
import TransactionDataById from '../../../api/getTransactionById'

export class TransactionDetailScreen extends Component {

  render() {  
    return (
      <View style={{ justifyContent: 'center', alignItems:'center', flex: 1}}>  
      <Text style={{fontSize: 20}}>Transaction Screen</Text>
      <View style={{marginVertical: 20}}>
        <TransactionDataById id={this.props.route.params.id}/>
      </View>
      </View>
    )
  }
}

export default TransactionDetailScreen