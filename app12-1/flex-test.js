import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function FlexTest() {
    return (
        <View style={styles.container}>
            <View style={styles.items}></View>
            <View style={[styles.items, { backgroundColor: '#000' }]}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',   //default
        //flexDirection: 'row',
        marginTop: 50,

        justifyContent: 'center',
        alignItems: 'center'
    },
    items: {
        width: 100,
        height: 100,
        backgroundColor: 'darkgray',
        margin: 15
    },
})
