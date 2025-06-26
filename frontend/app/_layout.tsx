import { AntDesign } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Link, Stack, useNavigation } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const GlobalStyles = require("../styles/GlobalStyles");
  const navigator = useNavigation();
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="TaskDetails"
        options={{
          headerShown: true,
          title: "Task Details",
          headerBackTitleVisible: false,
          headerBackground: () => <View style={GlobalStyles.header} />,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigator.goBack()}
            >
              <AntDesign name="left" style={styles.navIcon} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 5,
    backgroundColor: "#f8f8f8",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  navIcon: {
    color: "#666",
    fontSize: 20,
  },
});
