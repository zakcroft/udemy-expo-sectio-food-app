import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigation from "./navigation/MealsNavigation";

import openSans from "/assets/fonts/OpenSans-Regular";
import openSansBold from "/assets/fonts/OpenSans-Regular";

const fetchFonts = () => {
  Font.loadAsync({
    "open-sans": openSans,
    "open-sans-bold": openSansBold,
  });
};

export default function App() {
  const [fontLoading, setFontLoading] = useState(false);

  if (!fontLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoading(false)}
      />
    );
  }

  return <MealsNavigation />;
}
