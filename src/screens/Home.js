import React from 'react';
import {ScrollView, StatusBar, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Stories from '../components/stories';
import Post from '../components/post';
const Home = () => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <FontAwesome name="plus-square-o" style={{fontSize: 24}} />
        <Text
          style={{
            fontFamily: 'Lobster-Regular',
            fontSize: 25,
            fontWeight: '500',
          }}>
          Instagram
        </Text>
        <MaterialCommunityIcons
          name="navigation-variant-outline"
          style={{fontSize: 24}}
        />
      </View>
      <ScrollView>
        <Stories />
        <Post />
      </ScrollView>
    </View>
  );
};
export default Home;
