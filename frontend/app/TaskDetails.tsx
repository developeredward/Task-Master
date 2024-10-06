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
import { getData } from "@/hooks/useFetch";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { Bar } from "react-native-progress";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  const [data, setData]: any = useState([]);
  // const [state, setState] = useState<{ name: string; value: boolean }[]>([]);
  const GlobalStyles = require("../styles/GlobalStyles");
  const [progress, setProgress] = useState(0);
  const bg = ["#ECF3FD", "#FFF2EA", "#F8EEFC", "#EDFDF3", "#f0f0f0"];
  const color = ["#4D85E4", "#FFAF83", "#B869DC", "#00AA47", "#f0f0f0"];

  useEffect(() => {
    getData(`http://localhost:3000/api/tasks/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        setData(response);

        setProgress(response.progress / 100);
      })
      .then(() => {
        console.log(data);
      });
    console.log("use effect ran");
  }, []);

  const handleState = (value: boolean, name: string) => {
    setData((prevData: any) => {
      return {
        ...prevData,
        tasks: prevData.tasks.map((task: any) => {
          if (task.name === name) {
            task.value = !task.value;
          }

          return task;
        }),
      };
    });

    setTimeout(() => {
      getData(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tasks: data.tasks }),
      }).then((response) => {
        // setData(response);
        console.log(response.tasks);
      });
    }, 1000);
  };

  return (
    <SafeAreaView style={GlobalStyles.defaultWrapper}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <View style={styles.headContainer}>
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
            {data.tasks
              ? data.tasks.map((task: any) => (
                  <TouchableOpacity
                    onPress={() => handleState(task.value, task.name)}
                    key={Math.random()}
                    style={[
                      styles.task,
                      {
                        backgroundColor: `${
                          task.name === "Introduction"
                            ? bg[0]
                            : task.name === "Task Description"
                            ? bg[1]
                            : task.name === "Task Review"
                            ? bg[2]
                            : task.name === "Question and Answer"
                            ? bg[3]
                            : bg[4]
                        }`,
                      },
                    ]}
                  >
                    <View style={styles.logo}>
                      {task.name === "Introduction" ? (
                        <Image
                          source={require(`../assets/icons/explain.png`)}
                          style={styles.image}
                        />
                      ) : task.name === "Task Description" ? (
                        <Image
                          source={require(`../assets/icons/desc.png`)}
                          style={styles.image}
                        />
                      ) : task.name === "Task Review" ? (
                        <Image
                          source={require(`../assets/icons/review.png`)}
                          style={styles.image}
                        />
                      ) : (
                        <Image
                          source={require(`../assets/icons/qa.png`)}
                          style={styles.image}
                        />
                      )}
                    </View>
                    <View style={styles.description}>
                      <Text style={styles.title}>{task.name}</Text>
                      <Text
                        style={[
                          styles.info,
                          {
                            color: `${
                              task.name === "Introduction"
                                ? color[0]
                                : task.name === "Task Description"
                                ? color[1]
                                : task.name === "Task Review"
                                ? color[2]
                                : color[3]
                            }`,
                          },
                        ]}
                      >
                        Mercy Paul
                      </Text>
                    </View>
                    <AntDesign
                      name="checkcircle"
                      size={24}
                      color={`${
                        task.name === "Introduction" && task.value === true
                          ? color[0]
                          : task.name === "Task Description" &&
                            task.value === true
                          ? color[1]
                          : task.name === "Task Review" && task.value === true
                          ? color[2]
                          : task.name === "Question and Answer" &&
                            task.value === true
                          ? color[3]
                          : color[4]
                      }`}
                    />
                  </TouchableOpacity>
                ))
              : null}

            <View style={styles.content}>
              <TouchableOpacity
                onPress={() => console.log("hi")}
                style={styles.btn}
              >
                <AntDesign name="edit" color={"#ffffff"} size={20} />
                <Text style={styles.btnText}>Edit Task</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TaskDetails;

const styles = StyleSheet.create({
  headContainer: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  container: {
    paddingHorizontal: 30,
    height: "100%",
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
    objectFit: "contain",
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
  btnContainer: {
    width: "100%",
    backgroundColor: "#f0f0f0",

    height: 100,
  },
  btn: {
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#3687eb",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderRadius: 10,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
