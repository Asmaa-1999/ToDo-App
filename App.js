import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import "@expo/metro-runtime";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>TODO APP</Text>

      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Description"
      />
      <TouchableOpacity style={[styles.btn, { width: "90%" }]}>
        <Text style={styles.btnText}>Submit</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <View style={[styles.containerBtn, { width: "90%" }]}>
        <TouchableOpacity style={[styles.btn, { backgroundColor: "black" }]}>
          <Text style={[styles.btnText, { color: "white" }]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerList}>
        <View style={styles.task}>
          <Text style={styles.taskText}>Task 1</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Task 2</Text>
        </View>
        <View style={styles.task}>
          <Text style={styles.taskText}>Task 3</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "start",
  },
  btn: {
    alignItems: "center",
    backgroundColor: "blanchedalmond",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText: {
    color: "black",
  },
  containerList: {
    paddingVertical: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 10,
    margin: 10,
    padding: 10,
    width: "90%",
  },
  task: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  taskText: {
    fontSize: 16,
  },
  containerBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginVertical: 10,
  },
  divider: {
    height: 1,
    width: "90%",
    backgroundColor: "#000",
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#aeaeae",
    width: "90%",
    marginVertical: 10,
    height: 50,
    padding: 10,
    borderRadius: 5,
  },
});
