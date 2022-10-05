import { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, SafeAreaView, StyleSheet, ImageBackground, TouchableOpacity, FlatList, Image, ScrollView} from 'react-native'
import { Theme } from '../../components/Theme';
import { AppContext } from '../../Globals/Appcontext';
import { onSnapshot,doc } from 'firebase/firestore';
import { db } from '../../../Services/Firebase';
import { FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import { faFileLines} from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import { faHouseMedical } from "@fortawesome/free-solid-svg-icons";
import { faTruckMedical } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faFill } from "@fortawesome/free-solid-svg-icons";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

// service components names
const services = [
    {id:1,serviceName:'Diagnosis',serviceIcon:faStethoscope},
    {id:2,serviceName:'Consultation',serviceIcon:faUserDoctor},
    {id:3,serviceName:'Clinic',serviceIcon:faHouseMedical},
    {id:4,serviceName:'Ambulance',serviceIcon:faTruckMedical},
    {id:5,serviceName:'Therapy',serviceIcon:faPerson},
    {id:6,serviceName:'Prescription',serviceIcon:faFileLines},
    {id:7,serviceName:'Medicine',serviceIcon:faPills},
    {id:8,serviceName:'article',serviceIcon:faNewspaper},
]

const topProviders = [
    {id:1,proName:'Hakimi Lab',rating:[5,5,4,5,4,5,5],logo:'https://cdn-icons-png.flaticon.com/512/2869/2869818.png'},
    {id:2,proName:'Onehi Pharmaceuticals',rating:[5,5,4,5,4,4,5],logo:'https://cdn-icons-png.flaticon.com/512/1048/1048611.png'},
    {id:3,proName:'Beelah Clinic',rating:[4,4,5,5,5,4,4],logo:'https://cdn-icons-png.flaticon.com/512/8355/8355694.png'},
    {id:4,proName:'Reed Medical Equipments',rating:[5,5,4,5,5,4,5],logo:'https://cdn-icons-png.flaticon.com/512/3901/3901586.png'},
    {id:5,proName:'Elikeem Lab',rating:[4,5,5,5,4,4,5],logo:'https://cdn-icons-png.flaticon.com/512/8353/8353823.png'},
    {id:6,proName:'Sule Maternity',rating:[5,5,4,5,4,4,5],logo:'https://cdn-icons-png.flaticon.com/512/8351/8351887.png'},
]

export const CustomerHome = ({navigation}) => {
    const {userUID,userBioData,setUserBioData} = useContext(AppContext)

    //get users record 
    useEffect(() => {
        onSnapshot(doc(db, "users", userUID), (doc) => {
            const data = doc.data();
            let userData = {email:'',firstName:data.firstName,lastName:data.lastName};
            setUserBioData(userData);
            
        })
      },[]);

    return (
        <SafeAreaView style={styles.areaView}>
            <ScrollView>
            <View style ={styles.container}>
                <View style={styles.header}>
                    <View style={styles.leftContent}>
                        <Text style={styles.hearderText}>Hello, {userBioData.firstName}!</Text>
                        <Text style={styles.subHeadTextText}>Patient</Text>
                    </View>

                    <View style={styles.rightContent}>
                        <FontAwesomeIcon 
                        icon={faSignOut} 
                        size={30}
                        color={Theme.colors.ui.nurseGray}
                        />
                    </View>
                </View>

                    <ImageBackground source={require('../../../assets/images/nurse.jpg')}
                    resizeMode='cover'
                    style={styles.headerBg}
                    borderRadius={10}>
                        <View style={styles.headerBgLayer}>
                            <Text style={styles.brandMessage}>Skilled medical</Text>
                            <Text style={styles.brandMessage}>professionals</Text>
                            <Text style={styles.brandMessageSmall}>for all medical emergencies</Text>
                        </View>
                    </ImageBackground>

                    <Text style={styles.serviceHeading}>What do you need?</Text>
                    <View style={styles.serviceRow}>
                        {
                            Object.values(services).map((item,index) => (
                                index == 7 ?
                                <TouchableOpacity  style={styles.service} onPress={() => navigation.navigate('Services')}>
                                        <FontAwesomeIcon icon={item.serviceIcon} size={38} style={{marginBottom:6}} color='white'/>
                                        <Text style={styles.serviceName}>All Services</Text>
                                    </TouchableOpacity>
                                :
                                <TouchableOpacity 
                                style={styles.service}
                                onPress={() => navigation.navigate('Category',{categoryName:item.serviceName})}>
                                        <FontAwesomeIcon 
                                        icon={item.serviceIcon}
                                        size={38}
                                        style={{marginBottom:6}}
                                        color='white'
                                        />
                                        <Text style={styles.serviceName}>
                                            {item.serviceName.length > 8 ? item.serviceName.slice(0,7) + '.' : item.serviceName}
                                        </Text>
                                    </TouchableOpacity>
                            ))
                        }
                    </View>


                    <View style={styles.topProvidersBlock}>
                        <Text style={styles.topProvidersHeading}> Most rated providers</Text>    
                        <FlatList
                        data={topProviders}
                        renderItem={({item}) => (
                            <View style={styles.providerItem}>
                                <Image source={{uri:item.logo}} style={styles.providerLogo}/>
                                <View style={styles.providerDetails}>
                                    <Text style={styles.providerName}>{item.proName}</Text>
                                    <View style={styles.rating}>
                                        
                                        <FontAwesomeIcon icon={faStar} color='gold' size={Theme.sizes[4]}/>
                                        <FontAwesomeIcon icon={faStarHalf} color='gold' size={Theme.sizes[4]}/>
                                    </View>

                                </View>
                            </View>
                        )}
                        key={item => item.id}
                        horizontal={true}
                        />
                    </View>


                    <View style={styles.topProvidersBlock}>
                        <Text style={[styles.topProvidersHeading, {color:Theme.colors.ui.nurseGray}]}> Featured providers</Text>    
                        <FlatList
                        data={topProviders}
                        renderItem={({item}) => (
                            <View style={styles.providerItemFeatured}>
                                <Image source={{uri:item.logo}} style={styles.providerLogo}/>
                                <View style={styles.providerDetails}>
                                    <Text style={styles.providerName}>{item.proName}</Text>
                                    <View style={styles.rating}>
                                        <FontAwesomeIcon icon={faStar} color='gold' size={Theme.sizes[4]}/>
                                        <FontAwesomeIcon icon={faStar} color='gold' size={Theme.sizes[4]}/>
                                        <FontAwesomeIcon icon={faStar} color='gold' size={Theme.sizes[4]}/>
                                        <FontAwesomeIcon icon={faStar} color='gold' size={Theme.sizes[4]}/>
                                        <FontAwesomeIcon icon={faStarHalf} color='gold' size={Theme.sizes[4]}/>
                                    </View>

                                </View>
                            </View>
                        )}
                        key={item => item.id}
                        horizontal={true}
                        />
                    </View>
            </View>
            </ScrollView>
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
    header:{
      flexDirection:'row',
      justifyContent:'space-between',
    },
    hearderText:{
      fontSize:Theme.fonts.fontSize.h5,
      fontWeight:'bold',
      color:Theme.colors.ui.nursePurple
    },
    subHaedText:{
      color:Theme.colors.text.secondary
    },
    rightContent:{
      width:48,
      height:48,
      borderRadius:10,
      justifyContent:'center',
      alignItems:'center'
    },
    search:{
        borderWidth:1,
        borderRadius:50,
        borderColor:Theme.colors.bg.quartenary,
        padding:Theme.sizes[3],
        paddingLeft:46,
    },
    searchContainer:{
        marginVertical:Theme.sizes[4],
    },
    searchIcon:{
        position:'absolute',
        top:14,
        left:14,
    },
    headerBg:{
        height:200,
        marginVertical:10,
    },
    headerBgLayer:{
        flex:1,
        padding:Theme.sizes[3],
        backgroundColor:'rgba(189,242,213,0.4)',
        borderRadius:10,
    },
    brandMessage:{
        fontSize:Theme.fonts.fontSize.h4,
        fontWeight:'bold',
        color:'white',
        shadowColor:'black',
        shadowOffset:{width:4,height:4},
        shadowRadius:4,
        shadowOpacity:0.8,
        elevation:5,
    },
    brandMessageSmall:{
        fontWeight:'bold',
        color:'white',
        fontSize:Theme.fonts.fontSize.title,
        marginTop:Theme.sizes[3],
        shadowColor:'black',
        shadowOffset:{width:2,height:4},
        shadowRadius:2,
        shadowOpacity:0.8,
        elevation:5,
    },
    serviceHeading:{
        fontSize:Theme.fonts.fontSize.body,
        marginVertical:Theme.sizes[2],
    },
    serviceRow:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-evenly',
        backgroundColor:Theme.colors.ui.nurseGreen,
        paddingTop:Theme.sizes[3],
        borderRadius:10,
    },
    service:{
        height:80,
        width:80,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:Theme.sizes[3],
        backgroundColor:Theme.colors.ui.darkGreen,
        borderRadius:10,
    },
    serviceName:{
        color:'white',
        fontWeight:'bold',
        textAlign:'center'

    },
    topProvidersBlock:{
        marginVertical:Theme.sizes[3],
    },
    topProvidersHeading:{
        color:Theme.colors.ui.darkGreen,
        fontSize:Theme.fonts.fontSize.body,
        fontWeight:'bold',
        marginBottom:Theme.sizes[1],
    },
    providerItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:Theme.sizes[1],
        padding:Theme.sizes[4],
        backgroundColor:Theme.colors.ui.darkGreen,
    },
    providerItemFeatured:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginRight:Theme.sizes[1],
        padding:Theme.sizes[4],
        backgroundColor:Theme.colors.ui.nurseGray,
    },
    providerLogo:{
       width:64,
       height:64,
       marginRight:Theme.sizes[1]
    },
    providerDetails:{
       
    },
    providerName:{
       color:'#fff',
       fontSize:Theme.fonts.fontSize.h5,
    },
    rating:{
       flexDirection:'row',
    },
}); 