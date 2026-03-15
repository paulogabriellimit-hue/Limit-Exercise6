import { Stack } from "expo-router";
import { ThemeProvider } from "../ThemeContext";

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack />
    </ThemeProvider>
  );
}
