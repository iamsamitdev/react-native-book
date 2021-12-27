import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from './global-styles'

export default function TabStackMemberSignup({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 18 }}>Member Signup Screen {'\n'}</Text>
            <Button title="Back" onPress={() => navigation.goBack()} />
        </View>
    )
}

const styles = StyleSheet.create({

})
