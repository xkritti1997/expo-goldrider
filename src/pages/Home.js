import React from "react";
import {
  Alert,
  Dimensions,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Inorder from "../components/Inorder";
import MoneyCard from "../components/MoneyCard";

const windownHeight = Dimensions.get("window").height;
const Home = () => {
  const item = [
    ["ORDER : 1", "Discript : Shop 1"],
    ["ORDER : 2", "Discript : Shop 2"],
    ["ORDER : 3", "Discript : Shop 3"],
    ["ORDER : 4", "Discript : Shop 4"],
    ["ORDER : 5", "Discript : Shop 5"],
    ["ORDER : 6", "Discript : Shop 6"],
  ];

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.rider_info}>
        <MoneyCard />
      </View>
      <ScrollView
        style={{
          ...Platform.select({
            default: {
              backgroundColor: "rgba(0, 0, 0, 0.1)",
            },
          }),
        }}
      >
        <View style={styles.container}>
          {item.map((index, key) => {
            console.log(key);
            return <Inorder key={key} name={index[0]} discription={index[1]} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  rider_info: {
    height: Platform.OS === "ios" ? windownHeight * 0.18 : windownHeight * 0.2,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "ios" ? 20 : 20,
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2,

    elevation: 10,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
