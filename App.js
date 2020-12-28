import React from "react";
import * as firebase from "firebase";

import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import { Button, View } from "react-native";
import navigationTheme from "./app/navigation/navigationTheme";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/navigation/AppNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";

const firebaseConfig = {
  apiKey: "AIzaSyBksZZ9kMWd_Kbwfl1pwIoUFoMXmJSk6s8",
  authDomain: "secondchance-4f4f2.firebaseapp.com",
  projectId: "secondchance-4f4f2",
  storageBucket: "secondchance-4f4f2.appspot.com",
  messagingSenderId: "877024988726",
  appId: "1:877024988726:web:3f135158e9fd871829d297",
  measurementId: "G-FM6PLZ42GM",
};

export default function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        <AuthNavigator />
      </NavigationContainer>
    </>
  );
}
