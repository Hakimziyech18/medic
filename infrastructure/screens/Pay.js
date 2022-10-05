import {View, Alert} from "react-native";
import WebView from "react-native-webview";
import {Paystack} from "react-native-paystack-webview";
import { addDoc,collection } from "firebase/firestore";

export function Pay({navigation,route}){
    const {userUID,userEmail,serviceUID,serviceTitle,price} = route.params;

    const getNewTimestanp = () => {
        const now = new Date ();
        return now.getTime();
    }

    return (
        <View style={{flex:1}}>
            <Paystack
                paystackKey="pk_test_7b7d6df31eac9b224b2cc7ba0b9afc1e861b09f2"
                amount={price}
                billingEmail={userEmail}
                activityIndicator="green"
                onCancel={(e) => {
                    navigation.navigate('Services')
                }}
                onSuccess={() => {
                    //insert booking records into firestore
                    addDoc(collection(db,'bookings'),{
                        by:userUID,
                        serviceuid:serviceUID,
                        title:serviceTitle,
                        serviceprice:price,
                        status:'Pending',
                        timecreated:getNewTimestamp()
                    })
                    .then(() => Alert.alert(
                        'payment status',
                        `your payment of ${price} was successful`,
                        [{text:'Home',onPress:navigation.navigate('Home')}]
                    ))
                    .catch(() => Alert.alert('Error Message','There was a problem interacting with database'))
                }}
                autoStart={true}
            />
        </View>
    )
}