import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity, } from "react-native";
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

      {/* TOGGLE BUTTON */}
      <TouchableOpacity
        onPress={toggleTheme}
        style={[
          styles.button,
          {
            backgroundColor: theme === "light" ? "#222" : "#ddd",
          },
        ]}
      >
        <Text
          style={{
            color: theme === "light" ? "#fff" : "#000",
            fontWeight: "bold",
          }}
        >
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </Text>
      </TouchableOpacity>
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
  button: {
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
});
