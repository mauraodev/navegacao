import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaA from '../views/TelaA';
import TelaC from '../views/TelaC';
import TelaB from '../views/TelaB';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'blue',
      labelStyle: { fontSize: 30 },
    }}
    initialRouteName="TelaB">
    <Tab.Screen name="TelaA" component={TelaA} />
    <Tab.Screen name="TelaB" component={TelaB} />
    <Tab.Screen name="TelaC" component={TelaC} />
  </Tab.Navigator>
);
