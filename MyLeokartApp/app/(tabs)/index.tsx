import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Навігаційний контейнер
import { createStackNavigator } from "@react-navigation/stack"; // Стек навігації
import LoginScreen from "@/app/(tabs)/auth/LoginScreen";
import RegisterScreen from "@/app/(tabs)/auth/RegisterScreen";

export default function Index() {
  return <RegisterScreen></RegisterScreen>;
}
