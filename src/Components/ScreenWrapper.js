import * as React from "react";
import {StyleSheet, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {HomeStack} from "./NavigationStack";

function ScreenWrapper(){
    return(
                <HomeStack/>
    )
}

const styles = StyleSheet.create({})

export default ScreenWrapper
