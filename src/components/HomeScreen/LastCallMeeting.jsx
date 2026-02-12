import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LastCallMeetingData from '../../assets/data/LastCallMeetingData'
import Global_theme from '../../../Global_theme'

const LastCallMeeting = () => {
  return (
    <View style={{flex:1, marginTop:15}}>
      <FlatList
        data={LastCallMeetingData}
        keyExtractor={(item)=>item.id}
        contentContainerStyle={styles.BottomMargin}
        renderItem={({ item }) => (
            <View>
                {/* <TouchableOpacity style={[styles.TokenContainer]} activeOpacity={0.7} onPress={() => navigation.navigate("")}>  */}
                <TouchableOpacity style={[styles.TokenContainer]} activeOpacity={0.7}> 
                    <View style={styles.ImageContainer}>
                        <View>
                            <Image source={item.img} resizeMode="cover" style={styles.Image} /> 
                        </View>
                        <View style={{width:'auto'}}>
                            <Text style={styles.nameText}>{item.name}</Text> 
                            <Text style={styles.meetText}>{item.meetings} <Text style={{fontWeight:'500'}}>{item.meetingstime}</Text></Text> 
                        </View>
                    </View>  
                    <View style={{alignSelf:'flex-end'}}>
                        <Text style={styles.durdurationText}>{item.durduration}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )}  
    />
    </View>
  )
}

export default LastCallMeeting

const styles = StyleSheet.create({
    TokenContainer:{
        marginVertical:3, 
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:'space-between',
        backgroundColor: Global_theme.App_Theme.lightBgWhite,
        padding:10,
        borderRadius:12
    }, 
    BottomMargin:{
        marginBottom:60
    },
    ImageContainer:{
        flexDirection:'row',
        alignItems:'center', 
        gap:10
    },
    Image:{
        width:55,
        height:55,
        borderRadius:75
    },
    nameText:{
        fontSize:16,
        fontWeight:'500',
        color: Global_theme.App_Theme.CardBgColor,
        marginBottom:5
    },
    meetText:{
        fontSize:14,
        fontWeight:'400',
        color: Global_theme.App_Theme.CardBgColor
    },
    durdurationText:{
        fontSize:14,
        fontWeight:'500',
        color: Global_theme.App_Theme.CallBGColor
    },
})