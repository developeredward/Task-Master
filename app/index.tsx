import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { useNavigation } from "expo-router";
import Home from "./(tabs)/Home";

const Splash = () => {
  const navigator = useNavigation();
  return (
    <LinearGradient
      colors={["#4D85E4", "#4D85E4", "#ffffff", "#ffffff"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <Image
        source={require("../assets/images/task.png")}
        style={styles.image}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Welcome To Task Master</Text>
        <Text style={styles.desc}>
          An organized workspace for Millions of users around the globe
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigator.navigate("Home")}
      >
        <Text style={styles.text}>Let's Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  header: {
    position: "relative",
    top: 30,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
  },
  title: {
    fontSize: 36,
  },
  desc: {
    top: 5,
    fontSize: 12,
    color: "#ABABAB",
    marginTop: 10,
  },
  button: {
    position: "relative",
    top: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#4D85E4",
    width: 360,
    height: 50,
    borderRadius: 20,
  },
  text: {
    color: "#fff",
  },
  image: {
    position: "relative",
    top: -50,
    width: 400,
    height: 300,
  },
});

export default Splash;
