import {StatusBar} from 'expo-status-bar';
import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {db} from '../../FirebaseDB'
import {doc, collection, onSnapshot, query, deleteDoc} from 'firebase/firestore'

export default function ViewFoodsBuyer({route, navigation}) {

    const [foods, setFoods] = useState([])
    // const [orderFoods] = route.params

    useEffect(() => {
        setFoodsItems()
    }, [])

    return (
        <View style={styles.container}>
                <View style={{alignItems: 'flex-end', marginRight: 23, marginBottom: 10}}>
                    <Button title="Add Food" onPress={() => navigation.navigate('AddFood')}>
                    </Button>
                </View>
                <View style={{alignItems: 'flex-end', marginRight: 23, marginBottom: 10}}>
                    <Button title="Add Food" onPress={() => navigation.navigate('AddFood')}>
                    </Button>
                </View>
        </View>
    );

    function setFoodsItems() {

    }

    function setFoodToOrder(item) {
        navigation.navigate('ViewOrdersBuyer')
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
        marginTop: 20
    },
});
