import { FlatList, Image, StyleSheet,Text,TouchableOpacity, View } from "react-native";
import React from "react";
import ActiveUsers from "../../assets/data/ActiveUsers";
import Global_theme from "../../../Global_theme"; 

const ActiveUserList = ({ navigation }) => {
    return (
        <View>
            <FlatList
                data={ActiveUsers}
                keyExtractor={(item)=>item.id} 
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.TokenContainer]} activeOpacity={0.7} onPress={() => navigation.navigate("")}> 
                        <View style={styles.ImageContainer}>
                            <Image source={item.img} resizeMode="cover" style={styles.Image} />
                            <View style={styles.ActiveType}>
                                <Text style={styles.TypeText}>{item.messagetype}</Text> 
                            </View>
                        </View> 
                        <View>
                            <Text style={{fontWeight:'500', textAlign:'center', color:Global_theme.App_Theme.PrimaryColorBox}}>{item.name}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

export default ActiveUserList;

const styles = StyleSheet.create({
    TokenContainer: { 
        marginHorizontal:5
    }, 
    ImageContainer: {
        padding:2,
        position:'relative',
        borderRadius: 75,
        borderWidth: 1,
        borderColor: Global_theme.App_Theme.PrimaryColor,
        marginHorizontal: 3,
    },
    Image: {
        width: 60,
        height: 60,
        borderRadius:75
    },
    ActiveType:{
        position:'absolute',
        top:0, 
        right:0,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Global_theme.App_Theme.PrimaryColor,
        paddingHorizontal:5,
        paddingVertical:3,
        borderRadius:8,
    }, 
    TypeText:{
        fontSize:11,
        color:Global_theme.App_Theme.PrimaryTextWhite
    }
});
