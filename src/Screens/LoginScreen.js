import React, { useContext } from "react";

import {
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";

import { TextInput, Text, withTheme } from "react-native-paper";

import { StatusBar } from "expo-status-bar";
import { PreferencesContext } from "../Helpers/Global";

const LoginScreen = (props) => {
  const { navigation, route } = props;
  const { colors } = props.theme;

  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <ScrollView style={{ paddingHorizontal: "14%" }}>
        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
          >
            <View
              style={{
                marginBottom: Platform.OS === "ios" ? 10 : 0,
              }}
            >
              <Image
                source={require("../Assets/icon5.png")}
                style={styles.logo}
              />

              <View>
                <TextInput
                  placeholder="Correo"
                  textContentType="emailAddress"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Contraseña"
                  secureTextEntry
                  textContentType="password"
                  style={styles.input}
                />
              </View>

              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: colors.primary }}
                onPress={() => {
                  if (!isThemeDark) toggleTheme("dark");
                  else toggleTheme("light");
                }}
              >
                <Text style={styles.buttonText}>Iniciar sesión</Text>
              </TouchableOpacity>

              <Text style={styles.textInfo}>
                Nuevo usuario? Crea una cuenta{" "}
                <Text
                  onPress={() => navigation.navigate("Register")}
                  style={{
                    ...styles.textLink,
                    color: colors.secondary,
                  }}
                >
                  Aquí
                </Text>
              </Text>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    width: 192,
    height: 192,
    alignSelf: "center",
    marginTop: 75,
    marginBottom: 25,
  },

  input: {
    backgroundColor: "#FFF",
    marginBottom: 10,
  },

  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 7,
    marginVertical: 30,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },

  textInfo: {
    textAlign: "center",
    marginBottom: 22,
    fontSize: 16,
  },

  textLink: {
    fontWeight: "700",
  },
});

export default withTheme(LoginScreen);
