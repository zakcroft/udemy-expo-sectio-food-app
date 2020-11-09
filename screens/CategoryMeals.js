import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import { CategoriesScreen } from "./CategoriesScreen";

export const CategoryMealScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(c => c.id === catId);

  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to meal details"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetailsScreen"
          });
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationdata => {
  const catId = navigationdata.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(c => c.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
