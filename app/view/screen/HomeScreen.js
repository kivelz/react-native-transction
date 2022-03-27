import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CustomStyles from '../styles'


export class HomeScreen extends Component {

  _navigateToNofication() {
    this.props.navigation.navigate("Notification");
  }
  render() {
    return (
      <View style={{flex: 1, alignItems:'center', flexGrow: 1, justifyContent:'center'}}>
      <Text style={{fontSize: 18}}>Home Screen</Text> 
      <Text style={[CustomStyles.hyperLinks]} onPress={() => this._navigateToNofication()}>Notification Screen</Text>
    </View>
    )
  }
}

export default HomeScreen