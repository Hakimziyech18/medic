import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Intro } from "../screens/Intro";   
import { Signup } from "../screens/Signup";
import { Login } from "../screens/Login";
import { Profile } from "../screens/Profile";
import { Notifications } from "../screens/Notifications";
import { History } from "../screens/History";

const Stack = createNativeStackNavigator();

export function StackNavigation (){
    return (
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
    )
}