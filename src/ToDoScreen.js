import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const ToDoScreen = () => {
  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text>TodoScreen</Text>
      <TextInput
        style={{
          marginTop: 60,
          paddingTop: 15,
          borderWidth: 2,
          borderColor: "black",
          borderRadius: 6,
          paddingVertical: 6,
          paddingHorizontal: 16,
        }}
        placeholder="Add a taskS"
      >
        {" "}
      </TextInput>

      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          paddingVertical: 8,
          marginTop: 24,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ToDoScreen;

const styles = StyleSheet.create({});
