import { useState, useEffect, useCallback } from "react";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Theme } from '../components/Theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Profile } from "./Profile";
import { Notifications } from "./Notifications";
import { History } from "./History";
import { CustomerHome } from "./customers/CustomerHome";
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator(); 

export function Home ({navigation,route}) {
    const [appIsReady, setAppIsReady] = useState(false);

    //access data from a previous screen
    const {userUID} = route.params;

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({Questrial_400Regular});
                await new Promise(resolve => setTimeout(resolve, 1000));
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
}, []);

  const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
      await SplashScreen.hideAsync();
      }
  }, [appIsReady]);

  if (!appIsReady) {
      return null;
  }

  return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
    
          if (route.name === 'CustomerHome') {
            iconName = focused ? 'home-sharp' : 'home-outline' ;
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'md-file-tray-stacked' : 'ios-file-tray-stacked-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
    
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Theme.colors.ui.nursePurple,
        tabBarInactiveTintColor: Theme.colors.ui.darkGreen,
      })}
      >
        <Tab.Screen name='CustomerHome' component={CustomerHome} options={{headerShown:false}}/>
        <Tab.Screen name='Profile' component={Profile} options={{headerShown:false}}/>
        <Tab.Screen name='Notifications' component={Notifications} options={{headerShown:false}}/>
        <Tab.Screen name='History' component={History} options={{headerShown:false}}/>
    </Tab.Navigator>
);
}