import React, { useState, useCallback, useMemo } from "react";

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { navigationRef } from "./src/Helpers/RootNavigation";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { LinearGradient } from "expo-linear-gradient";

import merge from "deepmerge";

import {
  Provider as PaperProvider,
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme as PaperDefaultTheme,
} from "react-native-paper";
import { PreferencesContext } from "./src/Helpers/Global";

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isThemeDark, setIsThemeDark] = useState(false);

  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  theme.colors = {
    ...theme.colors,
    primary: "#FE724C",
    primaryBold: "#ff5126",
    secondary: "#1e88e5",
    background: isThemeDark ? "#0B141A" : "#FFFFFF",
  };

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark]
  );

  const globalScreenOptions = {
    headerBackground: () => (
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.primaryBold]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    ),
    headerTitleStyle: { color: "white" },
    headerTintColor: "white",
  };

  return (
    <PreferencesContext.Provider value={preferences}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>
          <NavigationContainer ref={navigationRef} theme={theme}>
            <Stack.Navigator screenOptions={globalScreenOptions}>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
