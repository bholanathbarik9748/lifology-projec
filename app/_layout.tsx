import React from "react";
import AppNavigator from "@/src/navigation/navigation"; // Import your AppNavigator correctly
import { View } from "react-native";

const _layout = () => {
  // Do NOT wrap this in another NavigationContainer
  return <AppNavigator />;
};

export default _layout;
