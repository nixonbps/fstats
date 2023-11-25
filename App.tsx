import "reflect-metadata";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "inversify-react";
import SearchController from "./src/presentation/controller/SearchController";
import SeasonController from "./src/presentation/controller/SeasonController";
import StandingsController from "./src/presentation/controller/StandingsController";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AboutPage from "./src/presentation/controller/AboutContoller";

import container from "./inversify.config";
import { RaceController } from "./src/presentation/controller/RaceController";
import HomeController from "./src/presentation/controller/HomeController";
import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "#f00201",
        tabBarStyle: {
          backgroundColor: "#1e1e1e",
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#f00201",
        },
        tabBarLabelStyle: {
          fontSize: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeController}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" color={color} size={20} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchController}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="search" color={color} size={20} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Season"
        component={SeasonController}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="calendar" color={color} size={20} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Standings"
        component={StandingsController}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="trophy" color={color} size={20} />,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutPage}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="information-circle-outline" color={color} size={20} />,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <Provider container={container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainTabNavigator"
          screenOptions={{
            headerStyle: { backgroundColor: '#1e1e1e' },
            headerTitleAlign: 'center',
            headerTitleStyle: { color: '#707079'}
          }}
        >
          <Stack.Screen name="FStats" component={MainTabNavigator} />
          <Stack.Screen name="Race" component={RaceController} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
