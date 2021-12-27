import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import globalStyles from './global-styles'

export default function Setting({route, navigation}) {
    let [inputValue, setInputValue] = React.useState('')

    return (
        <View style={[globalStyles.container, {justifyContent: 'flex-start'}]}>
            <Text style={styles.text}>ใส่ข้อมูลที่จะส่งกลับ</Text>
            <TextInput style={styles.input}
                defaultValue={inputValue}
                onChangeText={t => setInputValue(t)}
            />
            <Button title="Done" onPress={
                () => navigation.navigate({
                    name: 'Home',       //ส่งกลีบไปยัง Home
                    params: { value: inputValue },  //ค่าที่จะส่งกลับ
                    merge: true         //ให้แนบข้อมูลกลับไปด้วย
                })
            }/>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        marginTop: 30,
        marginBottom: 5,
        fontSize: 18
    },
    input: {
        height: 30, 
        width: 150,
        padding: 5, 
        backgroundColor: '#ddd',
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
    }
})
