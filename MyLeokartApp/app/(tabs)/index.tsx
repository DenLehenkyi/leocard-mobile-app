import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Навігаційний контейнер
import { createStackNavigator } from "@react-navigation/stack"; // Стек навігації
import LoginScreen from "@/components/auth/LoginScreen";
import RegisterScreen from "@/components/auth/RegisterScreen";

const Stack = createStackNavigator(); // Ініціалізація стек-навігатора

export default function Index() {
  return (
    // Важливо мати лише один NavigationContainer у додатку
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }} // Залишаємо заголовок прихованим (опціонально)
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
