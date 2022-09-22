import { View, Text, StyleSheet, SafeAreaView, ScrollView, Platform, StatusBar, FlatList} from 'react-native';
import { Theme } from '../components/Theme';

export function AddService({navigation}) {
    return (
      <SafeAreaView style={styles.areaView}>
          <View style={styles.container}>
                  
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
})