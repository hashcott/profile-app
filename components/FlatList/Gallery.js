import React from "react";
import {
  FlatList,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import Item from "../FlatList/Item";
const imgData = [
  { id: "1", imgSource: require("../../assets/1.jpg") },
  { id: "2", imgSource: require("../../assets/2.jpg") },
  { id: "3", imgSource: require("../../assets/3.jpg") },
  { id: "4", imgSource: require("../../assets/4.jpg") },
];
const WIDTH_MC = Dimensions.get("window").width;
const Gallery = ({ style }) => {
  return (
    <ScrollView style={{ ...style, ...styles.gallery }}>
      <FlatList
        numColumns={2}
        data={imgData}
        renderItem={({ item }) => {
          return (
            <Item
              width={WIDTH_MC / 2 - 30}
              height={Image.resolveAssetSource(item.imgSource).height}
              image={item.imgSource}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  gallery: {
    marginTop: 20,
    flexDirection: "row",
  },
});
export default Gallery;
