import { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Image, ImageBackground } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { Questrial_400Regular } from "@expo-google-fonts/questrial";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCross } from '@fortawesome/free-solid-svg-icons';
import {Button} from 'react-native-paper';
import { Theme } from '../components/Theme';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Profile({navigation}){
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

    return (
        <SafeAreaView style={styles.areaView}>
            <View style={styles.container}>
                <ScrollView>
                    <ImageBackground source={require('../../assets/images/map.jpg')}
                        resizeMode='cover'
                        style={styles.headerBg}
                        >
                        <View style={styles.semicontainer}>
                        <View style={styles.docProfile}>
                            <Image
                                source={require('../../assets/images/doctor.jpg')}
                                resizeMode='cover'
                                borderRadius={10}
                                style={styles.docImage}
                            />
                            <View style={styles.docDetails}>
                                <View style={styles.docName}>
                                    <Text style={styles.bigName}>Dr. Vegapunk Rogers</Text>
                                    <Text style={styles.smallName}>Endochrinologist</Text>
                                </View>
                                <View style={styles.docContacts}>
                                    <TouchableOpacity style={styles.docTabs}>
                                            <FontAwesomeIcon 
                                            icon={faPhone}
                                            size={35}
                                            color={Theme.colors.ui.nursePurple}
                                            />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.docTabs}>
                                            <FontAwesomeIcon 
                                            icon={faMessage}
                                            size={35}
                                            color={Theme.colors.ui.nursePurple}
                                            />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.docTabs}>
                                            <FontAwesomeIcon 
                                            icon={faEnvelope}
                                            size={35}
                                            color={Theme.colors.ui.nursePurple}
                                            />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.docExperience}>
                            <View style={styles.docBorders}>
                                <Text style={styles.docBordersText}>Patients</Text>
                                <Text style={styles.docReviews}>1000+</Text>
                            </View>
                            <View style={styles.docBorders}>
                                <Text style={styles.docBordersText}>Experiences</Text>
                                <Text style={styles.docReviews}>4 Years</Text>
                            </View>
                            <View style={styles.docBorders1}>
                                <Text style={styles.docBordersText}>Reviews</Text>
                                <Text style={styles.docReviews}>5.0</Text>
                            </View>
                        </View>
                        <Text style={styles.docBio}>Description</Text>
                        <Text style={styles.docBioWrite}>He was born in Nigeria where he grew up until the age of 17, after which he lived in Hamiltan Ontaio. He obtained his Bachelors of Science in Life Sciences at Queen's University in <Text style={{color:'blue'}}>More...</Text></Text>
                        <View>
                            <Text style={styles.docBio}>His Specialties</Text>
                            <View style={styles.docSpecialty}>
                                <TouchableOpacity><View style={styles.docSpecialtywrap}><Text style={styles.docSpecColor}>Endochrinology</Text></View></TouchableOpacity>
                                <TouchableOpacity><View style={styles.docSpecialtywrap}><Text style={styles.docSpecColor}>Neurology</Text></View></TouchableOpacity>
                            </View>
                            <View style={styles.docSpecialty}>
                                <TouchableOpacity><View style={styles.docSpecialtywrap}><Text style={styles.docSpecColor}>Surgery</Text></View></TouchableOpacity>
                                <TouchableOpacity><View style={styles.docSpecialtywrap}><Text style={styles.docSpecColor}>Internal Medicine</Text></View></TouchableOpacity>
                            </View>
                            <View style={styles.docSpecialty}>
                                <TouchableOpacity><View style={styles.docSpecialtywrap}><Text style={styles.docSpecColor}>Urology</Text></View></TouchableOpacity>
                                <TouchableOpacity><View style={styles.docSpecialtywrap}><Text style={styles.docSpecColor}>Pathology</Text></View></TouchableOpacity>
                            </View>
                        </View>
                    
                        <Button mode='contained' color={Theme.colors.ui.nursePurple } onPress={() => navigation.navigate('Intro')} style={{paddingVertical:Theme.sizes[2], marginTop:Theme.sizes[2], borderRadius:10}}>Request for an appointment</Button>

                    </View>
                    </ImageBackground>
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
    },
    headerBg:{
        height:190
    },
    semicontainer:{
        flex:1,
        paddingHorizontal:Theme.sizes[3],
        paddingTop:Theme.sizes[5],
    },
    docProfile:{
        flexDirection:'row',
    },
    docImage:{
        height:200,
        width:120
    },
    docDetails:{
        paddingLeft:Theme.sizes[2],
    },
    docName:{
        paddingTop:Theme.sizes[5],
    },
    bigName:{
        color:Theme.colors.ui.nursePurple,
        fontSize:Theme.fonts.fontSize.title,
        fontWeight:'bold'
    },
    smallName:{
        color:Theme.colors.ui.nursePurple,
        fontSize:Theme.fonts.fontSize.body,
        paddingTop:Theme.sizes[2]
    },
    docContacts:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        paddingTop:Theme.sizes[3],
        borderRadius:10

    },
    docTabs:{
        height:50,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        margin:Theme.sizes[2],
        backgroundColor:Theme.colors.ui.nurseGreen,
        borderRadius:10,
        borderColor:Theme.colors.ui.nursePurple,
        borderWidth:1
    },
    docExperience:{
        paddingVertical:Theme.sizes[3],
        flexDirection:'row',
    },
    docBorders:{
        borderRightWidth:2,
        alignItems:'center',
        width:120
    },
    docBorders1:{
        alignItems:'center',
        width:120
    },
    docBordersText:{
        fontSize:Theme.fonts.fontSize.body,
        paddingBottom:Theme.sizes[2],
    },
    docReviews:{
        fontSize:Theme.fonts.fontSize.body,
        color:Theme.colors.ui.nursePurple
    },
    docBio:{
        fontSize:Theme.fonts.fontSize.body,
        fontWeight:'bold',
        paddingVertical:Theme.sizes[2],
    },
    docBioWrite:{
        paddingVertical:Theme.sizes[2],
    },
    docSpecialty:{
        flexDirection:'row',
        paddingVertical:Theme.sizes[2],
        justifyContent:'space-around'
    },
    docSpecialtywrap:{
        width:150,
        borderRadius:10,
        borderWidth:1,
        borderColor:Theme.colors.ui.nursePurple,
        paddingVertical:Theme.sizes[2],
        backgroundColor:Theme.colors.ui.nurseGreen,
        alignItems:'center'
    },
    docSpecColor:{
        color:Theme.colors.ui.nursePurple
    }
});