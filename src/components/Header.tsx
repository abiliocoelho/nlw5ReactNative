import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../styles/colors";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import userImg from "../../assets/abilio.jpeg";
import fonts from "../styles/fonts";
export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Abilio</Text>
      </View>
      <Image source={userImg} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
});