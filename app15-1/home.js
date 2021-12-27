import React from 'react'
import { StyleSheet, View, Text, Button, Alert } from 'react-native'
import globalStyles from './global-styles'

export default function Home({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.value) {
            Alert.alert('ค่าที่ส่งกลับ: ' + route.params?.value)
        }
    }, [route.params?.value])

    return (
        <View style={globalStyles.container}>
            <Text style={{ fontSize: 18, marginBottom: 20 }}>
                Home Screen
            </Text>
            <Button title="Go to About" onPress={() => navigation.navigate("About")} />
            <Text></Text>
            <Button title="Go to Contact" onPress={() => navigation.navigate("Contact")} />
            <Text></Text>
            <Button title="Personal Info" onPress={
                () => navigation.navigate('PersonalInfo', {
                    id: 12345,				//number
                    name: 'React Native',		//string
                    married: true,				//boolean
                    phone: ['081345xxxx', '099876xxxx'],	//array
                    education: {				//object
                        bachelorsDegree: 'Accountant',
                        mastersDegree: 'MBA'
                    }
                })
            } />
            <Text></Text>
            <Button title="Go to Setting" onPress={() => navigation.navigate("Setting")} />
            <Text></Text>
            <Button title="Toggle Nav Drawer" onPress={() => navigation.toggleDrawer()} />

        </View>
    )
}

const styles = StyleSheet.create({

})
