import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import getData from "@/hooks/useFetch";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Bar } from "react-native-progress";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const [data, setData]: any = useState([]);
  const GlobalStyles = require("../styles/GlobalStyles");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    getData(`http://localhost:3000/api/tasks/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      setData(response);
      setProgress(response.progress / 100);
    });
  }, []);

  const seeResults = () => {
    console.log(data);
  };

  return (
    <SafeAreaView style={GlobalStyles.defaultWrapper}>
      <View style={styles.container}>
        <Text style={GlobalStyles.defaultHeading}>{data.title}</Text>
        <TouchableOpacity style={styles.dateContainer}>
          <View style={styles.iconContainer}>
            <AntDesign name="calendar" size={20} color={"#4e86e4"} />
          </View>

          <Text style={styles.subHeading}>
            {new Date(data.startingTime).toDateString()}, at{" "}
            {new Date(data.startingTime).getHours()}:
            {new Date(data.startingTime).getMinutes()}
            {new Date(data.startingTime).getHours() >= 12 ? " PM" : " AM"}
          </Text>
        </TouchableOpacity>
        <View style={styles.progressContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}
            >
              {data.progress === 0 ? "Not Started" : "In Progress"}
            </Text>
            <Text
              style={{ fontSize: 12, fontWeight: "bold", marginBottom: 10 }}
            >
              {data.progress}%
            </Text>
          </View>

          <Bar
            style={styles.bar}
            progress={progress}
            width={null}
            unfilledColor="#EDF4FC"
            borderColor="transparent"
            borderRadius={10}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.pageHeading}>Overview</Text>
          <Text style={[styles.subHeading, { paddingTop: 10 }]}>
            {data.description}
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.pageHeading}>Members</Text>
          <View style={styles.avatar}>
            <Image
              source={require("../assets/images/avatar/1.jpg")}
              style={styles.AntDesignimage}
            />
            <Image
              source={require("../assets/images/avatar/2.jpg")}
              style={styles.AntDesignimage}
            />
            <Image
              source={require("../assets/images/avatar/3.jpg")}
              style={styles.AntDesignimage}
            />
            <TouchableOpacity style={styles.AntDesignimage}>
              <AntDesign name="plus" style={styles.add} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={[styles.pageHeading, { paddingBottom: 20 }]}>Tasks</Text>
          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            style={{
              backgroundColor: "#ffffff",
              height: "100%",
            }}
          >
            <TouchableOpacity style={styles.task}>
              <View style={styles.logo}>
                <Image
                  source={require(`../assets/icons/explain.png`)}
                  style={styles.image}
                />
              </View>
              <View style={styles.description}>
                <Text style={styles.title}>Introduction</Text>
                <Text style={[styles.info, { color: "#96BCF3" }]}>
                  Mercy Paul
                </Text>
              </View>
              <AntDesign name="checkcircle" size={24} color={"#4D85E4"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.task, { backgroundColor: "#FFF2EA" }]}
            >
              <View style={styles.logo}>
                <Image
                  source={require(`../assets/icons/desc.png`)}
                  style={styles.image}
                />
              </View>
              <View style={styles.description}>
                <Text style={styles.title}>Product Description</Text>
                <Text style={[styles.info, { color: "#FFAF83" }]}>
                  Simon Keith
                </Text>
              </View>
              <AntDesign name="checkcircle" size={24} color={"#4D85E4"} />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  pageHeading: {
    fontSize: 18,
    fontWeight: "600",
  },
  content: {
    paddingTop: 20,
  },
  iconContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 50,
  },
  dateContainer: {
    flexDirection: "row",
    paddingVertical: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
  },
  subHeading: {
    fontSize: 14,
    color: "#666",
  },
  progressContainer: {
    paddingVertical: 20,
  },
  bar: {
    borderRadius: 5,
  },
  add: {
    fontSize: 20,
    color: "#3E7AE1",
  },
  avatar: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  AntDesignimage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    objectFit: "cover",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF4FC",
    marginHorizontal: -6,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    backgroundColor: "#ECF3FD",
    height: 80,
    padding: 20,
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
  image: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EEF4FC",
  },

  description: {
    flex: 1,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 5,
  },
  info: {
    fontWeight: "600",
    color: "#868686",
  },
});
