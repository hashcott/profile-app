import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Nav = ({ style }) => {
  return (
    <View style={{ ...style, ...styles.nav }}>
      <AntDesign name="notification" size={24} color="#7783A7" />
      <AntDesign name="pluscircleo" size={24} color="#7783A7" />
      <AntDesign name="user" size={24} color="#7783A7" />
    </View>
  );
};
const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
export default Nav;
