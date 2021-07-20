import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TelaA from '../views/TelaA';
import TelaC from '../views/TelaC';
import TelaB from '../views/TelaB';
import PassoStack from '../components/PassoStack';

const Stack = createStackNavigator();

export default props => (
  <Stack.Navigator
    initialRouteName="TelaA"
    screenOptions={{ headerShown: true }}>
    <Stack.Screen name="Tela A" options={{ title: 'Informações iniciais' }}>
      {props => (
        <PassoStack {...props} avancar="TelaB">
          <TelaA />
        </PassoStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="TelaB">
      {props => (
        <PassoStack {...props} voltar avancar="TelaC">
          <TelaB />
        </PassoStack>
      )}
    </Stack.Screen>
    <Stack.Screen name="TelaC">
      {props => (
        <PassoStack {...props} voltar avancar="TelaC">
          <TelaC {...props}/>
        </PassoStack>
      )}
    </Stack.Screen>
  </Stack.Navigator>
);
