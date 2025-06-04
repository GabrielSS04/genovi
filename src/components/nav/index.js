import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

export default function NavBar() {
  const navigation = useNavigation();
  const route = useRoute();

  const isActive = (routeName) => route.name === routeName;

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={[
          styles.navBarButtonBase,
          {
            backgroundColor: isActive("notify") ? "#FFFFFF" : "#93896D",
            height: isActive("notify") ? 60 : 50,
            width: isActive("notify") ? 60 : 50,
          },
        ]}
        onPress={() => navigation.navigate("notify")}
      >
        <Image
          source={require("../../assets/notifyIcon.png")}
          style={styles.navBarButtonIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navBarButtonBase,
          {
            backgroundColor: isActive("sheeps") ? "#FFFFFF" : "#93896D",
            height: isActive("sheeps") ? 60 : 50,
            width: isActive("sheeps") ? 60 : 50,
          },
        ]}
        onPress={() => navigation.navigate("sheeps")}
      >
        <Image
          source={require("../../assets/sheepIcon.png")}
          style={styles.navBarButtonIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navBarButtonBase,
          {
            backgroundColor: isActive("lotes") ? "#FFFFFF" : "#93896D",
            height: isActive("lotes") ? 60 : 50,
            width: isActive("lotes") ? 60 : 50,
          },
        ]}
        onPress={() => navigation.navigate("lotes")}
      >
        <Image
          source={require("../../assets/groupIcon.png")}
          style={styles.navBarButtonIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    marginTop: 60,
    flexDirection: "row",
    backgroundColor: "#C2B286",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },

  navBarButtonBase: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  navBarButtonIcon: {
    width: 40,
    height: 40,
  },
});
