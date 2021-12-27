import React from 'react'
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { globalStyles } from './global-style'

export default function AsyncStorageDemo() {
  const KEY_LOGIN = 'key_login'
  const KEY_PSWD = 'key_pswd'

  let [login, setLogin] = React.useState('')
  let [password, setPassword] = React.useState('')
  
  //เมื่อแสดงคอมโพเนนต์ ให้อ่านข้อมูลที่เก็บเอาไว้มาแสดง
  React.useEffect(() => {
    getAccount()
  }, [])

  const getAccount = () => {
     AsyncStorage
    .multiGet([KEY_LOGIN, KEY_PSWD])  
    .then(results => {
      //[[key1, value1], [key2, value2]]
      setLogin(results[0][1]) 
      setPassword(results[1][1])
    })
    .catch(err => Alert.alert('Error: ' + err))
  }

  const saveAccount = () => {
    AsyncStorage
    .multiSet([[KEY_LOGIN, login], [KEY_PSWD, password]])
    .then(() => Alert.alert('บันทักข้อมูลแล้ว'))
    .catch(err => Alert.alert('Error: ' + err))
  }

  const clearAccount = () => {
    AsyncStorage.multiRemove([KEY_LOGIN, KEY_PSWD])
    //AsyncStorage.clear()
    getAccount()
  }

  return (
    <View style={globalStyles.container}>
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
      <Button title="บันทึกข้อมูล" onPress={saveAccount}/>

      <Text></Text>
      <Button title="ยกเลิกการเก็บข้อมูล" onPress={clearAccount}/>
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    width: 200,
    height: 32,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginTop: 10
  }
})