import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Intro } from "../screens/Intro";   
import { Signup } from "../screens/Signup";
import { Login } from "../screens/Login";
import { Profile } from "../screens/Profile";

const Stack = createNativeStackNavigator();

export function StackNavigation (){
    return (
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}