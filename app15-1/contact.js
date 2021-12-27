import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from './global-styles'

export default function Contact({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={{fontSize: 18, marginBottom: 20}}>Contact Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
            <Text></Text>
            <Button title="Go Back" onPress={() => navigation.goBack()}/>
        </View>
    )
}

const styles = StyleSheet.create({

})
