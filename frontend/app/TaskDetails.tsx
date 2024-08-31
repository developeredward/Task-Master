import { View, Text, SafeAreaView } from "react-native";
import React from "react";

const TaskDetails = () => {
  const GlobalStyles = require("../styles/GlobalStyles");
  return (
    <SafeAreaView style={GlobalStyles.defaultWrapper}>
      <View>
        <Text>Task Detailss</Text>
      </View>
    </SafeAreaView>
  );
};

export default TaskDetails;
