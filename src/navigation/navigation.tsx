import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserList from "../screen/UserList"; // Update path based on your folder structure
import UserPosts from "../screen/UserPosts"; // Update path based on your folder structure

// Define types for your routes
export type RootStackParamList = {
  UserList: undefined; // No parameters for UserList
  UserPosts: { userId: number }; // userId is passed to UserPosts
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer independent={true}>
      {/* Keep NavigationContainer here */}
      <Stack.Navigator initialRouteName="UserList">
        <Stack.Screen
          options={{ headerShown: false }}
          name="UserList"
          component={UserList}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="UserPosts"
          component={UserPosts}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
