import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Global_theme from '../../../Global_theme';

const OngoingCallMeet = () => {
  const [starts, setStarts] = useState(false);
  const borderColorAnim = useRef(new Animated.Value(0)).current;

  // Continuous animation on component mount
  useEffect(() => {
    const startBorderAnimation = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(borderColorAnim, {
            toValue: 1,
            duration: 1500, // Change color in 1 second
            useNativeDriver: false,
          }),
          Animated.timing(borderColorAnim, {
            toValue: 0,
            duration: 1500, // Reverse the color in 1 second
            useNativeDriver: false,
          }),
        ])
      ).start();
    };

    startBorderAnimation();
  }, [borderColorAnim]);

  const borderColorInterpolation = borderColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#d3eae5", Global_theme.App_Theme.secondaryColor], // transition from gray to your primary color
  });

  return (
    <View>
      <View style={styles.CardMeerContainer}>
        <View style={[styles.teamCardMeerContainer, { marginBottom: 12 }]}>
          <View style={{ backgroundColor: '#d3eae5', paddingHorizontal: 10, paddingVertical: 8, borderRadius: 50 }}>
            <Text style={styles.meetingdateTime}>September 26th, 2024 - 02:40 PM - 03:40 PM</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.saveMeetIcon} onPress={() => setStarts(!starts)}>
              <AntDesign name={starts === false ? 'staro' : 'star'} size={25} color={Global_theme.App_Theme.PrimaryColor} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginBottom: 15 }}>
          <View style={{ marginBottom: 15 }}>
            <Text style={styles.managmentText}>Management Team</Text>
          </View>
          <View style={styles.teamCardMeerContainer}>
            <View>
              <Text style={styles.tagLineTextMeet}>Starts in 35 mins</Text>
            </View>
            <View>
              <Text style={styles.tagLineTextMeet}>Mark Johnson room's</Text>
            </View>
          </View>
        </View>
        <View style={[styles.teamCardMeerContainer, { backgroundColor: '#d3eae5', padding: 5, borderRadius: 8 }]}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity activeOpacity={0.7} style={[styles.teamMeetings]}>
              <Image source={require('../../assets/img/Rohit-Kumar-Saini-Front-End-Developer.jpg')} resizeMode="cover" style={styles.userMeetingImg} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[styles.teamMeetings, { left: -20 }]}>
              <Image source={require('../../assets/img/ladki1.jpg')} resizeMode="cover" style={styles.userMeetingImg} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[styles.teamMeetings, { left: -35 }]}>
              <Image source={require('../../assets/img/ladki2.jpg')} resizeMode="cover" style={styles.userMeetingImg} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={[styles.teamMeetings, { left: -55 }]}>
              <Text style={{ fontWeight: '900', fontSize: 15 }}>+50</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Animated.View
              style={[
                styles.OngoingCallButton,
                { borderColor: borderColorInterpolation, borderWidth: 3 },
              ]}
            >
              <TouchableOpacity activeOpacity={0.7}>
                <Ionicons name="videocam" size={20} color={Global_theme.App_Theme.PrimaryTextWhite} />
              </TouchableOpacity>
            </Animated.View>
          </View>
        </View>
      </View> 
    </View>
  );
};

export default OngoingCallMeet;

const styles = StyleSheet.create({
  CardMeerContainer: {
    marginBottom: 100,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#d3eae5',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 20,
    backgroundColor: '#e2f5f1',
  },
  teamCardMeerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  meetingdateTime: {
    fontSize: 12,
    fontWeight: '500',
    color: Global_theme.App_Theme.CardBgColor,
  },
  managmentText: {
    fontSize: 18,
    fontWeight: '600',
    color: Global_theme.App_Theme.PrimaryColorBox,
  },
  saveMeetIcon: {
    backgroundColor: Global_theme.App_Theme.PrimaryTextWhite,
    width: 35,
    height: 35,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagLineTextMeet: {
    fontSize: 14,
    fontWeight: '500',
    color: Global_theme.App_Theme.PrimaryColorBox,
  },
  teamMeetings: {
    backgroundColor: Global_theme.App_Theme.PrimaryTextWhite,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 75,
    width: 45,
    height: 45,
  },
  userMeetingImg: {
    width: 40,
    height: 40,
    borderRadius: 75,
  },
  OngoingCallButton: {
    backgroundColor: Global_theme.App_Theme.secondaryColor,
    width: 40,
    height: 40,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
