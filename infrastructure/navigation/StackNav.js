import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { Intro } from "../screens/Intro";   
import { Signup } from "../screens/Signup";
import { Login } from "../screens/Login";
import { Profile } from "../screens/Profile";
import { History } from "../screens/History";
import { Service } from "../screens/Service";
import { Services } from "../screens/Services";
import { AddService } from "../screens/AddService";
import { Category } from "../screens/Category";
import { Pay } from "../screens/Pay";
import { ProviderHome } from "../screens/providers/ProviderHome";
import {OrderFullDetails} from "../screens/providers/OrderFullDetails";

const Stack = createNativeStackNavigator();

export function StackNavigation (){
    return (
        <Stack.Navigator initialRouteName="Intro">
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
            <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
            <Stack.Screen name="History" component={History} options={{headerShown:false}}/>
            <Stack.Screen name="Service" component={Service} options={{headerShown:false}}/>
            <Stack.Screen name="Services" component={Services} options={{headerShown:true}}/>
            <Stack.Screen name="AddService" component={AddService} options={{headerShown:true}}/>
            <Stack.Screen name="ProviderHome" component={ProviderHome} options={{headerShown:false}}/>
            <Stack.Screen name="OrderFullDetails" component={OrderFullDetails} options={{headerShown:true}}/>
            <Stack.Screen name="Category" component={Category} options={{headerShown:true}}/>
            <Stack.Screen name="Pay" component={Pay} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}