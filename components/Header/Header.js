import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Avatar from "./Avatar";
import Cre from "./Cre";
const Header = ({ style }) => {
  return (
    <View style={{ ...style, ...styles.header }}>
      <Avatar />
      <Cre />
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
