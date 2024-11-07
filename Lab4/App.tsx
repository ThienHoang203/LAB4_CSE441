import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import Contacts from './src/Contacts';
import store from './src/store';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileContact from './src/ProfileContact';
import Favorite from './src/Favorite';

//Create Contacts Screen
const Stack1 = createStackNavigator();
const ContactsScreen = () => {
  return (
    <Stack1.Navigator initialRouteName="Contacts">
      <Stack1.Screen
        name="Contacts"
        component={Contacts}
        options={{
          title: 'Contacts',
        }}
      />
      <Stack1.Screen
        name="Profile"
        component={ProfileContact}
        options={{
          title: 'Profile Contact',
        }}
      />
    </Stack1.Navigator>
  );
};

//Create Favorites Screen
const Stack2 = createStackNavigator();
const FavoritesScreen = () => {
  return (
    <Stack2.Navigator initialRouteName="favorites">
      <Stack2.Screen
        name="Favorites"
        component={Favorite}
        options={{
          headerShown: true,
        }}
      />
      <Stack2.Screen
        name="ProfileFavorite"
        component={ProfileContact}
        options={{title: 'Profile Contact'}}
      />
    </Stack2.Navigator>
  );
};

//Icon for bottom navigation

//Create App Screen
const TabScreen = createMaterialBottomTabNavigator();
const AppScreen = () => {
  return (
    <TabScreen.Navigator
      initialRouteName="ContactsScreen"
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'ContactsScreen') {
            iconName = focused ? 'account-details' : 'account-details-outline';
          } else {
            iconName = focused ? 'star-check' : 'star-check-outline';
          }
          // Return the icon component
          return <Icon name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: 'tomato', // Active color
        tabBarInactiveTintColor: 'gray', // Inactive color
      })}>
      <TabScreen.Screen
        name="ContactsScreen"
        component={ContactsScreen}
        options={{
          title: 'Contacts',
        }}
      />
      <TabScreen.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          title: 'Favorites',
        }}
      />
    </TabScreen.Navigator>
  );
};

// App
const App = () => {
  console.log('NEW WINDOW');
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
