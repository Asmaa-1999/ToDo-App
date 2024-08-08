import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CompletedTasks from "./src/pages/CompletedTasks";
import StackRoute from "./src/shared/StackRoute";

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Main" component={StackRoute} />
        <Tab.Screen name="Completed Task" component={CompletedTasks} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
