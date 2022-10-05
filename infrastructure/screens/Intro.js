import { useState, useEffect, useCallback , useContext} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from "@expo-google-fonts/questrial";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCross } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-native-paper';
import { Theme } from '../components/Theme';
import { AppContext } from '../Globals/Appcontext';


export function Intro({navigation}){
    const [appIsReady, setAppIsReady] = useState(false);
    const {userUID,signedIn,userBioData,setUseBioData} = useContext(AppContext)

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
        signedIn ? navigation.navigate('Home') : 
        <SafeAreaView style={styles.areaView}>
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <FontAwesomeIcon icon={faCircleInfo} size={Theme.sizes[4]}/>
                </View>
                <View style={styles.brandContainer}>
                    <FontAwesomeIcon icon={faCross} size={80} color={Theme.colors.brand.brandRed} />
                    <Text style={styles.brandName}>medic</Text>
                    <Text style={styles.brandInfo}>Easier and faster solution for any medical emergencies</Text>
                </View>
                <View style={styles.authContainer}>
                    <Button mode='contained' color={Theme.colors.text.tertiary} contentStyle={{paddingVertical:Theme.sizes[3],marginBottom:Theme.sizes[3]}} onPress={() => navigation.navigate('Signup') }>SIGN UP</Button>
                    <Button mode='outlined' color={Theme.colors.text.tertiary} contentStyle={{paddingVertical:Theme.sizes[3]}} onPress={() => navigation.navigate('Login')} >SIGN IN</Button>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    areaView:{
        flex:1,
    },
    container:{
        flex:1,
        padding:Theme.sizes[3],
        justifyContent:'space-between',
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    brandContainer:{
        alignItems:'center',
    },
    brandName:{
        fontSize:Theme.fonts.fontSizePoint.h2,
        fontFamily:'Questrial_400Regular',
    },
    brandInfo:{
        fontSize:Theme.fonts.fontSizePoint.body,
        textAlign:'center',
    },
});