import React, { useState } from "react";
import { Text, View, TouchableOpacity, StatusBar, Pressable, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import userImage from '../assets/logo/respond-logos-icons.png'
import Home from "./navigationscreens/Home"; 
import Chat from "./navigationscreens/Chat"; 
import Setting from "./navigationscreens/Setting"; 
import Global_theme from "../../Global_theme";
import Meeting from "./navigationscreens/Meeting";
import Map from "./navigationscreens/Map";

 

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
    return (
        <>
            <StatusBar backgroundColor={Global_theme.App_Theme.PrimaryColor} barStyle="light-content" />
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name === "Chat") {
                            iconName = focused ? "chatbox-ellipses" : "chatbox-ellipses-outline";
                        } else if (route.name === "Meeting") {
                            iconName = focused ? "videocam" : "videocam-outline";
                        } else if (route.name === "Map") {
                            iconName = focused ? "location" : "location-outline";
                        } else if (route.name === "Setting") {
                            iconName = focused ? "settings" : "settings-outline";
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    }, 
                    tabBarActiveTintColor: Global_theme.App_Theme.PrimaryColor,
                    tabBarInactiveTintColor: "#999A9E",
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    headerStyle: { backgroundColor: Global_theme.App_Theme.PrimaryTextWhite },
                    headerTintColor: Global_theme.App_Theme.PrimaryTextWhite,
                    tabBarStyle: {
                        activeTinatColor: Global_theme.App_Theme.PrimaryColor,
                        inactiveTintColor: "#999A9E",
                        showLabel: false,
                        backgroundColor: Global_theme.App_Theme.PrimaryTextWhite,
                        height: 60,
                        paddingBottom: 8,
                        borderColor: Global_theme.App_Theme.PrimaryColor,
                        borderWidth:1,
                        marginHorizontal:9,
                        position:'absolute',
                        bottom:13,
                        borderRadius:10, 
                    },
                    headerShown: false,
                    headerShadowVisible: false,
                    headerTitleStyle: { fontSize: 16 },
                })}
            >
                <Tab.Screen
                    name="Home"
                    options={({ navigation }) => ({ 
                        headerShown: true,
                        headerTitle: false,
                        headerTitleAlign: "center",
                        headerStyle: { backgroundColor: Global_theme.App_Theme.PrimaryColor },
                        title: "Home",
                        headerLeft: () => (
                            <View style={{ left: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <Pressable onPress={() =>navigation.toggleDrawer()}>
                                        <Image source={userImage} resizeMode="contain" style={styles.userImage} />
                                    </Pressable>
                                    <View>
                                        <Text style={{ fontSize: 11, color: Global_theme.App_Theme.PrimaryTextWhite }}>Hello</Text>
                                        <Text style={{ fontSize: 16, color: Global_theme.App_Theme.PrimaryTextWhite, fontWeight: "600" }}>Monsrohi!</Text>
                                    </View>
                                </View>
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ right: 10,}}>
                                <Pressable style={styles.cartIcons} onPress={() => navigation.navigate("NotficationS")}>
                                    <Ionicons name="notifications-outline" size={22} color={Global_theme.App_Theme.PrimaryTextWhite} />
                                </Pressable> 
                            </View>
                        ),
                        headerTitleStyle: {display: "none",},
                    })}
                >
                    {(props) => <Home {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Chat"
                    options={({ navigation }) => ({
                        title: "Message",
                        headerShown: true,
                        headerTitleAlign: "left",
                        headerStyle: { backgroundColor: Global_theme.App_Theme.PrimaryColor},
                        headerLeft: () => (
                            <View style={{ left: 10, flexDirection:'row', alignItems:'center', gap:5 }}>
                                <Ionicons name="chatbubbles-sharp" size={30} color={Global_theme.App_Theme.PrimaryTextWhite} />
                                <Text style={{fontSize:20, fontWeight:'500', color:Global_theme.App_Theme.PrimaryTextWhite}}>Direct Message</Text>
                            </View>
                        ),
                        headerRight: () => (
                            <View style={{ right: 10, flexDirection:'row', alignItems:'center', gap:10 }}>
                                <Pressable>
                                    <Ionicons name="search" size={22} color={Global_theme.App_Theme.PrimaryTextWhite} />
                                </Pressable>
                                <Pressable>
                                    <Feather name="camera" size={22} color={Global_theme.App_Theme.PrimaryTextWhite} />
                                </Pressable>
                                <Pressable>
                                    <Feather name="more-vertical" size={22} color={Global_theme.App_Theme.PrimaryTextWhite} />
                                </Pressable>
                            </View>
                        ),
                        headerTitleStyle:{
                            display:'none'
                        }
                    })}
                >
                    {(props) => <Chat {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Meeting"
                    options={({ navigation }) => ({
                        title: "Meeting",
                        headerShown: true,
                        headerTitleAlign: "left",
                        headerStyle: { backgroundColor: Global_theme.App_Theme.PrimaryColor },
                        // tabBarIcon: ({ focused, size }) => (
                        //     <AntDesign  name='contacts' color={ focused ? Global_theme.App_Theme.PrimaryColor : '#999A9E' } size={size} />
                        // ), 
                        headerRight: () => (
                            <View style={{ right: 15 }}>
                                <Pressable>
                                    <Ionicons name="search" size={22} color="#292D32" />
                                </Pressable>
                            </View>
                        ),
                    })}
                >
                    {(props) => <Meeting {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Map"
                    options={({ navigation }) => ({
                        title: "Near By",
                        headerShown: false,
                        headerTitleAlign: "left",
                        headerStyle: { backgroundColor: Global_theme.App_Theme.PrimaryColor },
                        // tabBarIcon: ({ focused, size }) => (
                        //     <AntDesign  name='contacts' color={ focused ? Global_theme.App_Theme.PrimaryColor : '#999A9E' } size={size} />
                        // ), 
                        headerRight: () => (
                            <View style={{ right: 15 }}>
                                <Pressable>
                                    <Ionicons name="search" size={22} color="#292D32" />
                                </Pressable>
                            </View>
                        ),
                    })}
                >
                    {(props) => <Map {...props} />}
                </Tab.Screen>

                <Tab.Screen
                    name="Setting"
                    options={({ navigation }) => ({
                        title: "Setting", 
                        headerTintColor: "#fff",
                        headerShown: true,
                        headerStyle: { backgroundColor: Global_theme.App_Theme.PrimaryColor },
                        headerTitleStyle: {
                            display: "none",
                        },
                        headerLeft: () => (
                            <View style={{ left: 10 }}>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                    <View>
                                        <Text style={{ fontSize: 16, color: "#fff", fontWeight: "600" }}>Andrew Ainsley</Text>
                                        <Text style={{ fontSize: 11, color: "#fff" }}>aainsley@yourdomain.com</Text>
                                    </View>
                                </View>
                            </View>
                        ),
                        headerRight: () => (
                            <TouchableOpacity style={{ right: 15 }}>
                                <Ionicons name="notifications" style={{ fontSize: 25 }} color="#fff" />
                            </TouchableOpacity>
                        ),
                    })}
                >
                    {(props) => <Setting {...props} />}
                </Tab.Screen>
            </Tab.Navigator>
        </>
    );
};

export default BottomNavigation;

const styles = StyleSheet.create({ 
    userImage: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    // cartIcons: { 
    //     width: 35,
    //     height: 35,
    //     borderRadius: 8,
    //     shadowColor: "#000",
    //     shadowOffset: {
    //         width: 0,
    //         height: 5,
    //     },
    //     shadowOpacity: 0.36,
    //     shadowRadius: 6.68,
    //     elevation: 11,
    //     alignItems: "center",
    //     justifyContent: "center",
    //     backgroundColor: "#fff",
    // },
});
