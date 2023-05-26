import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'

var selectedValue = 0;

const HealthGoalsScreen = () => {
  return (
    <View>
      <Text>Welcome to the HealthGoalsScreen!</Text>

      <Picker selectedValue={selectedValue}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

export default HealthGoalsScreen;