import React from "react";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation() {
  const navigation = useNavigation();

  function handleBegin() {
    navigation.navigate("PlantSelect");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>😄</Text>
        <Text style={styles.title}>Prontinho</Text>
        <Text style={styles.subtitle}>
          Agora vamos começar a cuidar das suas plantinhas com muito cuidado
        </Text>
        <View style={styles.footer}>
          <Button title="Começar" onPress={handleBegin} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: 30,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 22,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    paddingVertical: 10,
    textAlign: "center",
    color: colors.heading,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20,
  },
});
