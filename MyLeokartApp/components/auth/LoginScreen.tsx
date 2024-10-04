import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { LockIcon, MailIcon } from "@/assets/svgs/SvgIcons";
import Svg, { Rect } from "react-native-svg";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/leokart_logo.png")}
          style={styles.logoImg}
        />
      </View>

      <View style={styles.loginContainer}>
        {/* Заголовок */}
        <Text style={styles.header}>Увійти</Text>

        {/* Поле для введення email */}
        <View style={styles.inputContainer}>
          <View style={styles.iconBlock}>
            <MailIcon style={styles.emailIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Електронна адреса"
            placeholderTextColor="#ccc"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>

        {/* Поле для введення пароля */}
        <View style={styles.inputContainer}>
          <View style={styles.iconBlock}>
            <LockIcon style={styles.lockIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Пароль"
            placeholderTextColor="#ccc"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        {/* Кнопка входу */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Увійти</Text>
        </TouchableOpacity>

        {/* Силка на реєстрацію */}
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Немає облікового запису?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.registerLink}>Зареєструватись</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  logoContainer: {
    marginTop: 60,

    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    width: 248,
    height: 101,
    resizeMode: "contain",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    marginBottom: 25,
    width: 281,
    height: 50,
    elevation: 2, // тінь для Android
    shadowColor: "#000", // тінь для iOS
    shadowOffset: { width: 0, height: 2 }, // тінь для iOS
    shadowOpacity: 0.4, // тінь для iOS
    shadowRadius: 5, // тінь для iOS
  },

  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  button: {
    backgroundColor: Colors.orange,
    padding: 7,
    borderRadius: 15,
    width: 137,
    height: 41,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  registerLink: {
    marginTop: 15,
    color: Colors.orange,
    fontWeight: "bold",
  },
  iconBlock: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",

    width: 60.63,
    height: 50,
    borderRadius: 15,
    backgroundColor: Colors.orange,
  },
  emailIcon: {
    marginTop: 16,
    width: 24,
    height: 24,
  },
  lockIcon: {
    marginTop: 5,
    width: 26,
    height: 32,
  },
});
