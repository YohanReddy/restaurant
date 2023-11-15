import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

const YourComponent = ({ navigation }) => {
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [branchID, setBranchID] = useState("");
  const [interested_country, setInterestedCountry] = useState("");
  const [interested_university, setInterestedUniversity] = useState("");
  const [intake, setIntake] = useState("");

  const [selectedData, setSelectedData] = useState(null);

  const sendDataToApi = async () => {
    try {
      const apiUrl =
        "https://two.areksoft.com/recordrr/auth/check.service?oauth_id=dede65fb9142a2a977bbbe709d3961ea202303301037131557503&secret_key=8c514619025105c61d8e3608597eb2234b1e95556c5dba2266f24ea9e62640505531a5834816222280f20d1ef9e95f69&api_service_id=customer.api&api_command=register.api&session_token=d41d8cd98f00b204e9800998ecf8427e8669a641c5103a3d5b0041424bc3ae2520231013112605&login_token=f1b450c03ef7e4593517e550c5c35204&";
      const queryParams = `fname=${fname}&lname=${lname}&email&mobile=${mobile}&vendor_id=1&branch_id=${branchID}&admin_id=131&lead_status=1&source=Facebook&country_code=91&event_id&event_checked_in&transfer_no&alt_country_code&alt_mobile&reference=Dilip&mname=api&interested_country=${interested_country}&campaign_name=Api Camp&sub_campaign_name=API Sub&label=53&interested_university=${interested_university}&current_university=Arizona State University&intake=${intake}`;
      const fullUrl = apiUrl + queryParams;

      const response = await fetch(fullUrl, {
        method: "GET",
      });

      const responseData = await response.json();

      // Check if responseData is an array and not empty
      if (Array.isArray(responseData) && responseData.length > 0) {
        // Extracting selected fields from the first item in the array
        const newSelectedData = {
          fname: responseData[0].fname,
          lname: responseData[0].lname,
          mobile: responseData[0].mobile,
          branchID: responseData[0].branch,
          interested_university: responseData[0].interested_university,
          interested_country: responseData[0].interested_country,
        };

        setSelectedData(newSelectedData);

        console.log("Selected Data:", newSelectedData);
      } else {
        console.error(
          "Invalid response format. Expected an array with at least one item."
        );
      }
    } catch (error) {
      console.error("Error sending data to API:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sample}>Sample Form Test</Text>
      <View style={styles.nameRow}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name"
          value={fname}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          value={lname}
          onChangeText={(text) => setLastName(text)}
        />
      </View>
      <View style={styles.nameRow}>
        <TextInput
          style={styles.BigInput}
          placeholder="Mobile"
          value={mobile}
          onChangeText={(text) => setMobile(text)}
        />
      </View>
      <View style={styles.nameRow}>
        <TextInput
          style={styles.TextInput}
          placeholder="Intake"
          value={intake}
          onChangeText={(text) => setIntake(text)}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Branch ID"
          value={branchID}
          onChangeText={(text) => setBranchID(text)}
        />
      </View>
      <View style={styles.nameRow}>
        <TextInput
          style={styles.BigInput}
          placeholder="Interested Country"
          value={interested_country}
          onChangeText={(text) => setInterestedCountry(text)}
        />
      </View>
      <View style={styles.nameRow}>
        <TextInput
          style={styles.BigInput}
          placeholder="Interested University"
          value={interested_university}
          onChangeText={(text) => setInterestedUniversity(text)}
        />
      </View>

      <Button title="Submit Interest" onPress={sendDataToApi} />
      <Button
        title="Go to Dashboard"
        onPress={() =>
          navigation.navigate("SelectedDataScreen", { selectedData })
        }
      />
    </View>
  );
};

// Styles

const styles = StyleSheet.create({
  container: {
    padding: 60,
    flex: 1,
    gap: 10,
    marginTop: 90,
    alignSelf: "center",
  },
  TextInput: {
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    height: 50,
    padding: 10,
  },
  BigInput: {
    width: 310,
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    padding: 10,
  },
  nameRow: {
    flexDirection: "row",
    gap: 10,
  },
  sample: {
    fontSize: 25,
    alignSelf: "center",
    fontWeight: "bold",
    marginBottom: 15,
  },
});

export default YourComponent;
