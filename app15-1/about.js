import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from './global-styles'

export default function About({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={{fontSize: 18, marginBottom: 20}}>About Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")}/>
            <Text></Text>
            <Button title="Go to Contact" onPress={() => navigation.navigate("Contact")}/>
            {/* <Button title="Go to Contact" onPress={() => navigation.navigate("Contact")}/> */}
        </View>
    )
}


const styles = StyleSheet.create({

})
