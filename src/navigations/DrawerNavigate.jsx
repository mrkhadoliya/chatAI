import {Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createDrawerNavigator } from "@react-navigation/drawer";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";
import Global_theme from "../../../Global_theme";

import BottomNavigation from "./BottomNavigation";
import Profile from "./DrawerMenu/Profile";
import Setting from "./DrawerMenu/Setting";
import Timer from "./DrawerMenu/Timer";
import Categories from "./DrawerMenu/Categories";
import Customize from "./DrawerMenu/Customize";
import Backups from "./DrawerMenu/Backups";
import GetPremium from "./DrawerMenu/GetPremium";
import RateApp from "./DrawerMenu/RateApp";
import Contact from "./DrawerMenu/Contact";
import DrawerMenuCustom from "./DrawerMenuCustom";

const Drawer = createDrawerNavigator();
const DrawerNavigate = () => {
    return (
        <Drawer.Navigator initialRouteName="Home"
            drawerContent={(props) => <DrawerMenuCustom {...props} />}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#fff",
                    width: 250,
                },
                headerStyle: { backgroundColor: Global_theme.App_Theme.PrimaryColorBox },
                headerTintColor: "#fff",
                headerTitleStyle: {
                    fontWeight: "bold",
                },
                drawerLabelStyle: {
                    color: "#111",
                },
            }}
        >
            <Drawer.Screen
                name="bottom tabs"
                options={({ navigation }) => ({
                    headerShown: false,
                    headerTitle: false,
                    headerTitleAlign: "center",
                    title: "Home",
                    drawerIcon: () => <MaterialIcons name="home" size={20} color="#808080" />, 
                })}
                component={BottomNavigation}
            />
            <Drawer.Screen
                name="Profile"
                options={{
                    headerShown:true,
                    drawerLabel: "Profile",
                    title: "Profile",
                    drawerIcon: () => <MaterialIcons name="supervised-user-circle" size={20} color="#808080" />,
                }}
                component={Profile}
            />
            <Drawer.Screen
                name="Timer"
                options={{
                    drawerLabel: "Timer",
                    title: "Timer",
                    drawerIcon: () => <MaterialIcons name="timer" size={20} color="#808080" />,
                }}
                component={Timer}
            />
            <Drawer.Screen
                name="Categories"
                options={{
                    drawerLabel: "Categories",
                    title: "Categories",
                    drawerIcon: () => <MaterialIcons name="category" size={20} color="#808080" />,
                }}
                component={Categories}
            />
            <Drawer.Screen
                name="Customize"
                options={{
                    drawerLabel: "Customize",
                    title: "Customize",
                    drawerIcon: () => <MaterialIcons name="dashboard-customize" size={20} color="#808080" />,
                }}
                component={Customize}
            />
            <Drawer.Screen
                name="Setting"
                options={{
                    drawerLabel: "Setting",
                    title: "Setting",
                    drawerIcon: () => <SimpleLineIcons name="settings" size={20} color="#808080" />,
                }}
                component={Setting}
            />

            <Drawer.Screen
                name="Backups"
                options={{
                    drawerLabel: "Backups",
                    title: "Backups",
                    drawerIcon: () => <MaterialIcons name="backup" size={20} color="#808080" />,
                }}
                component={Backups}
            />

            <Drawer.Screen
                name="Get Premium"
                options={{
                    drawerLabel: "Get Premuim",
                    title: "Get Premium",
                    drawerIcon: () => <MaterialCommunityIcons name="certificate" size={20} color="#808080" />,
                }}
                component={GetPremium}
            />
            <Drawer.Screen
                name="Rate this App"
                options={{
                    drawerLabel: "Rate this App",
                    title: "Rate this App",
                    drawerIcon: () => <FontAwesome name="star" size={20} color="#808080" />,
                }}
                component={RateApp}
            />

            <Drawer.Screen
                name="Contact"
                options={{
                    drawerLabel: "Contact",
                    title: "Contact",
                    drawerIcon: () => <MaterialCommunityIcons name="message-alert-outline" size={20} color="#808080" />,
                }}
                component={Contact}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigate;

const styles = StyleSheet.create({});
