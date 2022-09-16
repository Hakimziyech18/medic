import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Intro } from "../screens/Intro";   
import { Signup } from "../screens/Signup";
import { Login } from "../screens/Login";
import { Service } from "../screens/Service";
import { Services } from "../screens/Services";

const Stack = createNativeStackNavigator();

export function StackNavigation (){
    return (
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Service" component={Service} options={{headerShown:false}}/>
            <Stack.Screen name="Services" component={Services} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}