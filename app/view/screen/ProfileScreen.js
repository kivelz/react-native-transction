import { Text, View } from 'react-native'
import React, { Component } from 'react'
import CustomStyles from '../styles'

export class ProfileScreen extends Component {

  _navigateToNofication() {
    this.props.navigation.navigate("Notification");
  }

  render() {
    const {navigate} = this.props.navigation.navigate;
    return (
      <View style={{flex: 1, alignItems:'center', flexGrow: 1, justifyContent:'center'}}>
      <Text style={{fontSize: 18}}>Profile Screen</Text> 
      <Text style={[CustomStyles.hyperLinks]} onPress={() => this._navigateToNofication()}>Notification Screen</Text>
    </View>
    )
  }
}

export default ProfileScreen