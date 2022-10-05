import { useState, useEffect, useCallback } from "react";
import { View, Text, SafeAreaView, StyleSheet,Image, ScrollView, } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from "@expo-google-fonts/questrial";
import { FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faCross} from "@fortawesome/free-solid-svg-icons";
import { faFileMedical } from "@fortawesome/free-solid-svg-icons";
import { Theme } from "../../components/Theme";
import { Button } from "react-native-paper";


export function OrderFullDetails({navigation}) {
    const [appIsReady, setAppIsReady] = useState(false);

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
  
  return(
    <SafeAreaView style={styles.areaView}>
        <View style ={styles.container}>
            <ScrollView>
                <View style={styles.headProfile}>
                    <Image source={{uri:'https://images.pexels.com/photos/6477297/pexels-photo-6477297.jpeg?'}} style={styles.profileImage}/>
                        <View style={styles.subHeadProfile}>
                            <Text style={styles.profileName}>Zohreh Michaels <FontAwesomeIcon icon={faCross} size={Theme.sizes[4]} color={Theme.colors.brand.brandRed}/></Text>
                        </View>
                </View>

                <View style={styles.customerDetailes}>
                    <Text style={styles.detailedInfo}>Medical Information<FontAwesomeIcon icon={faFileMedical} size={Theme.sizes[4]} color={Theme.colors.brand.brandRed}/></Text>
                    <Text style={styles.detailedText}>Age: 23</Text>
                    <Text style={styles.detailedText}>Gender: Female</Text>
                    <Text style={styles.detailedText}>Blood Typle: O Positive</Text>
                    <Text style={styles.detailedText}>Medical History: Yes</Text>
                    <Text style={styles.detailedText}>Date of Birth: December 18th, 1999</Text>
                    <Text style={styles.detailedText}>Address: Adeleke Julian at Apo District, Abuja</Text>
                </View>

                <View style={styles.customerDetailes}>
                    <Text style={styles.customerOder}>medic Order <FontAwesomeIcon icon={faCross} size={Theme.sizes[4]} color={Theme.colors.brand.brandRed}/></Text>
                    <Text style={styles.customerRequest}>Multivitamin for Hair Growth</Text>
                </View>

                <Button mode='contained' style={styles.recived}>Order Received</Button>
            </ScrollView>
        </View>
    </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
    areaView:{
        flex:1,
    },
    container:{
        flex:1,
        padding:Theme.sizes[3],
    },
    profileImage:{
      width:60,
      height:60,
      borderRadius:100
    },
    headProfile:{
        flexDirection:'row'
    },
    profileName:{
        fontSize:Theme.fonts.fontSize.h5,
        fontWeight:'bold',
        color:Theme.colors.ui.nurseDullGreen
    },
    profileGender:{
        fontWeight:'bold',
        color:Theme.colors.ui.nurseDullGreen,
        fontSize:Theme.fonts.fontSize.h6,
    },
    subHeadProfile:{
        justifyContent:'center',
        marginLeft:Theme.sizes[3]
    },
    customerDetailes:{
        backgroundColor:Theme.colors.ui.nurseGreen,
        marginTop:9,
        padding:Theme.sizes[3],
        borderRadius:7
    },
    detailedText:{
        fontWeight:'bold',

    },
    detailedInfo:{
        marginBottom:10,
        fontSize:Theme.fonts.fontSize.h5,
    },
    customerOder:{
        fontSize:Theme.fonts.fontSize.h5,
        marginBottom:8
    },
    customerRequest:{
        fontWeight:'bold'
    },
    recived:{
        marginTop:Theme.sizes[3],
        padding:10
    }
})