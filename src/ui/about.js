import React from "react";
import { View, Text } from "react-native";

export const ABOUT_SCREEN = "ABOUT_SCREEN";

export class AboutScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>About this page</Text>
        <Text>Yep. That's it</Text>
      </View>
    );
  }
}
