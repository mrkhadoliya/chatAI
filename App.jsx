import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogedIn from './src/components/logedinscreen/LogedIn';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import GetStarted from './src/components/logedinscreen/GetStarted';
import VerifyCode from './src/components/logedinscreen/VerifyCode'; 
import BottomNavigation from './src/navigations/BottomNavigation';
import MessageChat from './src/components/chatsroom/MessageChat';


const Stack = createNativeStackNavigator();
const App = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaProvider> 
      <NavigationContainer>
          <Stack.Navigator
                initialRouteName="Home" 
                screenOptions={{
                    headerShown: false, 
                    headerStyle: { backgroundColor: "#5a57dc" },
                    headerTintColor: "#fff",
                    headerBackTitleVisible: false,
                    headerTitleAlign: "center", 
                    headerShadowVisible: false,
                    headerTitleStyle: { fontSize: 16 }, 
                }}
            >
          <Stack.Screen name="get started"options={{ headerShown: false }}>
              {(props) => <GetStarted {...props} />}
          </Stack.Screen>
          <Stack.Screen name="loged in"options={{ headerShown: false }}>
              {(props) => <LogedIn {...props} />}
          </Stack.Screen>
          <Stack.Screen name="verify code"options={{ headerShown: false }}>
              {(props) => <VerifyCode {...props} />}
          </Stack.Screen>
          <Stack.Screen name="main hom"options={{ headerShown: false }}>
              {(props) => <BottomNavigation {...props} />}
          </Stack.Screen>
          <Stack.Screen name="message chats"options={{ headerShown: false }}>
              {(props) => <MessageChat {...props} />}
          </Stack.Screen>


        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})