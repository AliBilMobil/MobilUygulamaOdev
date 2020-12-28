import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as Yup from "yup";
import * as firebase from "firebase";

import Screen from "../components/Screen";

import {
  ErrorMessage,
  AppFormField,
  AppForm,
  SubmitButton,
} from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

state = {
  errorMessage: null,
};

function LoginScreen(props) {
  //const [loginFailed, setLoginFailed] = useState(false);
  const handleSubmit = async ({ email, password }) => {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-deal.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit} //Firebase e burdan gönderilecek
        validationSchema={validationSchema}
      >
        {/* <ErrorMessage error={this.state.errorMessage} visible={loginFailed} /> */}
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
          flex={1}
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          flex={1}
        />
        <SubmitButton title="Login" />
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
