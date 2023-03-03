import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/homeScreen';
import SettingsScreen from './screens/settingsScreen';
import MapScreen from './screens/mapScreen';

const homeName = 'Home';
const settingsName = 'Settings';
const mapName = 'Map';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === settingsName) {
            iconName = focused ? 'settings' : 'settings-outline';
          } else if (rn === mapName) {
            iconName = focused ? 'map' : 'map-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={mapName} component={MapScreen} />
      <Tab.Screen name={settingsName} component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default MainContainer;
