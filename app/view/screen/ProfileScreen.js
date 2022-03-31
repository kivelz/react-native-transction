import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CustomStyles from '../styles'

export class ProfileScreen extends Component {

  _navigateToNofication() {
    this.props.navigation.navigate("Notification");
  }

  render() {
    return (
      <View style={{flex: 1, alignItems:'center', flexGrow: 1, justifyContent:'center'}}>
      <Text style={{fontSize: 18}}>Profile Screen</Text> 
      <Text style={[CustomStyles.hyperLinks]} onPress={() => this._navigateToNofication()}>Go to Notification Screen</Text>
    </View>
    )
  }
}

export default ProfileScreen