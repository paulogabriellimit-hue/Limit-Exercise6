import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemeContext } from "../ThemeContext";
import { darkTheme, lightTheme } from "../theme";

export default function Index() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <Text style={[styles.text, { color: currentTheme.text }]}>
        Current Theme: {theme}
      </Text>

      <Button
        title="Toggle Theme"
        onPress={toggleTheme}
        color={currentTheme.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});
