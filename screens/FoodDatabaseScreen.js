import React, { useState } from 'react';
import { SafeAreaView, View, FlatList } from 'react-native';
import { ListItem, TextInput } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import ApiService from '../js/ApiService';
import { REACT_APP_API_AUTOCOMPLETE, REACT_APP_API_URL } from '@env';

const FoodDatabaseScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState({});

  const handleSuggestionClick = async (event) => {
    console.log('salut ');
    setSearchText(event.nativeEvent.text);
    const answer = await ApiService.getData(REACT_APP_API_URL, '?ingr=apple');
    console.log(answer);
  };

  const handleChange = async (event) => {
    setSearchText(event.nativeEvent.text);

    if (searchText.length > 1) {
      const answer = await ApiService.getData(REACT_APP_API_AUTOCOMPLETE, `q=${searchText}`);
      console.log(answer.data);
      setSuggestions(answer.data);
    } else if (searchText.length === 0) {
      //clear suggestions
      setSuggestions([]);
    }
  };

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
        {suggestions && (
          <FlatList
            data={suggestions}
            renderItem={({ item }) => <ListItem onPress={handleSuggestionClick} title={item} />}
            keyExtractor={(item) => item}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default FoodDatabaseScreen;
