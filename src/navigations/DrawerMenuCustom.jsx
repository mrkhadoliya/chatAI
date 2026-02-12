import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import User from "../../assets/logo/Only-icon-png.webp";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Global_theme from "../../../Global_theme";
 

const DrawerMenuCustom = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{ 
                    width: "100%",  
                    borderBottomColor: "#f4f4f4",
                    borderBottomWidth: 1,
                    padding:15, 
                }}
            >
                <View style={{flexDirection:'row', alignItems:'center', gap:15, marginBottom:10}}>
                    <View>
                        <Image source={User} style={{ height: 50, width: 50, borderRadius: 65 }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 15, marginBottom: 5, fontWeight: "bold", color: "#111" }}>Isabella Joanna</Text>
                        <Text style={{ fontSize: 13, color: "#111" }}>Product Manager</Text>
                    </View>
                </View>
               <View>
                    <Text style={{fontSize:12}}>Last Login: 08-03-2024 12:45:10 (IPT) </Text>
               </View> 
            </View> 
            <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false} >
                <DrawerItemList {...props} />
            </DrawerContentScrollView>

            <View style={styles.LogoutHomeMenus}>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-around', width:'100%'}}>
                    <Pressable style={{alignItems:'center', justifyContent:'center'}}>
                        <MaterialIcons name="home" size={25} color={Global_theme.App_Theme.secondaryColor} />
                        <Text style={styles.textBottomHeading}>Home</Text>
                    </Pressable>
                    <Pressable style={{alignItems:'center', justifyContent:'center'}}>
                        <AntDesign name="logout" size={20} color={Global_theme.App_Theme.secondaryColor} />
                        <Text style={styles.textBottomHeading}>Logout</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default DrawerMenuCustom;

const styles = StyleSheet.create({
    LogoutHomeMenus:{
        backgroundColor: Global_theme.App_Theme.PrimaryColorBox,
        padding:15,
        height:90,
        alignItems:'center',
        justifyContent:'center', 
    },
    textBottomHeading:{
        fontSize:14,
        fontWeight:'700',
        color: Global_theme.App_Theme.PrimaryTextColor
    }
});
