import { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from "@expo-google-fonts/questrial";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCross } from '@fortawesome/free-solid-svg-icons';
import {Button, TextInput} from 'react-native-paper';
import { Theme } from '../components/Theme';


export function Signup({navigation}){
    const [appIsReady, setAppIsReady] = useState(false);
    const [accountType, setAccountType] = useState('individual');

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
        <SafeAreaView style={styles.areaView}>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.brandBlock}>
                        <FontAwesomeIcon icon={faCross} size={Theme.sizes[4]} color={Theme.colors.brand.brandRed}/>
                        <Text style={styles.brandName}>medic</Text>
                    </View>

                    <Text style={styles.headText}>Get Started</Text>

                    <View style={styles.btnGroup}>
                        <Button mode='contained' color={Theme.colors.ui.nursePurple} style={{paddingVertical:Theme.sizes[3],marginRight:Theme.sizes[2]}}
                        onPress={() => {
                            setAccountType('individual')
                        }}> Individual</Button>

                        <Button mode='contained' color={Theme.colors.ui.nurseGray} style={{paddingVertical:Theme.sizes[3]}} 
                        onPress={() => {
                            setAccountType('provider')
                        }}> Service Provider</Button>
                    </View>

                    <Text style={styles.subHeading}>
                        {accountType == 'individual' ? 'Create an individual account' : 'Create a provider account' }
                    </Text>

                    <TextInput label='First name' mode='outlined' outlineColor={Theme.colors.bg.tertiary} activeOutlineColor={Theme.colors.bg.quartenary}/>
                    <TextInput label='Last name' mode='outlined' outlineColor={Theme.colors.bg.tertiary} activeOutlineColor={Theme.colors.bg.quartenary}/>
                    <TextInput label='Phone number' mode='outlined' outlineColor={Theme.colors.bg.tertiary} activeOutlineColor={Theme.colors.bg.quartenary} keyboardType='phone-pad'/>
                    <TextInput label='Email address' mode='outlined' outlineColor={Theme.colors.bg.tertiary} activeOutlineColor={Theme.colors.bg.quartenary} keyboardType='email-address'/>
                    <TextInput label='Create password' mode='outlined' outlineColor={Theme.colors.bg.tertiary} activeOutlineColor={Theme.colors.bg.quartenary} secureTextEntry={true}/>
                    <TextInput label='Confirm password' mode='outlined' outlineColor={Theme.colors.bg.tertiary} activeOutlineColor={Theme.colors.bg.quartenary} secureTextEntry={true}/>

                    {/*only show up if accoun type is provider*/}
                    { accountType == 'provider' ?
                    <TextInput label='Describe your work' mode='outlined' outlineColor={Theme.colors.bg.tertiary} activeOutlineColor={Theme.colors.bg.quartenary} multiline={true}/>
                    : null
                    }

                    <Button mode='contained' color={accountType == 'provider' ? Theme.colors.ui.nurseGray : Theme.colors.ui.nursePurple } style={{paddingVertical:Theme.sizes[3], marginTop:Theme.sizes[2]}}> Create account</Button>

                    {/* navigating to login screen*/}
                    <View style={styles.textInline}>
                        <Text style={styles.ctaText}>Already have an account? </Text>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}>
                            <Text style={[styles.ctaText,{color:Theme.colors.ui.nurseGreen}]}>Go to login</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
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
    },
    brandBlock:{
        flexDirection:'row',
        alignItems:'center',
    },
    brandName:{
        fontSize:Theme.fonts.fontSizePoint.h4,
        fontFamily:'Questrial_400Regular',
    },
    headText:{
        fontSize:Theme.fonts.fontSizePoint.h3,
        marginVertical:Theme.sizes[4],
    },
    btnGroup:{
        flexDirection:'row',
    },
    subHeading:{
        fontSize:Theme.fonts.fontSizePoint.h5,
        marginVertical:Theme.sizes[3],
    },
    textInline:{
        flexDirection:'row',
        marginVertical:Theme.sizes[2],
    },
    ctaText:{
        fontSize:Theme.fonts.fontSize.body
    },
});