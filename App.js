import BottomSheet from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import ToggleSwitch from "toggle-switch-react-native";

import { useMemo, useRef, useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Switch,
  View,
  useWindowDimensions,
  Pressable,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

//inside bottomSheet you can make it unclose by add enablePanDownToClose={true}
//to style handleIndicatorStyle={{backgroundCoor:""""""}}

export default function App() {
  const snap = useMemo(() => ["25%", "30%", "70%"], []);
  const BottomSheetRef = useRef(null);
  const [darkmode, setDarkMode] = useState(false);
  const [device, setDevice] = useState(false);
  const [theme, setTheme] = useState("dim");

  const { width } = useWindowDimensions();

  const handleClose = () => BottomSheetRef.current?.close();

  const handleOpen = () => {
    BottomSheetRef.current?.expand();
  };
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <Button title="open" onPress={handleOpen} />
        <Button title="close" onPress={handleClose} />
        <BottomSheet
          ref={BottomSheetRef}
          index={1}
          snapPoints={snap}
          handleIndicatorStyle={{ backgroundColor: "black" }}
          backgroundStyle={{ borderRadius: 50 }}
        >
          <View style={styles.indes}>
            <Text style={[styles.title, { marginBottom: 20 }]}>Dark mode</Text>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Dark mode</Text>

              <ToggleSwitch
                isOn={darkmode}
                onColor="#2AB84D"
                offColor="#D1D1D1"
                size="medium"
                onToggle={() => setDarkMode(!darkmode)}
              />
            </View>
            <View style={styles.row}>
              <Text style={styles.subtitle}>Use device settings</Text>

              <ToggleSwitch
                isOn={device}
                onColor="#2AB84D"
                offColor="#D1D1D1"
                size="medium"
                onToggle={() => setDevice(!device)}
              />
            </View>
            <Text style={styles.des}>
              Set Dark mode to use the Light or Dark selection located in your
              device Display and Brightness settings.
            </Text>
            <View
              style={{
                width: width,
                borderBottomWidth: StyleSheet.hairlineWidth,
                borderBottomColor: "gray",
                marginVertical: 30,
              }}
            />
            <Text style={[styles.title, { width: "100%" }]}>Theme</Text>
            <Pressable style={styles.row} onPress={() => setTheme("dim")}>
              <Text style={styles.subtitle}>Dim</Text>
              {theme === "dim" ? (
                <AntDesign name="checkcircle" size={24} color={"#4A98E9"} />
              ) : (
                <Entypo name="circle" size={24} color={"#56636F"} />
              )}
            </Pressable>
            <Pressable style={styles.row} onPress={() => setTheme("l")}>
              <Text style={styles.subtitle}>Light Out</Text>
              {theme === "l" ? (
                <AntDesign name="checkcircle" size={24} color={"#4A98E9"} />
              ) : (
                <Entypo name="circle" size={24} color={"#56636F"} />
              )}
            </Pressable>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  indes: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  row: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  title: {
    fontWeight: "900",
    fontSize: 16,
    letterSpacing: 0.5,
  },
  subtitle: {
    color: "#101318",
    fontSize: 14,
    fontWeight: "bold",
  },
  des: {
    color: "#56636F",
    fontSize: 13,
    fontWeight: "normal",
    width: "100%",
  },
});
