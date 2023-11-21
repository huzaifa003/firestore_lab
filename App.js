import { View, Text } from 'react-native'
import React from 'react'
// import ViewFood from './screens/ViewFood'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddDeals from './AddDeals';
import ViewDeals from './ViewDeals';

// import EditFood from './screens/EditFood';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="AddDeals" component={AddDeals} />
        <Stack.Screen name="ViewDeals" component={ViewDeals} />
        {/* <Stack.Screen name="ViewFood" component={ViewFood} />
        <Stack.Screen name="EditFood" component={EditFood} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App