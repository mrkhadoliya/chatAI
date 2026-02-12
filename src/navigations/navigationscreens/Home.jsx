import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, Animated, Easing } from "react-native";
import React, { useState, useRef } from "react";
import Global_theme from "../../../Global_theme";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ActiveUserList from "../../components/HomeScreen/ActiveUserList";
import OngoingCallMeet from "../../components/HomeScreen/OngoingCallMeet";
import UnreadMessage from "../../components/HomeScreen/UnreadMessage";
import CustomTabs from "../../components/customtabs/CustomTabs";

const Home = ({ navigation }) => {
 
    return (
        <ScrollView style={styles.ScrollViewContainer} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={styles.SafeAreaViewContainer}>
                <View style={styles.newMeesagesContainer}>
                    <View>
                        <Text style={styles.TextMainAnency}>Anency Space</Text>
                        <Text style={styles.joinText}>Joined Sep 2024</Text>
                        <View style={{ marginVertical: 10 }}>
                            <TouchableOpacity style={styles.NewChatButton}>
                                <FontAwesome5 name="edit" size={16} color={Global_theme.App_Theme.PrimaryTextWhite} />
                                <Text style={styles.newChatText}>New Chat</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{alignSelf:'flex-end'}}>
                        <Image source={require("../../assets/img/woman-message.jpg")} resizeMode="contain" style={{ width: 150, height: 150, alignSelf:'flex-end' }} />
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={styles.onlineUserContainer}>
                        <View style={{ marginBottom: 10 }}>
                            <Text style={styles.ReMeetingText}>DIRECT MESSAGE</Text>
                        </View>
                        <ActiveUserList navigation={navigation} />
                    </View>
                    <View style={styles.RecentViewContainer}>
                        <View>
                            <Text style={styles.ReMeetingText}>UNREAD MESSAGE</Text>
                        </View>
                        <View>
                            <UnreadMessage navigation={navigation} />
                        </View>
                    </View>
                    <View style={styles.RecentViewContainer}>
                        {/* <View style={{ marginBottom: 20 }}>
                            <CustomTabs/> 
                        </View> */}
                        <View>
                            <Text style={styles.ReMeetingText}>My Meeting</Text>
                        </View>
                        <OngoingCallMeet navigation={navigation} />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    ScrollViewContainer: {
        flex: 1,
        backgroundColor: Global_theme.App_Theme.PrimaryTextWhite,
    },
    SafeAreaViewContainer: {
        padding: 10,
    },
    newMeesagesContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
    },
    TextMainAnency: {
        fontSize: 30,
        fontWeight: "600",
        color: Global_theme.App_Theme.PrimaryColorBox,
        marginBottom: 5,
    },
    joinText: {
        fontSize: 14,
        fontWeight: "400",
        color: Global_theme.App_Theme.PrimaryColorBox,
        paddingVertical: 10,
    },
    NewChatButton: {
        backgroundColor: Global_theme.App_Theme.PrimaryColor,
        paddingHorizontal: 20,
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        gap: 5,
        borderRadius: 100,
    },
    newChatText: {
        color: Global_theme.App_Theme.PrimaryTextWhite,
        fontSize: 14,
        fontWeight: "500",
    },   
    slideIndicator: {
        position: "absolute",
        width: 105,
        height: 44,
        backgroundColor: Global_theme.App_Theme.PrimaryColor,
        borderRadius: 100,
        zIndex: -1,
    },
    onlineUserContainer: {
        marginBottom: 20,
    },
    ReMeetingText: {
        color: Global_theme.App_Theme.CardBgColor,
        fontSize: 17,
        fontWeight: "600",
    },
});
