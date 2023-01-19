import React from "react";

import {
  View,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  StyleSheet,
  Button,
} from "react-native";

import { TextInput, Text, withTheme, Avatar } from "react-native-paper";

import { StatusBar } from "expo-status-bar";

import Icons from "react-native-vector-icons/MaterialCommunityIcons";

const RegisterScreen = (props) => {
  const { navigation, route } = props;
  const { colors } = props.theme;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedFile(result.uri);
    }
  };

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      <ScrollView>
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
              <StatusBar style="light" />
              <Text style={styles.title}>
                Crear una cuenta{" "}
                <Text
                  style={{ ...styles.titleName, color: colors.primaryBold }}
                >
                  CONNECTITI
                </Text>
              </Text>

              <View>
                <View style={styles.viewImage}>
                  <TouchableOpacity style={styles.buttonCamera}>
                    <Icons
                      type="material-community"
                      name={"camera"}
                      size={25}
                      color={"#878787"}
                    />
                  </TouchableOpacity>

                  <Avatar.Image
                    size={170}
                    source={{
                      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu51XqkERN4KCU2HF526phPswwmMY9qjexFA&usqp.jpg",
                    }}
                  />
                </View>

                <TextInput
                  placeholder="Full Name"
                  textContentType="name"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Email"
                  textContentType="emailAddress"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Password"
                  textContentType="password"
                  secureTextEntry
                  style={styles.input}
                />
              </View>

              <TouchableOpacity
                style={{ ...styles.button, backgroundColor: colors.primary }}
              >
                <Text style={styles.buttonText}>Registrarme</Text>
              </TouchableOpacity>
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

  title: {
    fontSize: 20,
    marginTop: 55,
    marginBottom: 30,
  },

  titleName: {
    fontWeight: "700",
  },

  viewImage: {
    alignSelf: "center",
    marginBottom: 25,
  },

  buttonCamera: {
    backgroundColor: "#dddddd",
    position: "absolute",
    padding: 9,
    borderRadius: 20,
    right: 5,
    bottom: 0,
    zIndex: 1,
  },

  input: {
    backgroundColor: "#FFF",
    marginBottom: 10,
  },

  button: {
    alignItems: "center",
    padding: 10,
    borderRadius: 7,
    marginVertical: 20,
  },

  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});

export default withTheme(RegisterScreen);
