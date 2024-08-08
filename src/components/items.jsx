import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "../shared/style";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function Item({ dataTask }) {
  const navigation = useNavigation();

  const removeTasks = async (taskId) => {
    try {
      // Remove specific task from AsyncStorage
      let storedTasks = await AsyncStorage.getItem("tasks");
      let tasks = storedTasks ? JSON.parse(storedTasks) : [];
      tasks = tasks.filter((task) => task.id !== taskId); // Remove the task with the given ID
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      console.log("Task has been removed.");
    } catch (error) {
      console.error("Error removing task from AsyncStorage:", error);
    }
  };

  return (
    <View>
      {dataTask?.map((task) => (
        <View style={styles.task} key={task.id}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Todo-details", { task })}
          >
            <Text style={styles.taskText}>{task.title}</Text>
            <Text style={styles.taskText}>{task.description}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => removeTasks(task.id)}>
            <AntDesign name="delete" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="cloud-done-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

export default Item;
