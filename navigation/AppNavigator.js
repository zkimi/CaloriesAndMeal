import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HealthGoalsScreen from '../screens/HealthGoalsScreen';
import FoodDatabaseScreen from '../screens/FoodDatabaseScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealPlanningScreen from '../screens/MealPlanningScreen';

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    "tabBarActiveTintColor": "red",
    "tabBarInactiveTintColor": "black",
    "tabBarStyle": [
      {
        "display": "flex"
      },
      null
    ]
  }


function AppNavigator() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={tabBarOptions}>
            <Tab.Screen name="Health goals" component={HealthGoalsScreen}  options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="table-heart" color={color} size={size} />
                ),
            }} />
            <Tab.Screen name="Food database" component={FoodDatabaseScreen}  options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="food" color={color} size={size} />
                ),
            }}  />
            <Tab.Screen name="Meal Planning" component={MealPlanningScreen} options={{
                tabBarIcon: ({ color, size }) => (
                    <Icon name="calendar-month" color={color} size={size} />
                ),
            }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;