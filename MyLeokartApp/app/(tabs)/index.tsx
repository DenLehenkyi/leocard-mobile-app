import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Навігаційний контейнер
import { createStackNavigator } from "@react-navigation/stack"; // Стек навігації
import LoginScreen from "@/components/auth/LoginScreen";
import RegisterScreen from "@/components/auth/RegisterScreen";

const Stack = createStackNavigator(); // Створюємо стек навігації

export default function Index() {
  return (
    <NavigationContainer>
      {" "}
      {/* Один NavigationContainer на весь додаток */}
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
