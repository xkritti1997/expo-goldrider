import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";

const Inorder = (props) => {
  const [name, setName] = useState(props.name);
  const [discription, setDiscription] = useState(props.discription);

  useEffect(() => {}, []);

  return (
    <View style={styles.card}>
      <View style={styles.info}>
        <View
          style={{
            flex: 3,
            marginLeft: 10,
            justifyContent: "space-evenly",
            height: "90%",
          }}
        >
          <Text>{name}</Text>
          <Text>{discription}</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Alert.alert("" + name + discription);
            }}
            style={{
              borderColor: "tomato",
              borderWidth: 2,
              borderRadius: 20,
              height: "40%",
              width: "90%",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Text>Accept</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: 10,
    shadowColor: "#000",
  },
  info: {
    borderRadius: 22,
    backgroundColor: "#FFFFFF",
    width: "90%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
});

export default Inorder;
