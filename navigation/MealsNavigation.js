import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
//import { createDrawerNavigator } from "react-navigation-drawer";
import * as screens from "../screens";
import { Platform } from "react-native";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    CategoriesScreen: screens.CategoriesScreen,
    CategoryMeals: screens.CategoryMealScreen,
    MealDetailsScreen: {
      screen: screens.MealDetailScreen
    }
  },
  {
    //initialRouteName: "MealDetailsScreen",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? Colors.primaryColor : "white"
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  }
);

export default createAppContainer(MealsNavigator);
