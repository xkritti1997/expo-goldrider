import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.page}>
      <Text>Hello Profile Page</Text>
      <Button
        title="hello"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "login" }],
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Profile;
