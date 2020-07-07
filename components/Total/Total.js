import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import Item from "./Item";

const Total = ({ style }) => {
  return (
    <View style={{ style, ...styles.total }}>
      <Item title="2501" subtitle="Photos" />
      <Item title="15k" subtitle="Followers" />
      <Item title="315" subtitle="Following" />
    </View>
  );
};

export default Total;
const styles = StyleSheet.create({
  total: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 30,
  },
});
