import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "../shared/style";
import Item from "../components/items";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home() {
  const [dataTask, setTask] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const savedTasks = await AsyncStorage.getItem("tasks");
      if (savedTasks) {
        setTask(JSON.parse(savedTasks));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const saveTasks = async (tasks) => {
    try {
      await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    if (title && description) {
      const newTask = {
        id: new Date().getTime(),
        title: title,
        description: description,
        isCompleted: false,
      };

      const updatedTasks = [...dataTask, newTask];
      setTask(updatedTasks);
      saveTasks(updatedTasks);

      setTitle("");
      setDescription("");
    }
  };

  const handlePressTask = (task) => {
    navigation.navigate("Todo-details", { task });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>TODO APP</Text>
      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <TouchableOpacity
        style={[styles.btn, { width: "90%" }]}
        onPress={handleSubmit}
      >
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <View style={styles.containerList}>
        {dataTask.map((task) => (
          <TouchableOpacity key={task.id} onPress={() => handlePressTask(task)}>
            <Item task={task} />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

export default Home;
