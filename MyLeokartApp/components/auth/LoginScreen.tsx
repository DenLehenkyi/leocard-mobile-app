import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Colors from "@/constants/Colors";
import { LockIcon, MailIcon, PhoneIcon } from "@/assets/svgs/SvgIcons"; // Ваші іконки

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.registerContainer}>
      <Text style={styles.header}>Реєстрація</Text>

      {/* Поле для введення імені */}
      <View style={styles.inputContainer}>
        <View style={styles.iconBlock}>
          <MailIcon style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Ім'я"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Поле для введення прізвища */}
      <View style={styles.inputContainer}>
        <View style={styles.iconBlock}>
          <MailIcon style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Прізвище"
          value={surname}
          onChangeText={setSurname}
        />
      </View>

      {/* Поле для введення номера телефону */}
      <View style={styles.inputContainer}>
        <View style={styles.iconBlock}>
          <PhoneIcon style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Номер телефону"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      {/* Поле для введення email */}
      <View style={styles.inputContainer}>
        <View style={styles.iconBlock}>
          <MailIcon style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Електронна адреса"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Поле для введення пароля */}
      <View style={styles.inputContainer}>
        <View style={styles.iconBlock}>
          <LockIcon style={styles.icon} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Пароль"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Кнопка для реєстрації */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Зареєструватись</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  registerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
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
    elevation: 2, // Тінь для Android
    shadowColor: "#000", // Тінь для iOS
    shadowOffset: { width: 0, height: 2 }, // Тінь для iOS
    shadowOpacity: 0.4, // Тінь для iOS
    shadowRadius: 5, // Тінь для iOS
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: "#333",
  },
  iconBlock: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: Colors.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
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
});
