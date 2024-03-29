import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native';

const MealPlanningScreen = () => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const mealPlan = [
    {
      Monday: {
        Breakfast: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Lunch: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Dinner: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Snack: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ]
      },
      Tuesday: {
        Breakfast: [
          { name: 'Apple', quantity: 2, calories: 26 },
          { name: 'Egg', quantity: 1, calories: 27 }
        ],
        Lunch: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Dinner: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Snack: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Tuesday: {
          Breakfast: [
            { name: 'Apple', quantity: 2, calories: 28 },
            { name: 'Egg', quantity: 1, calories: 29 }
          ],
          Lunch: [
            { name: 'Apple', quantity: 2, calories: 25 },
            { name: 'Egg', quantity: 1, calories: 25 }
          ],
          Dinner: [
            { name: 'Apple', quantity: 2, calories: 25 },
            { name: 'Egg', quantity: 1, calories: 25 }
          ],
          Snack: [
            { name: 'Apple', quantity: 2, calories: 25 },
            { name: 'Egg', quantity: 1, calories: 25 }
          ]
        }
      },
      Wednesday: {
        Breakfast: [
          { name: 'Apple', quantity: 2, calories: 30 },
          { name: 'Egg', quantity: 1, calories: 31 }
        ],
        Lunch: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Dinner: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Snack: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ]
      },
      Thursday: {
        Breakfast: [
          { name: 'Apple', quantity: 2, calories: 32 },
          { name: 'Egg', quantity: 1, calories: 33 }
        ],
        Lunch: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Dinner: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Snack: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ]
      },
      Friday: {
        Breakfast: [
          { name: 'Apple', quantity: 2, calories: 34 },
          { name: 'Egg', quantity: 1, calories: 35 }
        ],
        Lunch: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Dinner: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Snack: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ]
      },
      Saturday: {
        Breakfast: [
          { name: 'Apple', quantity: 2, calories: 36 },
          { name: 'Egg', quantity: 1, calories: 37 }
        ],
        Lunch: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Dinner: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Snack: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ]
      },
      Sunday: {
        Breakfast: [
          { name: 'Apple', quantity: 2, calories: 38 },
          { name: 'Egg', quantity: 1, calories: 39 }
        ],
        Lunch: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Dinner: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ],
        Snack: [
          { name: 'Apple', quantity: 2, calories: 25 },
          { name: 'Egg', quantity: 1, calories: 25 }
        ]
      }
    }
  ];
  const [expandedDays, setExpandedDays] = useState([]);

  function toggleDay(day) {
    if (!expandedDays.includes(day)) {
      setExpandedDays([...expandedDays, day]);
    } else {
      setExpandedDays(expandedDays.filter((item) => item !== day));
    }
  }

  function isDayExpanded(day) {
    return expandedDays.includes(day);
  }

  return (
    <ScrollView style={styles.container}>
      {days.map((dayOfWeek, index) => (
        <View key={dayOfWeek + index}>
          <TouchableOpacity
            style={styles.dayContainer}
            key={dayOfWeek + index}
            onPress={() => toggleDay(dayOfWeek)}>
            <View style={styles.dayHeader}>
              <Text style={styles.dayText}>{dayOfWeek}</Text>
              {isDayExpanded(dayOfWeek) ? (
                <Icon name="chevron-down" size={20} color="black" />
              ) : (
                <Icon name="chevron-right" size={20} color="black" />
              )}
            </View>
          </TouchableOpacity>
          <View style={{ display: isDayExpanded(dayOfWeek) ? 'block' : 'none' }}>
            <View>
              <View style={styles.mealContainer}>
                <Text style={styles.mealText}>Breakfast</Text>
                {mealPlan[0][dayOfWeek].Breakfast.map((meal, indexMeal) => (
                  <View key={meal.name + indexMeal}>
                    <Text>Nom: {meal.name}</Text>
                    <Text>Quantité: {meal.quantity}</Text>
                    <Text>Calories: {meal.calories}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.mealContainer}>
                <Text style={styles.mealText}>Lunch</Text>
                {mealPlan[0][dayOfWeek].Lunch.map((meal, indexMeal) => (
                  <View key={meal.name + indexMeal}>
                    <Text>Nom: {meal.name}</Text>
                    <Text>Quantité: {meal.quantity}</Text>
                    <Text>Calories: {meal.calories}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.mealContainer}>
                <Text style={styles.mealText}>Dinner</Text>
                {mealPlan[0][dayOfWeek].Dinner.map((meal, indexMeal) => (
                  <View key={meal.name + indexMeal}>
                    <Text>Nom: {meal.name}</Text>
                    <Text>Quantité: {meal.quantity}</Text>
                    <Text>Calories: {meal.calories}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.mealContainer}>
                <Text style={styles.mealText}>Snack</Text>
                {mealPlan[0][dayOfWeek].Snack.map((meal, indexMeal) => (
                  <View key={meal.name + indexMeal}>
                    <Text>Nom: {meal.name}</Text>
                    <Text>Quantité: {meal.quantity}</Text>
                    <Text>Calories: {meal.calories}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
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
