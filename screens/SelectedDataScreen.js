import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SelectedDataScreen = ({ route }) => {
  // Access the selectedData from the route parameters
  const selectedData = route.params?.selectedData;

  return (
    <View style={styles.box}>
      {/* Display the individual properties of selectedData */}
      <Text style={styles.font}>
        Hello there, {selectedData.fname} {selectedData.lname}
      </Text>
      <Text style={styles.font}>Your Contact: {selectedData.mobile}</Text>
      <Text style={styles.font}>Branch ID: {selectedData.branchID}</Text>
      <Text style={styles.font}>
        You want to go to {selectedData.interested_university}
      </Text>
      <Text style={styles.font}>
        And the country is {selectedData.interested_country}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "lightblue",
    width: 350,
    padding: 30,
    alignSelf: "center",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 50,
  },
  font: {
    fontSize: 20,
  },
});

export default SelectedDataScreen;
