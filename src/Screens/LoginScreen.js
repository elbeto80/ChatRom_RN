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

import { TextInput, Text, withTheme, Switch } from "react-native-paper";

import { StatusBar } from "expo-status-bar";
import { PreferencesContext } from "../Helpers/Global";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const LoginScreen = (props) => {
  const { navigation, route } = props;
  const { colors } = props.theme;

  const { toggleTheme, isThemeDark } = useContext(PreferencesContext);

  const onToggleSwitch = () => {
    if (!isThemeDark) toggleTheme("dark");
    else toggleTheme("light");
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <ScrollView>
        <View style={styles.viewSwitch}>
          <Switch value={isThemeDark} onValueChange={onToggleSwitch} />
          {isThemeDark ? (
            <Icons
              type="material-community"
              name={"weather-night"}
              size={25}
              style={{ marginBottom: 4 }}
              color={colors.text}
            />
          ) : (
            <Icons
              type="material-community"
              name={"weather-sunny"}
              size={28}
              color={"#ddbc00"}
              style={{ marginBottom: 2 }}
            />
          )}
        </View>

        <StatusBar barStyle="light-content" />
        <TouchableWithoutFeedback>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : ""}
            style={{ paddingHorizontal: "14%" }}
          >
            <View
              style={{
                marginBottom: Platform.OS === "ios" ? 10 : 0,
              }}
            >
              <Image
                source={require("../Assets/icon.png")}
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
              >
                <Text style={styles.buttonText}>Iniciar sesión</Text>
              </TouchableOpacity>

              <Text style={styles.textInfo}>Nuevo en CONNECTITI?</Text>
              <Text style={{ ...styles.textInfo, marginBottom: 20 }}>
                Crea una cuenta{" "}
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

  viewSwitch: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    marginRight: 5,
  },

  logo: {
    width: 192,
    height: 192,
    alignSelf: "center",
    marginTop: 65,
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
    fontSize: 16,
  },

  textLink: {
    fontWeight: "700",
  },
});

export default withTheme(LoginScreen);
