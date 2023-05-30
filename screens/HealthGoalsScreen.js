import React, { useState }  from 'react';
import { StatusBar, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';

var selectedValue = 0;

const HealthGoalsScreen = () => {
  const [selectedGender, setSelectedGender] = useState();
  const [selectedAge, setSelectedAge] = useState();
  const [selectedHeight, setSelectedHeight] = useState();
  const [selectedWeight, setSelectedWeight] = useState();
  const [selectedActivityLevel, setSelectedActivityLevel] = useState();
  const [selectedHealthGoal, setSelectedHealthGoal] = useState();

  const computeBMR=()=>{
    return "ok";
  }
  
  
  return (
    <SafeAreaView style={{ margin: 10 }}>
      <ScrollView>
        <Text variant="overline" style={{ marginTop: 16, marginBottom: 16 }}>Your age : </Text>
        <TextInput
            style={{padding: -5}}
            keyboardType='numeric'
            value={selectedAge}
            placeholder='Enter your age'
            onChangeText={(age) => setSelectedAge(age)}
            maxLength={2}
            leading={props => <Icon name="account" {...props} />}
        />

        <Text variant="overline" style={{ marginTop: 16, marginBottom: 16 }}>Your gender : </Text>
        <Picker
          mode="dropdown"
          style={[styles.picker]} itemStyle={styles.pickerItem}
          selectedValue={selectedGender}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedGender(itemValue)
          }>
          <Picker.Item label="Male" value="m" />
          <Picker.Item label="Female" value="f" />
        </Picker>

        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'football' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
            ]}
        />

        <Text variant="overline" style={{ marginTop: 16, marginBottom: 16 }}>Your height : </Text>
        <TextInput
            keyboardType='numeric'
            value={selectedHeight}
            placeholder='Enter your height in cm'
            onChangeText={(height) => setSelectedHeight(height)}
            maxLength={3}
            leading={props => <Icon name="human-male-height-variant" {...props} />}
        />

        <Text variant="overline" style={{ marginTop: 16, marginBottom: 16 }}>Your weight : </Text>
        <TextInput
            keyboardType='numeric'
            value={selectedWeight}
            placeholder='Enter your weight in kg'
            onChangeText={(weight) => setSelectedWeight(weight)}
            maxLength={3}
            leading={props => <Icon name="weight" {...props} />}
        />

        <Text variant="overline" style={{ marginTop: 16, marginBottom: 16 }}>Your activity level : </Text>
        <Picker
          itemStyle={{height: 44}}
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

        <Text variant="overline" style={{ marginTop: 16, marginBottom: 16 }}>Your goal : </Text>
        <Picker
          selectedValue={selectedHealthGoal}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedHealthGoal(itemValue)
          }>
          <Picker.Item label="Weight loss" value="wl" />
          <Picker.Item label="Weight maintenance" value="wm" />
          <Picker.Item label="Weight gain" value="wg" />
        </Picker>

        <Button onPress={computeBMR} title="Show my BMR" color="#841584" leading={props => <Icon name="calculator" {...props} />}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  picker: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
  },
  pickerItem: {
    color: 'black'
  }
});

export default HealthGoalsScreen;