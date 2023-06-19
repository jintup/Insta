import {View, Text} from 'react-native';
import React from 'react';
import Iconic from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native-gesture-handler';
const SearchBox = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingVertical: 10,
        position: 'relative',
      }}>
      <Iconic
        name="search"
        style={{
          fontSize: 10,
          opacity: 0.7,
          position: 'absolute',
          zIndex: 1,
          left: 25,
        }}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#909090"
        style={{
          width: '94%',
          backgroundColor: '#EBEBEB',
          borderRadius: 10,
          alignItems: 'center',
          fontSize: 15,
          padding: 4,
          paddingLeft: 40,
        }}
      />
    </View>
  );
};

export default SearchBox;
