import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import globalStyles from './global-styles'

export default function PersonalInfo({ route, navigation }) {
    let id = route.params.id || 0
    let name = route.params.name || ''
    let phone = ''
    if (route.params.phone) {
        phone = route.params.phone.join(', ')
    }
    let bdg = '', mdg = ''
    if (route.params.education) {
        bdg = route.params.education.bachelorsDegree || ''
        mdg = route.params.education.mastersDegree || ''
    }
    let info = `
        Personal Info: ${'\n'}
        id: ${id}, 
        name: ${name} 
        married: ${route.params.married || false}
        phone: ${phone}
        bachelor's degree: ${bdg} 
        master's degree: ${mdg}
    `

    return (
        <View style={[globalStyles.container, { justifyContent: 'flex-start' }]}>
            <Text style={{ fontSize: 18 }}>{info}</Text>
        </View>
    )
}


const styles = StyleSheet.create({

})
