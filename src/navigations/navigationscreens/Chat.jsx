import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, Dimensions, StatusBar, TouchableOpacity, Animated, FlatList, Image } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Global_theme from "../../../Global_theme";
import { TabView, SceneMap } from "react-native-tab-view";
import UnreadMessageList from "../../assets/data/UnreadMessageList";

const FirstRoute = ({navigation}) => (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
        <View style={styles.SearchingView}>
            {/* <TextInput keyboardType="web-search" placeholder="Search or start of message" style={styles.InputView} placeholderTextColor={"#929aa4"} />
            <Pressable style={styles.IconsSearch}>
                <Ionicons name="search" size={22} color={Global_theme.App_Theme.PrimaryColor} />
            </Pressable> */}
              <FlatList
                data={UnreadMessageList}
                keyExtractor={(item)=>item.id} 
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.TokenContainer]} activeOpacity={0.7} onPress={() => navigation.navigate("message chats")}> 
                        <View style={[{flexDirection:'row', alignItems:'center', justifyContent:'space-between', gap:10,} ]}>
                            <View style={styles.ImageContainer}> 
                              <Image source={item.img} resizeMode="cover" style={styles.Image} /> 
                            </View>
                              <View>
                                <Text style={styles.NameUser}>{item.name}</Text>
                                <Text style={styles.profileBioName}>{item.bioname}</Text>
                                <Text style={styles.messageUser}>{item.messages}</Text>
                            </View>
                        </View> 
                        <View>  
                            <View>
                              <Text style={styles.messageTime}>{item.messagetime}</Text>
                            </View>
                            <View style={styles.messageNumbersRow}>
                              <Text style={styles.messageNumbers}>10</Text>
                            </View> 
                        </View>
                    </TouchableOpacity>
                )}  
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.BottomMargin}
              />
              <View style={styles.NewMessages}>
                <TouchableOpacity style={styles.NewMessagesTouchableOpacity}>
                <AntDesign name="plus" size={18} color={Global_theme.App_Theme.PrimaryTextWhite} />
                  <Text style={{fontWeight:'500', color:Global_theme.App_Theme.PrimaryTextWhite}}>New Message</Text>
                </TouchableOpacity>
              </View>
        </View>
    </SafeAreaView>
);

const SecondRoute = ({navigation}) => (
    <SafeAreaView style={styles.SafeAreaViewContainer}>
        <View style={styles.SearchingView}>
            <TextInput keyboardType="web-search" placeholder="Search or start of message" style={styles.InputView} placeholderTextColor={"#929aa4"} />
            <Pressable style={styles.IconsSearch}>
                <Ionicons name="search" size={22} color={Global_theme.App_Theme.PrimaryColor} />
            </Pressable>
        </View>
        <Text>Call</Text>
    </SafeAreaView>
);
 

const Chat = (props) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Chats' },
    { key: 'second', title: 'Call' },
  ]);

  const handleIndexChange = (index) => setIndex(index);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              style={styles.tabItem}
              onPress={() => setIndex(i)}
              key={i}
            >
              <Animated.Text style={[styles.titleTabs, { opacity }]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute navigation={props.navigation} />;
      case 'second':
        return <SecondRoute navigation={props.navigation} />;
      default:
        return null;
    }
  };
 
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={handleIndexChange}
      />
    );
};

export default Chat;

const styles = StyleSheet.create({
    SafeAreaViewContainer: {
        backgroundColor: Global_theme.App_Theme.PrimaryTextWhite,
        flex: 1,
    },
    tabBar: {
      flexDirection: 'row', 
    },
    tabItem: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: 12,
      backgroundColor: Global_theme.App_Theme.PrimaryColor, 
    },
    titleTabs:{
      color:Global_theme.App_Theme.PrimaryTextWhite,
      fontSize:18
     },
    SearchingView: {
        marginHorizontal: 10,
        position: "relative",
        // paddingBottom:63
        marginBottom:63
    },
    InputView: {
        backgroundColor: "#fafafa",
        borderWidth: 1,
        borderColor: "#f3f1f1",
        fontWeight: "500",
        paddingLeft: 15,
        paddingRight: 25,
        borderRadius: 50,
        height: 45,
    },
    IconsSearch: {
        position: "absolute",
        top: 0,
        right: 15,
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
    },
    
    TokenContainer: {  
      flexDirection:'row',
      alignItems:'center',  
      justifyContent:'space-between',
      gap:8,
      marginVertical:10,
      width:'100%', 
    }, 
    ImageContainer: {
        padding:2,
        position:'relative',
        borderRadius: 75, 
    },
    Image: {
        width: 55,
        height: 55,
        borderRadius:75
    }, 
    NameUser:{
      fontSize:17,
      color:Global_theme.App_Theme.borderColor,
      fontWeight:'500'
    },
    profileBioName:{
      fontSize:12,
      color:'#7d7d7d',
      fontWeight:'500',
      marginVertical:3
    },
    messageUser:{
      fontSize:12,
      color:"#525860", 
      fontWeight:'500'
    },
    messageTime:{
      color:Global_theme.App_Theme.PrimaryColor,
      textAlign:'right',
      fontWeight:'500',
      marginBottom:5
    },
    messageNumbersRow:{
      backgroundColor:Global_theme.App_Theme.PrimaryColor,
      width:22,
      height:22,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',  
      flexDirection:'row',
      alignSelf:'flex-end'
    },
    messageNumbers:{ 
      color:Global_theme.App_Theme.PrimaryTextWhite,
      fontSize:10,
      fontWeight:'500',
      textAlign:'right',
    },
    BottomMargin:{ 
      // marginTop: 15,
      marginBottom:60
    },
    NewMessages:{position:'absolute',
      right:10,
      bottom:20
    },
    NewMessagesTouchableOpacity:{
      backgroundColor:Global_theme.App_Theme.PrimaryColor,
      padding:10,
      borderRadius:50,
      flexDirection:'row',
      alignItems:'center',
      gap:5
    }
});
