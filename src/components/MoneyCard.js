import React from "react";
import { StyleSheet, View, Text } from "react-native";

const MoneyCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.containner_left}>
        <Text>Rider Info</Text>
        <Text>Name</Text>
        <Text>All Credit</Text>
        <Text>to day income</Text>
      </View>
      <View style={styles.containner_rigth}>
        <Text>Avata</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    height: 100,
    width: "90%",
    backgroundColor: "gray",
    borderRadius: 22,
    flexDirection: "row",
  },
  containner_left: {
    flex: 2,
    flexDirection: "column",
    margin: 10,
    justifyContent: "center",
  },
  containner_rigth: {
    flex: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MoneyCard;
