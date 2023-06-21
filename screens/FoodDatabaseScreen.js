import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Modal,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TextInput
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { ListItem } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import ApiService from '../js/ApiService';
import { REACT_APP_API_AUTOCOMPLETE } from '@env';
import { StyleSheet } from 'react-native';

const FoodDatabaseScreen = ({ setMealPlan }) => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [selectedMeal, setSelectedMeal] = useState('Breakfast');
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [addFoodModalVisible, setAddFoodModalVisible] = useState(false);

  const handleSuggestionClick = async (selectedSuggestion) => {
    try {
      const response = await ApiService.getData(
        'https://api.edamam.com/api/food-database/v2/parser',
        `ingr=${selectedSuggestion}`
      );

      const { hints } = response.data;

      if (hints.length > 0) {
        const selectedFood = hints[0].food;
        setSelectedFood(selectedFood);
        setModalVisible(true);
      } else {
        // Food not found in the database
        console.log('Food not found');
      }
    } catch (error) {
      // Error occurred during API request
      console.log('API request error:', error);
    }
  };

  const handleChange = async (event) => {
    const text = event.nativeEvent.text;
    setSearchText(text);

    if (text.length > 1) {
      const answer = await ApiService.getData(REACT_APP_API_AUTOCOMPLETE, `q=${text}`);
      console.log(answer.data);
      setSuggestions(answer.data);
    } else if (text.length === 0) {
      // Clear suggestions
      setSuggestions([]);
    }
  };

  const closeModal = () => {
    setSelectedFood(null);
    setSelectedQuantity(1);
    setSelectedMeal('Breakfast');
    setModalVisible(false);
  };

  const handleAddFood = () => {
    setModalVisible(false);
    setAddFoodModalVisible(true);
  };

  const handleSaveFood = () => {
    // Implement the logic to save the selected food with quantity and meal type
    console.log('Food added:', selectedFood.label);
    console.log('Quantity:', selectedQuantity);
    console.log('Meal:', selectedMeal);

    const newFoodItem = {
      name: selectedFood.label,
      quantity: selectedQuantity,
      calories: selectedFood.nutrients.ENERC_KCAL
    };

    const updatedMealPlan = mealPlan.map((day) => {
      if (day.hasOwnProperty(selectedDay)) {
        const updatedDay = { ...day };
        updatedDay[selectedDay][selectedMeal].push(newFoodItem);
        return updatedDay;
      }
      return day;
    });

    setMealPlan(updatedMealPlan);

    setAddFoodModalVisible(false);
    setSelectedFood(null);
    setSelectedQuantity(1);
    setSelectedMeal('Breakfast');
  };

  const handleCancelSaveFood = () => {
    setAddFoodModalVisible(false);
    setSelectedFood(null);
    setSelectedQuantity(1);
    setSelectedMeal('Breakfast');
  };

  const renderResultItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleSuggestionClick(item)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView>
      <View>
        <TextInput
          returnKeyType="search"
          variant="standard"
          placeholder="Search"
          leading={(props) => <Icon name="magnify" {...props} />}
          style={{ margin: 16 }}
          onChange={handleChange}
          onSubmitEditing={handleChange}
        />
      </View>
      <View>
        {suggestions.length > 0 && (
          <FlatList
            data={suggestions}
            renderItem={renderResultItem}
            keyExtractor={(item) => item}
          />
        )}
      </View>
      <Modal visible={modalVisible} onRequestClose={closeModal}>
        {selectedFood && (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{ uri: selectedFood.image }} style={{ width: 200, height: 200 }} />
            <Text>{selectedFood.label}</Text>
            <Text>Calories: {selectedFood.nutrients.ENERC_KCAL}</Text>
            <Text>Carbohydrates: {selectedFood.nutrients.CHOCDF}</Text>
            <Text>Protein: {selectedFood.nutrients.PROCNT}</Text>
            <Text>Fat: {selectedFood.nutrients.FAT}</Text>
            <View style={{ flexDirection: 'row', marginTop: 16 }}>
              <Button title="ADD" onPress={handleAddFood} />
              <Button title="CANCEL" onPress={closeModal} />
            </View>
          </View>
        )}
      </Modal>
      <Modal visible={addFoodModalVisible} onRequestClose={handleCancelSaveFood}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Quantity:</Text>
          <TextInput
            value={selectedQuantity.toString()}
            onChangeText={(text) => setSelectedQuantity(parseInt(text))}
            keyboardType="numeric"
            style={{ borderWidth: 1, borderColor: 'gray', padding: 8, marginBottom: 16 }}
          />
          <Text>Meal:</Text>
          <RNPickerSelect
            selectedValue={selectedMeal}
            onValueChange={(itemValue) => setSelectedMeal(itemValue)}
            items={[
              { label: 'Breakfast', value: 'Breakfast' },
              { label: 'Lunch', value: 'Lunch' },
              { label: 'Dinner', value: 'Dinner' },
              { label: 'Snack', value: 'Snack' }
            ]}
            style={{
              ...styles,
              iconContainer: {
                top: 10,
                right: 12
              }
            }}
            placeholder={{
              label: 'Select the meal',
              value: null,
              color: '#212121'
            }}
          />
          <Text>Day :</Text>
          <RNPickerSelect
            selectedValue={selectedDay}
            onValueChange={(itemValue) => setSelectedMeal(itemValue)}
            items={[
              { label: 'Monday', value: 'Monday' },
              { label: 'Tuesday', value: 'Tuesday' },
              { label: 'Wednesday', value: 'Wednesday' },
              { label: 'Thursday', value: 'Thursday' },
              { label: 'Friday', value: 'Friday' },
              { label: 'Saturday', value: 'Saturday' },
              { label: 'Sunday', value: 'Sunday' }
            ]}
            style={{
              // ...styles,
              iconContainer: {
                top: 10,
                right: 12
              }
            }}
            placeholder={{
              label: 'Select the day',
              value: null,
              color: '#212121'
            }}
          />
          <View style={{ flexDirection: 'row', marginTop: 16 }}>
            <Button title="SAVE" onPress={handleSaveFood} />
            <Button title="CANCEL" onPress={handleCancelSaveFood} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  picker: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5
  }
});

export default FoodDatabaseScreen;
