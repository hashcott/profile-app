import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
const Avatar = () => {
  return (
    <View>
      <Image
        style={styles.avatar}
        source={require("../../assets/avatar.jpg")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 999,
  },
});
export default Avatar;
