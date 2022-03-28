import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CustomStyles from '../styles';
import TransactionDataById from '../../../api/getTransactionById'

export class TransactionDetailScreen extends Component {

findTransactionById = () => {
  const id = this.props.route.params.id;
  const data = getDataById(id)
  console.log('taada', data)
  return  data;
}
renderTranasction = () => {
    const data = this.findTransactionById();
    console.log('dataaaaa',data)
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
        <TransactionDataById id={this.props.route.params.id}/>
      </View>
     
      </View>
    )
  }
}

export default TransactionDetailScreen