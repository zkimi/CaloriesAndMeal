import React, { useState }  from 'react';
import { StatusBar, ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { TextInput, Button, Text, Dialog, DialogHeader, DialogContent, DialogActions } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from 'react-native-picker-select';

const HealthGoalsScreen = () => {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedAge, setSelectedAge] = useState(null);
  const [selectedHeight, setSelectedHeight] = useState(null);
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedActivityLevel, setSelectedActivityLevel] = useState(null);
  const [selectedHealthGoal, setSelectedHealthGoal] = useState(null);
  const [visible, setVisible] = useState(false);
  const [BMR, setBMR] = useState(null);

  computeBMR =() =>{
    if (selectedGender != null && selectedWeight != null && selectedHeight != null && selectedAge != null){
      let BMRCalculation = 0;

      switch (selectedGender) {
        case "m":
          BMRCalculation = 88.362 + (13.397 * parseInt(selectedWeight)) + (4.799 * parseInt(selectedHeight)) - (5.677 * parseInt(selectedAge)); 
          break;
      
        case "f":
          BMRCalculation = 447.593 + (9.247 * parseInt(selectedWeight)) + (3.098 * parseInt(selectedHeight)) - (4.330 * parseInt(selectedAge)); 
          break;
          
        default:
          BMRCalculation = null;
          break;
      }

      if (BMRCalculation != null){
        BMRCalculation *= parseFloat(selectedActivityLevel);

        if (selectedHealthGoal == "wl"){
          BMRCalculation -= 500;
        } else if (selectedHealthGoal == "wg"){
          BMRCalculation += 500;
        }

        setBMR(BMRCalculation);
      }
    }

    setVisible(true);
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


        <RNPickerSelect
            onValueChange={(value) => setSelectedGender(value)}
            items={[
                { label: 'Male', value: 'm' },
                { label: 'Female', value: 'f' },
            ]}
            style={{
              ...styles,
              iconContainer: {
                top: 10,
                right: 12,
              },
            }}
            placeholder={{
              label: 'Select your gender',
              value: null,
              color: '#212121',
            }}
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

        <RNPickerSelect
            onValueChange={(value) => setSelectedActivityLevel(value)}
            items={[
                { label: 'Sedentary', value: '1.2' },
                { label: 'Light exercise', value: '1.375' },
                { label: 'Moderate exercise', value: '1.55' },
                { label: 'Heavy exercise', value: '1.725' },
                { label: 'Extra active', value: '1.9' },
            ]}
            placeholder={{
              label: 'Select your activity level',
              value: null,
              color: '#212121',
            }}
            style={{
              ...styles,
              iconContainer: {
                top: 10,
                right: 12,
              },
            }}
        />

        <Text variant="overline" style={{ marginTop: 16, marginBottom: 16 }}>Your goal : </Text>
        <RNPickerSelect
            onValueChange={(value) => setSelectedHealthGoal(value)}
            items={[
                { label: 'Weight loss', value: 'wl' },
                { label: 'Weight maintenance', value: 'wm' },
                { label: 'Weight gain', value: 'wg' },
            ]}
            placeholder={{
              label: 'Select your goal',
              value: null,
              color: '#212121',
            }}
            style={{
              ...styles,
              iconContainer: {
                top: 10,
                right: 12,
              },
            }}
        />

        <Button onPress={() => {computeBMR();}} style={{marginTop:20}} title="Show my BMR" color="#841584" leading={props => <Icon name="calculator" {...props} />}></Button>
      
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <DialogHeader title={ BMR != null ? ("Your BMR") : ( "Invalid inputs" ) }/>
          <DialogContent>
            <Text>
              { BMR != null ? ("After numerous calculations, your BMR is : " + BMR + " calories/day") : ( "You should complete all inputs to discover your BMR." ) }
            </Text>
          </DialogContent>
          <DialogActions>
            <Button
              title="Ok"
              compact
              variant="text"
              onPress={() => setVisible(false)}
            />
          </DialogActions>
        </Dialog>
      
      </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  picker: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5
  },
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    color: '#212121',
    minHeight: 56,
    backgroundColor: '#f5f5f5',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default HealthGoalsScreen;