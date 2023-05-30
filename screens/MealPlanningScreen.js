import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

const MealPlanningScreen = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  let expandedDays = [];

  function toggleDay(day) {
    if (!expandedDays.includes(day)) {
      expandedDays.push(day);
    } else {
      expandedDays = expandedDays.filter((item) => item !== day);
    }
  }

  function isDayExpanded(day) {
    return expandedDays.includes(day);
  }

  function renderChevronIcon(day) {
    return isDayExpanded(day) ? 'chevron-down' : 'chevron-right';
  }

  function renderMeals(day) {
    if (isDayExpanded(day)) {
      return (
        <>
          <View style={styles.mealContainer}>
            <Text style={styles.mealText}>Breakfast</Text>
          </View>
          <View style={styles.mealContainer}>
            <Text style={styles.mealText}>Lunch</Text>
          </View>
          <View style={styles.mealContainer}>
            <Text style={styles.mealText}>Dinner</Text>
          </View>
          <View style={styles.mealContainer}>
            <Text style={styles.mealText}>Snack</Text>
          </View>
        </>
      );
    }
    return null;
  }

  return (
    <View style={styles.container}>
      {days.map((dayOfWeek, index) => (
        <TouchableOpacity
          style={styles.dayContainer}
          key={dayOfWeek + index}
          onPress={() => toggleDay(dayOfWeek)}>
          <View style={styles.dayHeader}>
            <Text style={styles.dayText}>{dayOfWeek}</Text>
            <Icon name={renderChevronIcon(dayOfWeek)} size={20} color="black" />
          </View>
          {renderMeals(dayOfWeek)}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  dayContainer: {
    marginBottom: 20
  },
  dayHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dayText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    flex: 1
  },
  mealContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10
  },
  mealText: {
    fontSize: 16
  }
});

export default MealPlanningScreen;
