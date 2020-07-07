import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonCustom from "../Helper/Button";
const Cre = () => {
  return (
    <View>
      <Text style={{ fontWeight: "900" }}>Nguyễn Đức Hạnh</Text>
      <Text style={{ marginTop: 5, color: "#7783A7" }}>
        Fullstack Developer
      </Text>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <TouchableOpacity>
          <ButtonCustom style={styles.followBtn}>Follow</ButtonCustom>
        </TouchableOpacity>
        <TouchableOpacity>
          <ButtonCustom style={{ backgroundColor: SEND_MESSAGE_COLOR }}>
            <MaterialCommunityIcons name="send" size={18} color="#fff" />
          </ButtonCustom>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const POLO_BLUE_COLOR = "rgb(51,60,87)";
const SEND_MESSAGE_COLOR = "rgb(120,213,250)";
const FOLLOW_COLOR = "rgb(71,113,246)";

const styles = StyleSheet.create({
  followBtn: {
    backgroundColor: FOLLOW_COLOR,
    fontSize: 24,
    marginRight: 5,
  },
});

export default Cre;
