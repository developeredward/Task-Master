import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

import { Link, Tabs, useNavigation } from "expo-router";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import Colors from "@/constants/Colors";

export default function TabLayout() {
  const navigator = useNavigation();
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false }} backBehavior="history">
      <Tabs.Screen
        name="Home"
        options={{
          headerTitle: "Homepage",
          headerBackground: () => <View style={styles.header} />,
          headerLeft: () => (
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="appstore-o" style={styles.navIcon} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="bells" style={styles.navIcon} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Schedule"
        options={{
          headerTitle: "Upcoming Tasks",
          headerBackground: () => <View style={styles.header} />,
          headerLeft: () => (
            <TouchableOpacity style={styles.btnContainer}>
              <AntDesign
                name="appstore-o"
                style={styles.navIcon}
                color="#a1a1a1"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <AntDesign name="calendar" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="CreateTask"
        options={{
          headerTitle: "Create New Task",
          headerBackground: () => <View style={styles.header} />,
          headerLeft: () => (
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigator.goBack()}
            >
              <AntDesign name="left" style={styles.navIcon} color="#a1a1a1" />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <View
              style={{
                borderRadius: 50,
                backgroundColor: "#4D85E4",
                padding: 10,
                position: "relative",
                top: -25,
              }}
            >
              <AntDesign name="plus" size={30} color="#ffffff" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="Messages"
        options={{
          headerTitle: "Inbox",
          headerBackground: () => <View style={styles.header} />,
          headerLeft: () => (
            <TouchableOpacity style={styles.btnContainer}>
              <AntDesign
                name="appstore-o"
                style={styles.navIcon}
                color="#a1a1a1"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.icon}>
              <AntDesign name="filter" style={styles.navIcon} />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <AntDesign name="message1" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          headerTitle: "Profile",
          headerBackground: () => <View style={styles.header} />,
          headerLeft: () => (
            <TouchableOpacity style={styles.btnContainer}>
              <AntDesign
                name="appstore-o"
                style={styles.navIcon}
                color="#a1a1a1"
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fdfdfd",
  },
  btnContainer: {
    marginLeft: 30,
    borderRadius: 5,
    backgroundColor: "#f8f8f8",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  navIcon: {
    color: "#000000",
    fontSize: 20,
  },
  icon: {
    marginLeft: 30,
    marginRight: 30,
    padding: 5,
    height: 40,
    width: 40,
    textAlign: "center",
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  header: {
    height: 100,
    backgroundColor: "#fdfdfd",
  },
});
