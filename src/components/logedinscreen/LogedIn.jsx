import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import React, {useState } from "react"; 
import Global_theme from "../../../Global_theme"; 
 

const LogedIn = ({navigation}) => {
    
        return (
            <SafeAreaView style={styles.MainContainer}>
                <StatusBar backgroundColor={Global_theme.App_Theme.PrimaryTextWhite} barStyle={"dark-content"} />
                <View style={{ width: '100%',flex:1 }}>
                    <View style={{marginTop:48}}>
                        <Text style={[styles.textWelcome, {textAlign:'left'}]}>Hi! Welcome to Tolk</Text>
                        <Text style={[styles.textCreate, {textAlign:'left'}]}>Create your account</Text>
                    </View>

                    <View style={{marginVertical: 35,}}> 
                        <View>
                            <Text style={[styles.textNumber, {textAlign:'left'}]}>Enter Your Phone Number</Text>
                        </View>
                        <View style={styles.InputNumberContainer}>
                            <Text style={styles.codeCountryText}>+91-</Text>
                            <TextInput placeholder="" keyboardType="number-pad" style={styles.TextInput} placeholderTextColor={Global_theme.App_Theme.CardBgColor} />
                        </View>
                        <View>
                            <Text style={[styles.textNumber, {textAlign:'left'}]}>Securing your personal information is our priority</Text>
                        </View>
                    </View>
                </View> 
                <View style={styles.ButtonContainer}>
                    {/* <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('verify code')}> */}
                    <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('main hom')}>
                        <Text style={styles.NextButtonText}>Next</Text>
                    </TouchableOpacity> 
                </View>
            </SafeAreaView>
        );
     
}

export default LogedIn;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: Global_theme.App_Theme.PrimaryTextWhite,
        alignItems: "center",
        justifyContent: "center",
    },
    textWelcome:{
        fontSize:25,
        fontWeight:'700',
        color: Global_theme.App_Theme.CardBgColor, 
    },
    textCreate:{
        fontSize: 15,
        fontWeight: "500",
    },
    textNumber: { 
        fontSize: 14,
        fontWeight: "500",
        color: Global_theme.App_Theme.CardBgColor,
    },
    InputNumberContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        alignSelf: "center",
        marginVertical: 15,
        backgroundColor: "#fafafa",
        paddingHorizontal: 15,
        borderRadius: 5,
        marginHorizontal: 15,
    },
    TextInput:{
        width:'100%',
        fontWeight:'700',
        fontSize:18,
        color: Global_theme.App_Theme.CardBgColor,
        letterSpacing:2
    },
    codeCountryText: {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontSize: 20,
        fontWeight: "600",
        color: Global_theme.App_Theme.PrimaryColor,
    },  
    ButtonContainer: { 
        width: '100%', 
    },
    NextButton: {
        backgroundColor: Global_theme.App_Theme.PrimaryColor,
        width: '100%',
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    NextButtonText: {
        color: Global_theme.App_Theme.PrimaryTextWhite,
        fontSize: 15,
        fontWeight: "500",
    },
});
