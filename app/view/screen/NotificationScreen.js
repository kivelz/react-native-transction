import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Header } from 'react-native/Libraries/NewAppScreen'
import CustomStyles from '../styles'
import TransactionDataById from '../../../api/getTransaction'
import TransactionData from '../../../api/getTransaction'

export class NotificationScreen extends Component {

  
  render() {
    return (
      <View style={CustomStyles.container}>
        <Text style={CustomStyles.textCenter}>NotificationScreen</Text>
        <TransactionData navigation={this.props.navigation}/>
      </View>
    )
  }
}

export default NotificationScreen