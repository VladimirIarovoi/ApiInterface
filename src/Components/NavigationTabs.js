import * as React from "react";
import Bootcamps from "../Screens/Bootcamps";
import Courses from "../Screens/Courses";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";


function NavigationTabs(){

    const Tab = createBottomTabNavigator()

    return(
        <Tab.Navigator >
            <Tab.Screen name="Bootcamps" component={Bootcamps} />
            <Tab.Screen name="Courses" component={Courses} />
        </Tab.Navigator>
    )

}


export default NavigationTabs

