import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { ModelProvider } from "./model";
import HomeScreen from "./screens/HomeScreen.js";
import MLinesScreen from "./screens/MLinesScreen.js";
import BLinesScreen from "./screens/BLinesScreen.js";
import MStationsScreen from "./screens/MStationsScreen.js";
import IBLinesScreen from "./screens/IBLinesScreen.js";
import BStationInfoScreen from "./screens/BStationInfoScreen.js";
import LineWarningsScreen from "./screens/LineWarningsScreen.js";
import LineTimetableScreen from "./screens/LineTimetableScreen.js";
import WarningsScreen from "./screens/WarningsScreen.js";
import TicketsScreen from "./screens/TicketsScreen.js";
import BStationsScreen from "./screens/BStationsScreen.js";
import BLineTimetableScreen from "./screens/BLineTimetableScreen.js";
import BLineWarningsScreen from "./screens/BLineWarningsScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    Roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
  });
  if (error) {
    return (
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <Text>Error carregant fonts...</Text>
      </View>
    );
  }
  if (!loaded) {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 250,
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ModelProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inici" component={HomeScreen} />
          <Stack.Screen name="Linies de Metro" component={MLinesScreen} />
          <Stack.Screen name="Linies de Bus" component={BLinesScreen} />
          <Stack.Screen name="iBus" component={IBLinesScreen} />
          <Stack.Screen name="Informació Parada" component={BStationInfoScreen} />
          <Stack.Screen name="Advertències" component={WarningsScreen} />
          <Stack.Screen name="Estacions de la linia" component={MStationsScreen} />
          <Stack.Screen name="Advertències de linia" component={LineWarningsScreen} />
          <Stack.Screen name="Parades de la linia" component={BStationsScreen} />
          <Stack.Screen name="Horaris Metro" component={LineTimetableScreen} />
          <Stack.Screen name="Horaris Bus" component={BLineTimetableScreen} />
          <Stack.Screen name="BLineWarnings" component={BLineWarningsScreen} />
          <Stack.Screen name="Tickets" component={TicketsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ModelProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  icono: {
    height: 20,
    width: 20,
  },
});
