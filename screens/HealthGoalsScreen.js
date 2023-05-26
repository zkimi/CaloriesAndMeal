import React, { useState }  from 'react';
import { View, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker'

var selectedValue = 0;

const HealthGoalsScreen = () => {
  const [selectedGender, setSelectedGender] = useState();
  const [selectedAge, setSelectedAge] = useState();
  const [selectedHeight, setSelectedHeight] = useState();
  const [selectedWeight, setSelectedWeight] = useState();
  const [selectedActivityLevel, setSelectedActivityLevel] = useState();
  const [selectedHealthGoal, setSelectedHealthGoal] = useState();
  
  
  return (
    <View>
      <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType='numeric'
          value={selectedAge}
          placeholder='Your age'
          onChangeText={(age) => setSelectedAge(age)}
          maxLength={2}
      />

      <Picker
        selectedValue={selectedGender}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedGender(itemValue)
        }>
        <Picker.Item label="Homme" value="m" />
        <Picker.Item label="Femme" value="f" />
      </Picker>

      <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType='numeric'
          value={selectedHeight}
          placeholder='Your height in cm'
          onChangeText={(height) => setSelectedHeight(height)}
          maxLength={3}
      />

      <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          keyboardType='numeric'
          value={selectedWeight}
          placeholder='Your weight in kg'
          onChangeText={(weight) => setSelectedWeight(weight)}
          maxLength={3}
      />


      <Picker
        selectedValue={selectedActivityLevel}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedActivityLevel(itemValue)
        }>
        <Picker.Item label="Sendetary" value="1.2" />
        <Picker.Item label="Light exercise" value="1.375" />
        <Picker.Item label="Moderate exercise" value="1.55" />
        <Picker.Item label="Heavy exercise" value="1.725" />
        <Picker.Item label="Extra active" value="1.9" />
      </Picker>

      <Picker
        selectedValue={selectedHealthGoal}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedHealthGoal(itemValue)
        }>
        <Picker.Item label="Weight loss" value="wl" />
        <Picker.Item label="Weight maintenance" value="wm" />
        <Picker.Item label="Weight gain" value="wg" />
      </Picker>
    </View>
  );
};

export default HealthGoalsScreen;