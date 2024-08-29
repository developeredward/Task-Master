import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  AntDesign,
  MaterialIcons,
  FontAwesome,
  Ionicons,
} from "@expo/vector-icons";

export default function Profile() {
  const GlobalStyles = require("../../styles/GlobalStyles");
  return (
    <View style={[GlobalStyles.defaultWrapper]}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.image}
            source={require("../../assets/images/avatar/1.jpg")}
          />
          <TouchableOpacity style={styles.editIconContainer}>
            <AntDesign name="edit" style={styles.editIcon} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Isaac Newton</Text>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <TouchableOpacity style={styles.content}>
          <View
            style={[
              styles.icon,
              {
                backgroundColor: "#0DC2C2",
                padding: 2,

                borderRadius: 10,
              },
            ]}
          >
            <MaterialIcons
              name="edit"
              size={25}
              style={[
                styles.icon,
                {
                  color: "#ffffff",
                },
              ]}
            />
          </View>

          <Text style={styles.info}>Edit Profile</Text>
          <AntDesign size={20} name="right" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.content}>
          <MaterialIcons
            name="lock"
            size={25}
            style={[styles.icon, { color: "#1DA54E" }]}
          />
          <Text style={styles.info}>Change Password</Text>
          <AntDesign size={20} name="right" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.content}>
          <MaterialIcons
            name="location-on"
            size={30}
            style={[styles.icon, { color: "#3493EA" }]}
          />
          <Text style={styles.info}>Turn on Location</Text>
          <MaterialIcons
            name="toggle-off"
            size={40}
            selectable={true}
            style={[styles.icon, { color: "#BEC1CE" }]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.content}>
          <FontAwesome
            size={25}
            name="send"
            style={[styles.icon, { color: "#FFBB32" }]}
          />
          <Text style={styles.info}>Email Notifications</Text>
          <MaterialIcons
            name="toggle-on"
            size={40}
            selectable={true}
            style={[styles.icon, { color: "#3687EB" }]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.content}>
          <Ionicons
            name="settings-sharp"
            size={25}
            style={[styles.icon, { color: "#FF5D01" }]}
          />
          <Text style={styles.info}>Settings</Text>
          <AntDesign size={20} name="right" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.content}>
          <Ionicons
            name="log-out"
            size={25}
            style={[styles.icon, { color: "#FF5D01" }]}
          />
          <Text style={styles.info}>Logout</Text>
          <AntDesign size={20} name="right" style={styles.icon} />
        </TouchableOpacity>
      </ScrollView>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  avatarContainer: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 1500,
    width: 200,
    height: 200,
    // backgroundColor: "blue",
    padding: 5,
    borderColor: "#1A74CB",
  },
  editIconContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: 50,
    height: 50,
    backgroundColor: "#ECF3FD",
    borderRadius: 100,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  editIcon: {
    fontSize: 20,
    color: "#1A74CB",
  },
  image: {
    width: "95%",
    objectFit: "cover",
    height: "95%",
    borderWidth: 2,
    borderColor: "#C3C3C3",
    borderRadius: 1500,
  },

  title: {
    fontSize: 25,
    fontWeight: "400",
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    // padding: 10,
    height: 60,
  },
  info: {
    flex: 1,
    marginLeft: 20,
    fontSize: 20,
  },
  icon: {
    // fontSize: 30,
    color: "#a1a1a1",
    borderRadius: 10,
  },
});
