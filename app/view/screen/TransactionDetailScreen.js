import { Text, View } from 'react-native'
import React, { Component } from 'react'
import TransactionDataById from '../../../api/getTransactionById'
import Customerdata from './../../../api/data.json'
import CustomStyles from '../styles'

export class TransactionDetailScreen extends Component {

findTransactionById = () => {
  return  Customerdata.transactions.find((data) => data.id == this.props.route.params.id)

}
renderTranasction = () => {
    const data = this.findTransactionById();
   return (
       <View>
           <Text style={[CustomStyles.textCenter]}>Transaction ID is {data.id}</Text>
       </View>
   )
}
  render() {
      console.log('ids', this.props)
    return (
      <View style={{ justifyContent: 'center', alignItems:'center', flex: 1}}>  
      <Text style={{fontSize: 20}}>Transaction Screen</Text>
      <View style={{marginVertical: 20}}>
      {this.renderTranasction()}
      </View>
     
      </View>
    )
  }
}

export default TransactionDetailScreen