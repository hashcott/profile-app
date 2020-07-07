import React from "react";
import { StyleSheet, View, Text } from "react-native";
const ButtonCustom = ({ style, children }) => {
  return (
    <View style={{ ...style, ...styles.button }}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 999,
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: "space-evenly",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  text: {
    color: "#fff",
  },
});

export default ButtonCustom;
