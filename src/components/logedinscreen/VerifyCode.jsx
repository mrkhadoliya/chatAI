import { SafeAreaView, StatusBar, StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import React, { Component } from "react";
import bgChatImage from "../../assets/img/chat-wallpaper.png";
import Global_theme from "../../../Global_theme";
import FontAwesome6 from "react-native-vector-icons/FontAwesome6";

const { width, height } = Dimensions.get("window");

class VerifyCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passCode: ["", "", "", "",],
        };
    }

    _onPressNumber = (num) => {
        let tempCode = this.state.passCode;
        for (var i = 0; i < tempCode.length; i++) {
            if (tempCode[i] == "") {
                tempCode[i] = num;
                break;
            } else {
                continue;
            }
        }
        this.setState({ passCode: tempCode });
    };

    _onPressCancel = () => {
        let tempCode = this.state.passCode;
        for (var i = tempCode.length - 1; i >= 0; i--) {
            if (tempCode[i] != "") {
                tempCode[i] = "";
                break;
            } else {
                continue;
            }
        }
        this.setState({ passCode: tempCode });
    };

    render() {
        let numbersB = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }, { id: "7" }, { id: "8" }, { id: "9" }, { id: "0" }];

        return (
            <SafeAreaView style={styles.MainContainer}>
                <StatusBar backgroundColor={Global_theme.App_Theme.PrimaryTextWhite} barStyle={"dark-content"} />
                <View style={{ width: width, paddingHorizontal: 15 }}>
                    <View>
                        <Text style={styles.textNumber}>Verify Phone</Text>
                        <Text style={[styles.textNumber, {fontSize:14,marginTop:5}]}>Code has been send to +91-9874563210</Text>
                    </View>
                    <View style={styles.InputNumberContainer}> 
                        {this.state.passCode.map((p) => {
                            let style = p != "" ? styles.code1 : styles.code2;
                            return (
                                <View style={style}>
                                    <Text style={styles.textPassCode}></Text>
                                </View>
                            );
                        })}
                    </View>
                    <View>
                        <Text style={[styles.textNumber, {fontSize:15}]}>Didn't get OTP Code?</Text>
                        <TouchableOpacity style={{marginTop:8}}>
                            <Text style={[styles.textNumber, {fontSize:14, color: Global_theme.App_Theme.PrimaryColor}]}>Resend Code?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <View style={styles.NumbersContainer}>
                        {numbersB.map((num) => {
                            return (
                                <TouchableOpacity style={styles.numbers} key={num.id} onPress={() => this._onPressNumber(num.id)}>
                                    <Text style={styles.TextNumber}>{num.id}</Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
                <View style={styles.ButtonContainer}>
                    <TouchableOpacity style={styles.NextButton}>
                        <Text style={styles.NextButtonText}>Verify</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => this._onPressCancel()}>
                        <FontAwesome6 name="delete-left" size={30} color={Global_theme.App_Theme.PrimaryColor} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

export default VerifyCode;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingVertical: 15,
        backgroundColor: Global_theme.App_Theme.PrimaryTextWhite,
        alignItems: "center",
        justifyContent: "center",
    },
    textNumber: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "500",
        color: Global_theme.App_Theme.CardBgColor,
    },
    InputNumberContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10, 
        marginVertical: 15,
        padding: 15,
        borderRadius: 5,
        marginHorizontal: 15,
        justifyContent:'center'
    }, 
    textPassCode: { 
        width:25,
        height:25,
        borderRadius:75, 
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        alignSelf:'center',
        padding:5, 
    },
    code1: {  
        fontWeight: "500",
        width: 30,
        height: 30, 
        backgroundColor: Global_theme.App_Theme.PrimaryColor,
        borderRadius:75, 
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        alignSelf:'center',
    },
    code2: {
        width: 30,
        height: 30, 
        borderWidth:1,
        borderColor:Global_theme.App_Theme.PrimaryColor,
        borderRadius:75, 
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center',
        alignSelf:'center'
    },
    NumbersContainer: {
        marginTop: 58,
        width: 282,
        height: 348,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 20,
    },
    numbers: {
        width: 75,
        height: 75,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ebebeb",
    },
    TextNumber: {
        fontSize: 36,
        textAlign: "center",
        fontWeight: "500",
        color: Global_theme.App_Theme.CardBgColor,
    },
    ButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width,
        paddingHorizontal: 20,
    },
    NextButton: {
        backgroundColor: Global_theme.App_Theme.PrimaryColor,
        width: 70,
        height: 40,
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
