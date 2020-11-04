import React, { useState } from "react";
import { Text, View } from "react-native";
import * as screens from "../screens";

import { createStackNavigator } from "react-navigation-stack";
//import { createDrawerNavigator } from "react-navigation-drawer";

const MealsNavigator = createStackNavigator({
  Categories: screens.CategoriesScreen,
  CategoryMeals: screens.CategoryMealScreen,
  MealDetailsScreen: {
    screen: screens.MealDetailScreen,
  },
});

export default createAppContainer(MealsNavigator);
