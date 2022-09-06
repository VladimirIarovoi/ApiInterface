import SingleBootcamp from "../Screens/SingleBootcamp";
import * as React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import Bootcamps from "../Screens/Bootcamps";
import {NavigationContainer} from "@react-navigation/native";
import NavigationTabs from "./NavigationTabs";

// const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export function HomeStack () {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRoutName="HomeScreen">
                <Stack.Screen name="NavigationTabs" component={NavigationTabs} options={{headerShown: false}}/>
                <Stack.Screen name="SingleBootcamp" component={SingleBootcamp}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
