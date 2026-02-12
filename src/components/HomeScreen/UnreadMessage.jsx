import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react' 
import Global_theme from '../../../Global_theme'
import UnreadMessageList from '../../assets/data/UnreadMessageList'

const UnreadMessage = () => {
  return (
    <View style={{flex:1, marginTop:15}}>
      <FlatList
        data={UnreadMessageList}
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
                            <Text style={[styles.meetText, {color:"#525860",fontWeight:'500'}]}>{item.messages}</Text> 
                        </View>
                    </View>  
                    <View style={{alignSelf:'flex-end'}}>
                        <Text style={styles.durdurationText}>{item.messagetime}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )}  
    />
    </View>
  )
}

export default UnreadMessage

const styles = StyleSheet.create({
    TokenContainer:{
        marginVertical:3, 
        flexDirection:'row',
        alignItems:'center', 
        justifyContent:'space-between', 
        padding:6,
        borderRadius:12
    }, 
    BottomMargin:{
        marginBottom:20
    },
    ImageContainer:{
        flexDirection:'row',
        alignItems:'center', 
        gap:10
    },
    Image:{
        width:50,
        height:50,
        borderRadius:75
    },
    nameText:{
        fontSize:16,
        fontWeight:'500',
        color: Global_theme.App_Theme.CardBgColor,
        marginBottom:4
    },
    meetText:{
        fontSize:12,
        fontWeight:'400',
        color: Global_theme.App_Theme.CardBgColor
    },
    durdurationText:{
        fontSize:13,
        fontWeight:'600',
        color: Global_theme.App_Theme.PrimaryColorBox
    },
})