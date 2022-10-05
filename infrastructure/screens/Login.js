import { useState, useContext } from 'react';
import {View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faCross } from '@fortawesome/free-solid-svg-icons';
import {Button, TextInput} from 'react-native-paper';
import { Theme } from '../components/Theme';
import { authentication } from '../../Services/Firebase';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { AppContext } from '../Globals/Appcontext';


export function Login({navigation}){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {setUserUID,setSignedIn} = useContext(AppContext)

    function LoginAuth(){
        signInWithEmailAndPassword(authentication,email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            onAuthStateChanged(authentication,(currentUser) => {
                setUserUID(currentUser.uid);
                setSignedIn(true);
                navigation.navigate('Home')
            })
        })
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

                    <TextInput label='Email address' mode='outlined' outlineColor={Theme.colors.bg.tertiary} activeOutlineColor={Theme.colors.bg.quartenary} keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)}/>
                    <TextInput label='password' mode='outlined' outlineColor={Theme.colors.bg.tertiary} activeOutlineColor={Theme.colors.bg.quartenary} secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}/>


                    <Button mode='contained' color={Theme.colors.ui.nursePurple } onPress={LoginAuth} style={{paddingVertical:Theme.sizes[3], marginTop:Theme.sizes[2]}}> Log in </Button>

                    <View style={styles.textInline}>
                        <Text style={styles.ctaText}>Don't have an account? </Text>
                        <TouchableOpacity
                        onPress={() => navigation.navigate('Signup')}>
                            <Text style={[styles.ctaText,{color:Theme.colors.ui.nursePurple}]}>Go to Sign up</Text>
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
    textInline:{
        flexDirection:'row',
        marginVertical:Theme.sizes[2],
    },
    ctaText:{
        fontSize:Theme.fonts.fontSize.body
    },
});