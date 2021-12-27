import React from 'react'
import { Text, View, StyleSheet, TextInput, Switch, Button, Alert } from 'react-native'

export default function ApiComponentData() {
    let [login, setLogin] = React.useState('')
    let [password, setPassword] = React.useState('')
    let [save, setSave] = React.useState(false)
    let host = (Platform.OS == 'android') ? '10.0.2.2' : 'localhost'

    const onPressButtonSend = () => {
        let data = {
            'login': login,
            'password': password,
            'save': save
        }

        fetch(`http://${host}:8000/api/component-data`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type':'application/json'}
        })
		.then(response => response.text())
		.then(result => Alert.alert(result))
		.catch(err => Alert.alert(err))

        /* กรณีใช้เมธอด GET
        let params = new URLSearchParams()
        params.append('login', login)
        params.append('password', password)
        params.append('save', save)

        fetch(`http://${host}:8000/api/component-data?${params}`)
        .then(response => response.text())
        .then(result => Alert.alert(result))
        .catch(err => Alert.alert(err))
        */
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}
                defaultValue={login}
                onChangeText={setLogin}
                placeholder="Login"
            />
            <TextInput style={styles.textInput}
                defaultValue={password}
                onChangeText={setPassword}
                placeholder="Password"
                secureTextEntry={true}
            />
            <Text></Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 16}}>บันทึกไว้ในเครื่องนี้  </Text>
                <Switch value={save} onValueChange={setSave}/>
            </View>
            <Text></Text>
            <Button title="ส่งข้อมูล" onPress={onPressButtonSend}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 100,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    textInput: {
        width: 200,
        height: 32,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        marginTop: 10
    }
})