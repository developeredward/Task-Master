import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useState, useEffect } from "react";
import CalendarStrip from "react-native-calendar-strip";
import { AntDesign } from "@expo/vector-icons";

export default function Schedule() {
  const GlobalStyles = require("../../styles/GlobalStyles");
  const days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const defaultDate = new Date();
  const [selected, setSelected] = useState(defaultDate);
  const [dayFormat, setDayFormat] = useState({
    dayName: "",
    date: "",
    month: "",
  });
  useEffect(() => {
    let day = new Date(selected).getDay();
    let month = new Date(selected).getMonth();
    let dayName = days[day];
    let date = new Date(selected).getDate().toString();
    let monthName = months[month];

    setDayFormat({ dayName: dayName, date: date, month: monthName });
  }, [selected]);

  const handleDateSelected = (date: any) => {
    setSelected(date);
    console.log("Selected: ", selected);

    // console.log("Day: ", dayFormat["dayName"]);
  };

  return (
    <View style={GlobalStyles.defaultWrapper}>
      <Text style={styles.subHeading}>Today</Text>
      <Text style={styles.title}>
        {dayFormat["dayName"]}, {dayFormat["date"]} {dayFormat["month"]}
      </Text>
      <CalendarStrip
        scrollable
        calendarHeaderStyle={{ display: "none" }}
        highlightDateNameStyle={{ color: "#ffffff" }}
        highlightDateNumberStyle={{ color: "#ffffff" }}
        highlightDateContainerStyle={{ backgroundColor: "#3687eb" }}
        style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
        onDateSelected={handleDateSelected}
        selectedDate={selected}
      />
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Schedule</Text>
        <TouchableOpacity style={styles.btn}>
          <AntDesign name="plus" size={15} color="#ffffff" />
          <Text style={styles.btnText}>Add New</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <TouchableOpacity style={styles.card} id="2">
          <View>
            <Image
              source={require("../../assets/icons/code.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.cardName}>Web Page Design</Text>
            <Text style={[styles.subHeading, { color: "#96BCF3" }]}>
              10:00 AM - 11:00 AM
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: "#FFF2EA" }]}>
          <View>
            <Image
              source={require("../../assets/icons/office.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.cardName}>Ui Design Presentation</Text>
            <Text style={[styles.subHeading, { color: "#FFAF83" }]}>
              09:30 AM - 10:30 AM
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: "#F8EEFC" }]}>
          <View>
            <Image
              source={require("../../assets/icons/idea.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.cardName}>Group Research</Text>
            <Text style={[styles.subHeading, { color: "#B869DC" }]}>
              01:00 PM - 02:30 PM
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: "#EDFDF3" }]}>
          <View>
            <Image
              source={require("../../assets/icons/wheel.png")}
              style={styles.img}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.cardName}>Color Design</Text>
            <Text style={[styles.subHeading, { color: "#00AA47" }]}>
              12:00 PM - 12:30 PM
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  subHeading: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#888888",
    marginBottom: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3687eb",
    padding: 10,
    height: 40,
    borderRadius: 5,
  },
  btnText: {
    color: "#ffffff",
    marginLeft: 5,
    fontSize: 15,
  },
  content: {
    paddingTop: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#ECF3FD",
    padding: 10,
    height: 100,
    borderRadius: 20,
    marginBottom: 20,
  },
  secCard: {
    backgroundColor: "#3687eb",
  },
  img: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "500",
  },
  details: {
    gap: 10,
  },
});
