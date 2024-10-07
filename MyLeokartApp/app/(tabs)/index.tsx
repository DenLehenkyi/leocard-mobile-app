import * as React from "react";
import { NavigationContainer } from "@react-navigation/native"; // Навігаційний контейнер
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@/app/(tabs)/auth/LoginScreen"; // Імпорт екрану входу
import RegisterScreen from "@/app/(tabs)/auth/RegisterScreen"; // Імпорт екрану реєстрації
import HomeScreen from "./HomeScreen";

// Створюємо стек навігації
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Приховуємо заголовок
          cardStyle: { backgroundColor: "#fff" }, // Змінюємо фон екрану на білий
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
