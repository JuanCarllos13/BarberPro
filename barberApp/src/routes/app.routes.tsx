import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useTheme } from "styled-components/native";

import Feather from "react-native-vector-icons/Feather";
import { Home } from "@screens/home";
import { NewHaircut } from "@screens/newHaircut";
import { Haircut } from "@screens/haircut";
import { Profile } from "@screens/profile";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors } = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.button_cta,
        tabBarInactiveTintColor: colors.text,
        tabBarLabelStyle: { fontSize: 15 },
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 78,
          paddingBottom: 10,
          backgroundColor: colors.background_secondary,
          borderTopWidth: 0,
        },
      }}
    >
      <Screen
        name="Agenda"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="scissors" size={25} color={color} />
          ),
        }}
      />

      <Screen
        name="Cortes"
        component={Haircut}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="clipboard" size={25} color={color} />
          ),
        }}
      />

      <Screen
        name="Minha conta"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="settings" size={25} color={color} />
          ),
        }}
      />

      <Screen
        name="NewHaircut"
        component={NewHaircut}
        options={{ tabBarButton: () => null }}
      />
    </Navigator>
  );
}
