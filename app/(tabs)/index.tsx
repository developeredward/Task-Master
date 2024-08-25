import { Image } from "expo-image";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  const GlobalStyles = require("../../styles/GlobalStyles");
  return (
    <SafeAreaView style={GlobalStyles.defaultWrapper}>
      <LinearGradient
        colors={["#6DBDE9", "#61A7DE", "#4380CE", "#2F63C0"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.8, y: 1 }}
        style={styles.summary}
      >
        <View style={styles.summaryText}>
          <Text style={styles.text}>Today's progress summary</Text>
          <Text style={(styles.text, styles.desc)}>10 Tasks</Text>
        </View>
        <View style={styles.progressContainer}>
          <View style={styles.avatar}>
            <Image
              source={require("../../assets/images/avatar/1.jpg")}
              style={styles.AntDesignimage}
            />
            <Image
              source={require("../../assets/images/avatar/2.jpg")}
              style={styles.AntDesignimage}
            />
            <Image
              source={require("../../assets/images/avatar/3.jpg")}
              style={styles.AntDesignimage}
            />
            <TouchableOpacity style={styles.AntDesignimage}>
              <AntDesign name="plus" style={styles.add} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.text}>70%</Text>
            <Text style={styles.desc}>Completed</Text>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.head}>Today's Task</Text>
          <TouchableOpacity>
            <Text style={styles.more}>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.content}>
          <TouchableOpacity style={styles.task}>
            <View style={styles.logo}>
              <Image
                source={require("../../assets/icons/wheel.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.description}>
              <Text style={styles.title}>UI Design</Text>
              <Text style={styles.info}>10:00 AM</Text>
            </View>
            <View style={styles.taskIcon}>
              <AntDesign name="right" style={styles.nextIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.task}>
            <View style={styles.logo}>
              <Image
                source={require("../../assets/icons/code.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.description}>
              <Text style={styles.title}>Web Development</Text>
              <Text style={styles.info}>10:00 AM</Text>
            </View>
            <View style={styles.taskIcon}>
              <AntDesign name="right" style={styles.nextIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.task}>
            <View style={styles.logo}>
              <Image
                source={require("../../assets/icons/office.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.description}>
              <Text style={styles.title}>Office Meeting</Text>
              <Text style={styles.info}>10:00 AM</Text>
            </View>
            <View style={styles.taskIcon}>
              <AntDesign name="right" style={styles.nextIcon} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.task}>
            <View style={styles.logo}>
              <Image
                source={require("../../assets/icons/idea.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.description}>
              <Text style={styles.title}>Dashboard Design</Text>
              <Text style={styles.info}>10:00 AM</Text>
            </View>
            <View style={styles.taskIcon}>
              <AntDesign name="right" style={styles.nextIcon} />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  icon: {
    padding: 5,
    height: 40,
    width: 40,
    textAlign: "center",
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  taskIcon: {
    padding: 5,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  nextIcon: {
    color: "#000000",
    fontSize: 12,
  },
  navIcon: {
    color: "#000000",
    fontSize: 20,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF4FC",
    color: "#3E7AE1",
  },
  add: {
    fontSize: 20,
    color: "#3E7AE1",
  },
  summary: {
    marginHorizontal: 30,
    position: "relative",
    marginTop: 20,
    height: 200,
    borderRadius: 20,
  },
  summaryText: {
    padding: 30,
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
  desc: {
    fontSize: 12,
    color: "#fff",
    paddingTop: 5,
  },
  progressContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    top: 30,
    paddingHorizontal: 30,
  },
  container: {
    marginTop: 30,
  },
  avatar: {
    flexDirection: "row",
  },
  AntDesignimage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF4FC",
    color: "#3E7AE1",
    marginHorizontal: -10,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
  head: {
    fontSize: 20,
    fontWeight: "bold",
  },
  more: {
    fontSize: 12,
    color: "#ABABAB",
  },
  content: {
    paddingHorizontal: 30,
    marginTop: 20,
    backgroundColor: "#ffffff",
    height: "100%",
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#ffffff",
    height: 80,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 100,
    marginHorizontal: 1,
  },
  logo: {
    backgroundColor: "#EEF4FC",
    padding: 10,
    borderRadius: 10,
  },
  description: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    color: "#868686",
  },
});
