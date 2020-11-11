import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MealsNavigation from "./navigation/MealsNavigation";

import openSans from "./assets/fonts/OpenSans-Regular.ttf";
import openSansBold from "./assets/fonts/OpenSans-Bold.ttf";
import { enableScreens } from "react-native-screens";

enableScreens();

async function fetchFonts() {
  await Font.loadAsync({
    "open-sans": openSans,
    "open-sans-bold": openSansBold
  });
}

export default function App() {
  const [fontLoading, setFontLoading] = useState(false);

  if (!fontLoading) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoading(true)}
      />
    );
  }

  return <MealsNavigation />;
}
