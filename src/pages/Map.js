import React from "react";
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  {
    return (
      <SafeAreaView style={styles.page}>
        <StatusBar />
        <View style={styles.containner}>
          <MapView style={styles.map} />
        </View>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  containner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#000000",
  },
});

export default Map;
