import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View, Animated, SafeAreaView, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Global_theme from "../../../Global_theme";

const CustomTabs = () => {
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState(true);
    const slideAnim = useRef(new Animated.Value(0)).current;
    const tabWidths = useRef([0, 0, 0]);

    const handlePress = (index, route) => {
        setActiveTab(index);
        Animated.spring(slideAnim, {
            toValue: tabWidths.current.slice(0, index).reduce((a, b) => a + b, 0),
            useNativeDriver: true,
        }).start();
        // navigation.navigate(route);
    };

    const handleLayout = (event, index) => {
        const { width } = event.nativeEvent.layout;
        tabWidths.current[index] = width;
        if (index === activeTab) {
            slideAnim.setValue(tabWidths.current.slice(0, index).reduce((a, b) => a + b, 0));
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.bottomTabContainer}>
                <Animated.View
                    style={[
                        styles.slider,
                        {
                            width: tabWidths.current[activeTab],
                            transform: [{ translateX: slideAnim }],
                        },
                    ]}
                />
                <TouchableOpacity style={styles.tabButton} onLayout={(e) => handleLayout(e, 0)} onPress={() => handlePress(0, "Home1")}>
                    <Text style={activeTab === 0 ? styles.activeText : styles.inactiveText}>On Going</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabButton} onLayout={(e) => handleLayout(e, 1)} onPress={() => handlePress(1, "Wallet")}>
                    <Text style={activeTab === 1 ? styles.activeText : styles.inactiveText}>Join</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.tabButton} onLayout={(e) => handleLayout(e, 2)} onPress={() => handlePress(2, "Main")}>
                    <Text style={activeTab === 2 ? styles.activeText : styles.inactiveText}>Schedule</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity
                style={styles.tabButton}
                onLayout={(e) => handleLayout(e, 3)}
                onPress={() => handlePress(3, 'Profile')}>
                <Text
                    style={activeTab === 3 ? styles.activeText : styles.inactiveText}>
                    Profile
                </Text>
                </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {},
    bottomTabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", 
        paddingVertical: 5,
        borderRadius: 12,
        paddingHorizontal: 10,
        position:'relative'
    },
    slider: {
        position: "absolute",
        height: "100%",
        backgroundColor: Global_theme.App_Theme.PrimaryColor,
        borderRadius: 12,
        zIndex: 0,
        width: "50%",
        left: 10,  
    },
    tabButton: {
        flex: 1, 
        paddingVertical: 10, 
        alignItems:'center', 
    },
    activeText: {
        color: Global_theme.App_Theme.PrimaryTextWhite,
        fontWeight: "bold",
    },
    inactiveText: {
        color: Global_theme.App_Theme.PrimaryColorBox,
        fontWeight: "bold",
    },
});

export default CustomTabs;
