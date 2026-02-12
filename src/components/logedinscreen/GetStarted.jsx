import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, StatusBar, Image, } from 'react-native'
import React from 'react'
import Global_theme from '../../../Global_theme'
import getstartImg from '../../assets/img/get-Started.png'
import logo from '../../assets/logo/respondapp-logo.png'


const GetStarted = ({navigation}) => {
  return (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
        <StatusBar barStyle={'dark-content'} backgroundColor={Global_theme.App_Theme.PrimaryTextWhite} />
        <View style={styles.LogoContainers}>
            <View>
                <Image source={logo} resizeMode='contain' style={styles.TolkiLogo} /> 
            </View>
            <View style={styles.getstartContainer}>
                <Image source={getstartImg} resizeMode='contain' style={styles.getstartImages} />
            </View>
        </View>
        <View style={{marginVertical:30}}>
            <Text style={styles.letStartText}>Let's Start the chat!</Text>
            <Text style={styles.letStartTextConnect}>Connect with friends and family securely and private enjoy</Text>
        </View>
        <View >
            <TouchableOpacity style={styles.ButtomGetStart} onPress={() => navigation.navigate('loged in')}>
                <Text style={styles.ButtomGetStartText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default GetStarted

const styles = StyleSheet.create({
    SafeAreaViewContainer:{
        flex:1,
        backgroundColor: Global_theme.App_Theme.PrimaryTextWhite,
        padding:15
    },
    LogoContainers:{
        flex:1,
        marginTop:48
    },
    TolkiLogo:{
        alignSelf:'center',
        width:250,
        height:100
     },
    getstartContainer:{},
    getstartImages:{
        width:300,
        height:380,
        alignSelf:'center'
    },
    letStartText:{
        textAlign:'center',
        color: Global_theme.App_Theme.CardBgColor,
        fontSize:30,
        fontWeight:'700'
    },
    letStartTextConnect:{
        textAlign:'center',
        color: Global_theme.App_Theme.borderColor,
        fontSize:16,
        fontWeight:'400',
        marginTop:20,
        lineHeight:25
    },
    ButtomGetStart:{
        backgroundColor: Global_theme.App_Theme.PrimaryColor,
        width:'100%',
        height:50,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    ButtomGetStartText:{
        color: Global_theme.App_Theme.PrimaryTextWhite,
        fontWeight:'500',
        fontSize:18
    }
})