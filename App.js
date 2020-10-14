import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import JournalScreen from "./components/screens/JournalScreen";
import SearchScreen from "./components/screens/SearchScreen";
import { StyleSheet, View, StatusBar } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const MainTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};


const Stack = createStackNavigator();

const App = (props) => {
  return (
    <NavigationContainer theme={MainTheme}>
      <StatusBar barStyle="light-content" backgroundColor="#1A2035" />
      <Stack.Navigator>
        <Stack.Screen
          name="Journal"
          options={({ navigation }) => ({
            title: "Journal Electronique",
            headerStyle: {
              backgroundColor: '#1A2035',
              borderBottomWidth:0,
            },
            headerTitleStyle: {
              alignSelf: "center",
              color:"#5F698D"
            },
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <Icon.Button
                  style={{}}
                  name="filter"
                  backgroundColor="#3b5998"
                  onPress={() => navigation.push('Search')}
                >
                  Filtrer
                </Icon.Button>
              </View>
            ),
          })}
          component={JournalScreen}
        />
        <Stack.Screen
          name="Search"
          options={({ navigation }) => ({
            headerTintColor:"#FFF",
            title: "Rechercher",
            headerStyle: {
              backgroundColor: '#1A2035',
              borderBottomWidth:0,
            },
            headerTitleStyle: {
              color:"#5F698D"
            },
          })}
          component={SearchScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    marginLeft: 10,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
