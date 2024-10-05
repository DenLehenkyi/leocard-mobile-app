import Colors from "@/constants/Colors";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  GestureHandlerRootView,
  TextInput,
} from "react-native-gesture-handler";
import { StackNavigationProp } from "@react-navigation/stack"; // Типізація для Stack навігації
import { RootStackParamList } from "@/types/navigation";
import { MailIcon, LockIcon, PhoneIcon } from "@/assets/svgs/SvgIcons"; // Ваші іконки

// Визначення типу навігації для RegisterScreen
type RegisterScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, "Register">;
};

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.registerContainer}>
        <Text style={styles.header}>Реєстрація</Text>

        {/* Ім'я та прізвище без іконок */}
        <View style={styles.inputContainer}>
          <View style={styles.nameContainer}>
            <View style={styles.inputBlock}>
              <Text style={styles.inputLabel}>Ім'я</Text>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Денис"
                style={styles.nameInput}
              />
            </View>
            <View style={styles.inputBlock}>
              <Text style={styles.inputLabel}>Прізвище</Text>
              <TextInput
                value={surname}
                onChangeText={setSurname}
                placeholder="Легенький"
                style={styles.nameInput}
              />
            </View>
          </View>

          {/* Номер телефону з іконкою */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Номер телефону</Text>
            <View style={styles.iconInputContainer}>
              <View style={styles.iconBlock}>
                <PhoneIcon />
              </View>
              <TextInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholder="+380 97 293 9720"
                style={styles.input}
              />
            </View>
          </View>

          {/* Електронна адреса з іконкою */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Електронна адреса</Text>
            <View style={styles.iconInputContainer}>
              <View style={styles.iconBlock}>
                <MailIcon style={styles.icon} />
              </View>
              <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="example@gmail.com"
                style={styles.input}
              />
            </View>
          </View>

          {/* Пароль з іконкою */}
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>Пароль</Text>
            <View style={styles.iconInputContainer}>
              <View style={styles.iconBlock}>
                <LockIcon style={styles.icon} />
              </View>
              <TextInput
                value={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry
                style={styles.input}
              />
            </View>
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Зареєструватись</Text>
        </TouchableOpacity>

        {/* Відступи для тексту "Увійти" */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Уже маєте обліковий запис?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.registerLink}>Увійти</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  registerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: 370,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 65,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
  },
  inputBlock: {
    width: "48%",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
  },
  nameInput: {
    width: "100%",
    height: 43,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 15,
    paddingHorizontal: 10,
    textAlign: "center",
    backgroundColor: "#FFFFFF",

    // Тінь для iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    // Тінь для Android
    elevation: 4,
  },
  inputWrapper: {
    width: "80%",
    marginBottom: 20,
  },
  iconInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    backgroundColor: "#fff",
  },
  iconBlock: {
    width: 50,
    height: 50,
    backgroundColor: Colors.orange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  icon: {
    width: 24,
    height: 24,
  },
  button: {
    width: 252,
    height: 60,
    backgroundColor: Colors.orange,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  footerContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  registerLink: {
    color: Colors.orange,
    fontSize: 16,
    fontWeight: "bold",
  },
});
