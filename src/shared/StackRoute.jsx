import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/home";
import TodoDetails from "../pages/Todetiles";

const { Navigator, Screen } = createNativeStackNavigator();

const StackRoute = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
      <Screen
        name=""
        options={{
          title: "TODO DETAILS",
        }}
        component={TodoDetails}
      />
    </Navigator>
  );
};

export default StackRoute;
