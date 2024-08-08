import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

function TodoDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const { task } = route.params;

  return (
    <View>
      <Text>TODO DETAILS</Text>
      <Text>{task.title}</Text>
      <Text>{task.description}</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Go Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

export default TodoDetails;
