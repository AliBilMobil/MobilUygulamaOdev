import React from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";

import ViewImageScreen from "./app/Screens/ViewImageScreen";
import WelcomeScreen from "./app/Screens/WelcomeScreen";
import AppText from "./app/components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./app/components/AppButton";
import colors from "./app/config/colors";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/Screens/ListingDetailsScreen";

export default function App() {
  return <ViewImageScreen />;
}
