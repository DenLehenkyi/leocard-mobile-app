import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

// Визначаємо типи для параметрів навігації (це універсальний стек)
export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

// Універсальний тип для навігації
export type NavigationProp = StackNavigationProp<RootStackParamList>;

// Універсальний тип для маршрутів (якщо потрібно передавати параметри)
export type RouteProps<RouteName extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  RouteName
>;
