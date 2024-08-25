import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "expo-router";
import { SetStateAction, useState } from "react";

export default function CreateTask() {
  const GlobalStyles = require("../../styles/GlobalStyles");
  const navigator: any = useNavigation();
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };
  const showMode = (currentMode: SetStateAction<string>) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode("date");
  };
  const showTimepicker = () => {
    showMode("time");
  };
  const [task, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (task == "" || description == "") {
      alert("Please fill in all fields");
      return;
    }
    console.log("Task Name: ", task);
    console.log("Description: ", description);
    console.log("Date: ", date);
    navigator.navigate("index");
  };

  return (
    <View style={GlobalStyles.defaultWrapper}>
      <View style={styles.container}>
        <View style={styles.task}>
          <Text style={styles.title}>Task Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter task name"
            onChangeText={(text) => setTaskName(text)}
          />
        </View>
        <View style={styles.task}>
          <Text style={styles.title}>Description</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={(styles.category, styles.active)}>
              <Text style={(styles.catBtn, styles.activeSelected)}>Design</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.catBtn}>Development</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Text style={styles.catBtn}>Research</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.task}>
          <Text style={styles.title}>Date & Time</Text>
          <TouchableOpacity style={styles.calender} onPress={showDatepicker}>
            {show && mode == "date" && (
              <DateTimePicker
                value={date}
                mode={mode}
                display="spinner"
                is24Hour={true}
                onChange={onChange}
                style={styles.datePicker}
              />
            )}
            {!show && (
              <Text style={styles.calInput}>{date.toDateString()}</Text>
            )}
            <View style={styles.calIcon}>
              <AntDesign name="calendar" size={24} color="#3687eb" />
            </View>
          </TouchableOpacity>
          <View style={styles.timeContainer}>
            <View style={styles.time}>
              <Text style={styles.subTitle}>Start time</Text>
              <TouchableOpacity
                style={styles.calender}
                onPress={showTimepicker}
              >
                {show && mode == "time" && (
                  <DateTimePicker
                    value={date}
                    mode={mode}
                    display="spinner"
                    is24Hour={true}
                    onChange={onChange}
                    style={styles.datePicker}
                  />
                )}
                {!show && (
                  <Text>
                    {date.getHours()}:{date.getMinutes()}{" "}
                    {date.getHours() > 12 ? "PM" : "AM"}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.time}>
              <Text style={styles.subTitle}>End time</Text>
              <TouchableOpacity
                style={styles.calender}
                onPress={showTimepicker}
              >
                {!show && (
                  <Text>
                    {date.getHours()}:{date.getMinutes()}{" "}
                    {date.getHours() > 12 ? "PM" : "AM"}
                  </Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.task}>
            <Text style={styles.title}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter task description"
              onChangeText={(text) => setDescription(text)}
            />
          </View>
          <View style={styles.task}>
            <TouchableOpacity style={styles.actionBtn} onPress={handleSubmit}>
              <Text style={styles.action}>Create Task</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 30,
  },
  task: {
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: "#b2b2b2",
    marginTop: 10,
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
    gap: 20,
  },
  active: {
    backgroundColor: "#3687eb",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    paddingHorizontal: 20,
  },
  activeSelected: {
    color: "#ffffff",
  },

  category: {
    height: 40,
    width: "auto",
    backgroundColor: "#e6edf7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    color: "#ffffff",
  },
  catBtn: {
    color: "#000000",
  },
  calender: {
    height: 60,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e9e9ed",
    borderRadius: 10,
    padding: 10,
  },
  calIcon: {
    position: "absolute",
    right: 20,
  },
  calInput: {
    fontSize: 16,
    color: "#B2B2B2",
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 30,
  },
  time: {
    width: "45%",
  },
  datePicker: {
    height: 100,
  },
  actionBtn: {
    backgroundColor: "#3687eb",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  action: {
    color: "#ffffff",
    fontSize: 18,
  },
});
