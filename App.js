import React from 'react';
import {Text, View} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Search from './src/screens/search';
import Activity from './src/screens/activity';
import Profile from './src/screens/profile';
import Reels from './src/screens/reels';
import status from './src/components/status';
import Status from './src/components/status';
import Post from './src/components/post';
const App = () => {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  const bottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard:true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {height: 50},
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'ios-search-outline';
            } else if (route.name === 'Reels') {
              iconName = focused
                ? 'caret-forward-circle'
                : 'caret-forward-circle-outline';
            } else if (route.name === 'Activity') {
              iconName = focused ? 'ios-heart' : 'ios-heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-circle';
            }
            return <Ionic name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };
  return (
    // <View>
    //   <Text style={{fontFamily: 'Lobster-Regular'}}>Hijkdg</Text>
    //   <Ionic name="play" style={{fontSize: 20}} />
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Bottom" component={bottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
