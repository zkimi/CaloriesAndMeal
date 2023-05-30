import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const FoodDatabaseScreen = () => {
  const [searchText, setSearchText] = useState();

  return (
    <View>
      <TextInput
        variant="standard"
        label="Search"
        leading={(props) => <Icon name="magnify" {...props} />}
        style={{ margin: 16 }}
        onChangeText={setSearchText}
      />
      <Text>{searchText}</Text>
    </View>
  );
};

export default FoodDatabaseScreen;
