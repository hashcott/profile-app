import React from "react";
import {
  FlatList,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
const imgData = [
  { id: "1", imgSource: require("../../assets/1.jpg") },
  { id: "2", imgSource: require("../../assets/2.jpg") },
  { id: "3", imgSource: require("../../assets/3.jpg") },
  { id: "4", imgSource: require("../../assets/4.jpg") },
];
const _renderItem = ({ item }) => {
  return <Image source={item.imgSource} style={styles.image} />;
};
const WIDTH_MC = Dimensions.get("window").width;
const Gallery = ({ style }) => {
  return (
    <SafeAreaView style={{ ...style, ...styles.gallery }}>
      <FlatList
        numColumns={2}
        data={imgData}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  gallery: {
    marginTop: 20,
    flexDirection: "row",
  },
  image: {
    width: WIDTH_MC / 2 - 30,
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
export default Gallery;
