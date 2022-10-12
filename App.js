import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage } from "./HomePage";
import { Browser } from "./Browser";
import { Actions } from "./Actions";
import { MyCamera } from "./MyCamera";
import { ImgPic } from "./ImgPic";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
         <Stack.Screen name="Browser" component={Browser} />
         <Stack.Screen name="Actions" component={Actions} /> 
        <Stack.Screen name="MyCamera" component={MyCamera} />
        <Stack.Screen name="img" component={ImgPic} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
