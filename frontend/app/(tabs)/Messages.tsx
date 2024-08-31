import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Messages() {
  const GlobalStyles = require("../../styles/GlobalStyles");
  return (
    <View style={GlobalStyles.defaultWrapper}>
      <View style={styles.searchContainer}>
        <AntDesign name="search1" size={25} style={styles.input} />
        <TextInput style={styles.input} placeholder="Search..." />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text style={styles.subHeading}>Today</Text>
        <View style={styles.msgContainer}>
          <TouchableOpacity style={styles.card}>
            <Image
              style={styles.avatar}
              source={require("../../assets/images/avatar/1.jpg")}
            />
            <View style={styles.msgContent}>
              <Text style={styles.title}>John Doe</Text>
              <Text style={styles.desc}>Hey, how are you?</Text>
            </View>
            <Text style={styles.desc}>10:00am</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              style={styles.avatar}
              source={require("../../assets/images/avatar/2.jpg")}
            />
            <View style={styles.msgContent}>
              <Text style={styles.title}>Isaac Newton</Text>
              <Text style={styles.desc}>Yo, I let the apple fall</Text>
            </View>
            <Text style={styles.desc}>03:00pm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              style={styles.avatar}
              source={require("../../assets/images/avatar/3.jpg")}
            />

            <View style={styles.msgContent}>
              <Text style={styles.title}>Nikola Tesla</Text>
              <Text style={styles.desc}>Oboi the thing shock me o</Text>
            </View>
            <Text style={styles.desc}>11:15am</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subHeading}>Yesterday</Text>
        <View style={styles.msgContainer}>
          <TouchableOpacity style={styles.card}>
            <Image
              style={styles.avatar}
              source={require("../../assets/images/avatar/4.jpg")}
            />
            <View style={styles.msgContent}>
              <Text style={styles.title}>Elon Musk</Text>
              <Text style={styles.desc}>Abeg i fit see 1k for your side?</Text>
            </View>
            <Text style={styles.desc}>05:20am</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              style={styles.avatar}
              source={require("../../assets/images/avatar/1.jpg")}
            />
            <View style={styles.msgContent}>
              <Text style={styles.title}>Bill Gates</Text>
              <Text style={styles.desc}>Omo! Sapa strong</Text>
            </View>
            <Text style={styles.desc}>06:15am</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <Image
              style={styles.avatar}
              source={require("../../assets/images/avatar/3.jpg")}
            />

            <View style={styles.msgContent}>
              <Text style={styles.title}>Blaise Pascal</Text>
              <Text style={styles.desc}>I don go chop o</Text>
            </View>
            <Text style={styles.desc}>11:15am</Text>
          </TouchableOpacity>
        </View>
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
    fontSize: 16,
    fontWeight: "500",
  },
  input: { color: "#ACADB1", paddingHorizontal: 5, fontSize: 20 },
  searchContainer: {
    backgroundColor: "#F1F7FE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 60,
    padding: 10,
    borderRadius: 10,
  },
  subHeading: {
    fontSize: 20,
    fontWeight: "300",
    color: "#888888",
    marginBottom: 5,
    marginTop: 40,
  },

  msgContainer: {
    // flexDirection: "row",
    alignItems: "center",
  },

  card: {
    flexDirection: "row",
    // justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
    padding: 0,
    height: 80,
    width: "100%",
    marginBottom: 5,
  },
  avatar: {
    height: 60,
    width: 60,
    objectFit: "cover",
    borderRadius: 100,
  },
  msgContent: {
    flex: 1,
    gap: 10,
  },
  desc: {
    color: "#888888",
  },
});
