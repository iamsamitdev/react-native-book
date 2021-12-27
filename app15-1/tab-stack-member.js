import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from './global-styles'

export default function TabStackMember({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 18 }}>Member Signin Screen {'\n'}</Text>
            <Button title="Sign up" onPress={
                () => navigation.navigate('TabStackMemberSignup')
            } />
        </View>
    )
}

const styles = StyleSheet.create({

})
