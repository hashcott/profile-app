import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const Item = ({ image, width, height }) => {
  return (
    <Image
      style={{ ...styles.image, width: width }}
      source={image}
      resizeMode="cover"
    />
  );
};
const styles = StyleSheet.create({
  image: {
    margin: 15,
    height: 200,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
});
export default Item;
