import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-deal.png")}
        />
        <Text>Second Chance</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: "flex-end",
  },
  logoContainer: {
    width: "100%",
    position: "absolute",
    top: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    bottom: 80,
  },
  loginButton: {
    width: 150,
    height: 50,
    backgroundColor: colors.secondary,
  },
  registerButton: {
    width: 150,
    height: 50,
    backgroundColor: colors.secondary,
  },
});

export default WelcomeScreen;
