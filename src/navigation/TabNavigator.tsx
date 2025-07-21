import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import { Colors } from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

// Import our new screens
import { HomeScreen } from '../screens/HomeScreen';

// Placeholder screens for now - we'll build these next
const RecipesScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
    <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>Recipes Screen</Text>
    <Text style={{ fontSize: 14, color: '#666', marginTop: 8 }}>Coming next...</Text>
  </View>
);

const MyDrinksScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
    <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>My Drinks Screen</Text>
    <Text style={{ fontSize: 14, color: '#666', marginTop: 8 }}>Coming soon...</Text>
  </View>
);

const SocialHubScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
    <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>Social Hub Screen</Text>
    <Text style={{ fontSize: 14, color: '#666', marginTop: 8 }}>Coming soon...</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
    <Text style={{ fontSize: 18, fontWeight: '600', color: '#333' }}>Profile Screen</Text>
    <Text style={{ fontSize: 14, color: '#666', marginTop: 8 }}>Coming soon...</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Recipes') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'MyDrinks') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'Social') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary.pink,
        tabBarInactiveTintColor: Colors.text.secondary,
        tabBarStyle: {
          backgroundColor: Colors.primary.white,
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0.1,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: -5 },
          height: 90,
          paddingBottom: 20,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Recipes" component={RecipesScreen} />
      <Tab.Screen 
        name="MyDrinks" 
        component={MyDrinksScreen}
        options={{ title: 'My Drinks' }}
      />
      <Tab.Screen 
        name="Social" 
        component={SocialHubScreen}
        options={{ title: 'Social Hub' }}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}