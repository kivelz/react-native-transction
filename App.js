import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import Tabs from './app/navigation/tabs';
import ErrorBoundary from 'react-native-error-boundary'


const App = () => {
  return (
    <NavigationContainer>
        <ErrorBoundary>
        <Tabs/>
        </ErrorBoundary>  
    </NavigationContainer>
  )
}
export default App;