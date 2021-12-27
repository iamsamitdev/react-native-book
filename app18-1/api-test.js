import React from 'react'
import { View, StyleSheet, Alert, Button, Platform } from 'react-native'

export default function ApiTest() {
    let host = 'localhost'
    if (Platform.OS === 'android') {
        host = '10.0.2.2'
    }

    const onPressButton = () => {
        fetch(`http://${host}:8000/api/test`)
		.then(response => response.text())
		.then(result => Alert.alert(result))
		.catch(err => Alert.alert(err))
    }

    return (
        <View style={styles.container}>
            <Button style={styles.button}
                title="Connect to Server" onPress={onPressButton}
            />
        </View>
    )

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