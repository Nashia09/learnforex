import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import HomeScreen from './screens/HomeScreen';
import Onboarding from './screens/Onboarding';
import Signals from './screens/Signals';
import Details from './screens/Details';
import Settings from './screens/Settings';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { firebase } from './config';
import { useEffect, useState } from 'react';






const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function MyBottomTab() {
  return <BottomTabs.Navigator
    screenOptions={{
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: 'blue',
      tabBarShowLabel: false,
      headerShown: false
    }}
  >
    <BottomTabs.Screen
      name='homescreen'
      component={HomeScreen}
      options={{
        title: 'Home',
        tabBarIcon: (props) => <Ionicons {...props} name='home' size={24} />
      }}
    >

    </BottomTabs.Screen>

    <BottomTabs.Screen
      name='signals'
      component={Signals}
      options={{
        title: 'Signals',
        tabBarIcon: (props) => <Ionicons {...props} name="analytics-outline" size={24} />
      }}
    >

    </BottomTabs.Screen>


    <BottomTabs.Screen
      name='Notification'
      component={Settings}
      options={{
        title: 'Notification',
        tabBarIcon: (props) => <Ionicons {...props} name='notifications' size={24} />
      }}
    >

    </BottomTabs.Screen>
    <BottomTabs.Screen
      name='settings'
      component={Settings}
      options={{
        title: 'Profile',
        tabBarIcon: (props) => <Ionicons {...props} name='person-outline' size={24} />
      }}
    >

    </BottomTabs.Screen>

  </BottomTabs.Navigator>
}
export default function App() {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);


  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subcriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subcriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen
            options={{
              headerShown: false

            }} name='login' component={Login} />

          <Stack.Screen
            name='register'
            component={Register}
            options={{
              headerShown: false

            }}
          />
          <Stack.Screen name='homescreen' options={{ headerShown: false }}
            component={MyBottomTab} />
        </Stack.Navigator>
      </NavigationContainer>

    )
  }


  return (
    <View style={styles.container}>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              headerShown: false

            }} name='onboarding' component={Onboarding} />


          <Stack.Screen
            name='register'
            component={Register}
            options={{
              headerShown: false

            }}
          />
          <Stack.Screen
            options={{
              headerShown: false

            }} name='login' component={Login} />
          <Stack.Screen name='homescreen' options={{ headerShown: false }}
            component={MyBottomTab} />
          <Stack.Screen name='details' component={Details} />

        </Stack.Navigator>
      </NavigationContainer>

    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
