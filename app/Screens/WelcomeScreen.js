import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

import colors from "../config/colors";

function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require("../assets/logo-deal.png")}
        />
        <Text style={styles.tagline}>Second Chance</Text>
      </View>

      <View style={styles.buttons}>
        <AppButton title="Login" style={styles.button} />
        <AppButton title="Register" color="secondary" style={styles.button} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    width: 180,
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
  tagline: {
    fontSize: 25,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
