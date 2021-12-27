import React from 'react'
import { View, StyleSheet, Platform, Alert, Button, Text } from 'react-native'

export default function ApiDB() {
    let [data, setData] = React.useState([])
    let host = (Platform.OS == 'android') ? '10.0.2.2' : 'localhost'

    const onPressButtonCreate = () => {
        fetch(`http://${host}:8000/api/create-data`, { method: 'POST'})
        .then(response => response.text())
        .then(result => Alert.alert(result))
        .catch(err => Alert.alert(err))
    }

    const onPressButtonRead = () => {
        fetch(`http://${host}:8000/api/read-data`)
        .then(response => response.json())
        .then(result => setData(result))
        .catch(err => Alert.alert(err))
    }

    return (
        <View style={styles.container}>
            <Button style={styles.button}
                title="Create Data" onPress={onPressButtonCreate} />
            <Text></Text>
            <Button style={styles.button} 
                title="Read Data" onPress={onPressButtonRead}/>
            <Text></Text>
            <View>
            {
                data.map(doc => {
                    return (
                        <Text key={doc._id} style={styles.text}>
                            {doc.name}, {doc.price}
                        </Text>
                    )
                })
            }
            </View>            
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
    },
    text: {
        fontSize: 16
    }
})