import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar, FlatList} from 'react-native';
import {Card, Title, Button} from 'react-native-paper';
import { Theme } from '../components/Theme';

const services = [
    {   id:'yasua7a5xv57d89xc0',
        price:98000,
        by:'Apex Medical Emergencies',
        category:'Ambulance',
        title:'15 Mins. Helicopter Ambulance',
        imageUrl:'https://images.pexels.com/photos/1549308/pexels-photo-1549308.jpeg?auto=compress&cs=tinysrgb&w=600',
        description:'This helicopter service is available for all medical emergencies within 80 km radius',
    },
    {   id:'a8xa8sa8sa7s0zxza3',
        price:48500,
        by:'Red Cells BioMedicals',
        category:'Supplement',
        title:'Blood Bank (All Groups)',
        imageUrl:'https://images.pexels.com/photos/4047146/pexels-photo-4047146.jpeg?auto=compress&cs=tinysrgb&w=600',
        description:'Available for all blood groups. The supplies are stored at the recommended temperature',
    },
    {   id:'isjis8a76d7df7d8s9',
        price:32000,
        by:'Bone Fix House',
        category:'Therapy',
        title:'Bone Therapy for Athletes',
        imageUrl:'https://images.pexels.com/photos/5427659/pexels-photo-5427659.jpeg?auto=compress&cs=tinysrgb&w=600',
        description:'This therapy is designed for professional athletes who want to peak their performance',
    }
]

export function Services({navigation}) {
  return (
    <SafeAreaView style={styles.areaView}>
        <View style={styles.container}>
                <View style={styles.servicesList}>
                    <FlatList
                    data={services}
                    renderItem={({item}) => {
                        return (
                            <Card style={{marginBottom:Theme[2]}}>
                                <Card.Cover source={{ uri: item.imageUrl }} />
                                <Card.Content>
                                    <Card.Title title={item.title} subtitle={item.by}/>
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
                                    >Order</Button>
                                </Card.Actions>
                            </Card>
                        )
                    }}
                    key={({item}) => item.id}
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