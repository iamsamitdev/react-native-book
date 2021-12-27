import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from './global-styles'

export default function TabStackProduct({ navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 18 }}>Product Screen {'\n'}</Text>
            <Button title="Product Detail" onPress={
                () => navigation.navigate('TabStackProductDetail', { id: 123 })
            } />
        </View>
    )
}

const styles = StyleSheet.create({

})
