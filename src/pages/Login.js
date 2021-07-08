import React from "react";
import {
  Alert,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 0.5,
            alignItems: "flex-start",
            justifyContent: "flex-end",
            width: "85%",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", lineHeight: 30 }}>
            LOGIN
          </Text>
          <Text>GOLD RIDER</Text>
        </View>
        <View
          style={{
            flex: 1.25,
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "85%",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              width: "90%",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Username
          </Text>
          <TextInput
            style={{
              width: "100%",
              paddingLeft: 20,
              height: 44,
              borderRadius: 22,
              backgroundColor: "#FFFFFF",
            }}
            placeholder="ID Or Email"
          />
          <Text
            style={{
              textAlign: "left",
              width: "90%",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            Password
          </Text>
          <TextInput
            style={{
              width: "100%",
              paddingLeft: 20,
              height: 44,
              borderRadius: 22,
              backgroundColor: "#FFFFFF",
            }}
            placeholder="Password"
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={{
              width: "90%",
            }}
            onPress={() => {
              Alert.alert("Go to Forgot Password");
            }}
          >
            <Text
              style={{
                textAlign: "right",
                width: "100%",
                textDecorationLine: "underline",
              }}
            >
              Forgot Password ??
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            width: "85%",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "tomato",
              width: "100%",
              height: 44,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 22,
            }}
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: "main",
                  },
                ],
              });
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              LOGIN
            </Text>
          </TouchableOpacity>
          <Text>OR</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Don't have account ? </Text>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Goto Regisret");
              }}
            >
              <Text
                style={{
                  color: "tomato",
                  textDecorationLine: "underline",
                }}
              >
                Registor
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
