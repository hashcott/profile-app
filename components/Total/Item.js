import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Item = ({ title, subtitle }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: "black",
    fontSize: 20,
  },
  subtitle: {
    color: "#7783A7",
  },
});
export default Item;
