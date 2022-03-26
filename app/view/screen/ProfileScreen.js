import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class ProfileScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems:'center', flexGrow: 1, justifyContent:'center'}}>
      <Text style={{fontSize: 18}}>Profile Screen</Text> 
    </View>
    )
  }
}

export default ProfileScreen