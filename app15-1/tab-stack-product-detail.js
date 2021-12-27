import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from './global-styles'

export default function TabStackProductDetail({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 18 }}>
                Product Detail Screen {'\n'}
                id: {route.params.id} {'\n'}
            </Text>
            <Button title="Back" onPress={() => { navigation.goBack() }} />
        </View>
    )
}

const styles = StyleSheet.create({

})
