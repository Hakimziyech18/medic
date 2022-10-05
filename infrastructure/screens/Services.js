import { useEffect,useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar, FlatList} from 'react-native';
import {Card, Button} from 'react-native-paper';
import { Theme } from '../components/Theme';
import {db} from '../../Services/Firebase'
import { onSnapshot, collection, getDoc, doc } from 'firebase/firestore';

export function Services({navigation}) {
    const [services,setServices] = useState([]);
    const [providerName,setProviderName] = useState([]);

    useEffect(() => {
        const  allServices = [];

        onSnapshot(collection(db,'services'),(onSnap) => {
            onSnap.forEach(item => {
                const itemData = item.data();
                itemData.docId = item.id;
                allServices.push(itemData);
                setServices(allServices)
            })
        })
    },[])
        
       

        function ServiceCard(item){
            getDoc(doc(db,'users',item.docId))
            .then((document) => {
                const docData = document.data();
                const fullName = docData.firstName + '' + docData.lastName;
                setProviderName(fullName);
            })
            .catch(error => {
                Alert.alert('Error Response',error,[{text:'Okay'}])
            })

            return (
                <Card style={{marginBottom:Theme.sizes[2]}}>
                    <Card.Cover source={{ uri: item.imageUrl }} />
                    <Card.Title title={item.title} subtitle={providerName}/>
                    <Card.Content>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceRowText}>NGN{item.price}</Text>                     
                            <Text style={styles.priceRowText}>{item.category}</Text>                     
                        </View>
                    </Card.Content>
                    <Card.Actions>
                        <Button 
                        mode='contained' 
                        color={Theme.colors.ui.nursePurple} 
                        contentStyle={{paddingHorizontal:8}}
                        onPress = {() => navigation.navigate('Service',{serviceUID:services.docId})}
                        >View Details</Button>
                    </Card.Actions>
                </Card>
            )
        }

    return (
        <SafeAreaView style={styles.areaView}>
            <View style={styles.container}>
                    <View style={styles.servicesList}>
                        <FlatList
                        data={services}
                        renderItem={({service}) => {
                            return (
                                ServiceCard(service)
                            )
                        }}
                        key={({service}) => service.docId}
                        showsVerticalScrollIndicator={false}
                        />
                    </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    areaView:{
        flex:1,
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : null
    },
    container:{
        flex:1,
        paddingHorizontal:Theme.sizes[3],
        paddingBottom:Theme.sizes[3],
    },
    priceRow:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    priceRowText:{
        color:'gray'
    },
})