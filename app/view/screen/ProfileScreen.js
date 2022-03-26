import { Text, View } from 'react-native'
import React, { Component } from 'react'

export class ProfileScreen extends Component {
  render() {
    const {navigate} = this.props.navigation.navigate;
    return (
      <View style={{flex: 1, alignItems:'center', flexGrow: 1, justifyContent:'center'}}>
      <Text style={{fontSize: 18}}>Profile Screen</Text> 
      <Text onPress={() =>this.props.navigation.navigate("NotificationScreen")} >Link To NotificationScreen</Text>
    </View>
    )
  }
}

export default ProfileScreen