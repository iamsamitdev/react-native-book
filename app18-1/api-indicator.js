import React from 'react'
import { View, StyleSheet, Platform, Alert, Button, ActivityIndicator } from 'react-native'

export default function ApiIndicator() {
    let [connecting, setConnecting] = React.useState(false)

	let host = (Platform.OS == 'android') ? '10.0.2.2' : 'localhost'  

    const onPressButton = () => {
        setConnecting(true)
        fetch(`http://${host}:8000/api/indicator`)
		.then(response => response.text())
		.then(result => Alert.alert(result))
		.catch(err => Alert.alert(err))
        .finally(() => setConnecting(false))
    }

    //โค้ดบางส่วนอาจซ้ำซ้อนกันเพื่อให้เข้าใจง่าย
    if (!connecting) {
        return (
            <View style={styles.container}>
                <Button style={styles.button}
                    title="Connect to Server" onPress={onPressButton}/>
            </View>
        )
    } else {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="tomato"/>
            </View>        
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 100
    },
    button: {
        width: 100,
        height: 40
    }
})