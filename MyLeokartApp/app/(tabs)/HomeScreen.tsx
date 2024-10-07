import { HomeIcon, ProfileIcon } from "@/assets/svgs/SvgIcons";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <View style={styles.navigation}>
          <Image source={require("../../assets/images/home_icon.png")}></Image>
          <Image
            source={require("../../assets/images/bus_icon.png")}
            style={styles.busIcon}
          ></Image>
          <ProfileIcon></ProfileIcon>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", // Щоб вміст знаходився внизу контейнера
  },
  footer: {
    width: "100%",
    height: 85,
    position: "absolute", // Розміщення абсолютно на екрані
    bottom: 0, // Фіксація внизу
    justifyContent: "center", // Вирівнювання вмісту по центру
    alignItems: "center", // Вирівнювання по центру горизонтально
    backgroundColor: "#FFFFFF", // Фон повинен бути обов'язково

    // Тінь для iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3, // Збільшимо непрозорість
    shadowRadius: 4, // Радіус тіні

    // Тінь для Android
    elevation: 40, // Збільшуємо значення elevation для більш помітної тіні
  },
  icon: {},
  iconBlock: {},
  navigation: {
    gap: 70,
    flexDirection: "row",
  },
  busIcon: {
    width: 47,
    height: 38,
  },
});
