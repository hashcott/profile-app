import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Icon = ({ style }) => {
  return (
    <View style={{ ...style, ...styles.icon }}>
      <Text>
        <AntDesign name="arrowleft" size={24} color="#7783A7" />
      </Text>
      <Text
        style={{
          fontSize: 32,
          fontWeight: "bold",
          color: "#7783A7",
        }}
      >
        : :
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
export default Icon;
