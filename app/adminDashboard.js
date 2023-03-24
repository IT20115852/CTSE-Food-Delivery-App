import {Button, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function adminDashboard({route, navigation}) {

    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center', marginRight: 23, marginBottom: 10}}>
                    <Button title="Delivery People" onPress={() => navigation.push("Diliveries")}>
                    </Button>
                </View>
                <View style={{alignItems: 'center', marginRight: 23, marginBottom: 10}}>
                    <Button title="Advertisements" onPress={() => navigation.push("Advertisements")}>
                    </Button>
                </View>
        </View>
    );
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
