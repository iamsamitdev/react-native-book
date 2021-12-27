import React from 'react'
import {
	Text, View, StyleSheet, TextInput,
	Button, Alert, Linking, Platform
} from 'react-native'

import { globalStyles } from './global-style'
import * as Location from 'expo-location'

export default function LocationMap() {
	let [latitude, setLatitude] = React.useState('0')
	let [longitude, setLongitude] = React.useState('0')

	React.useEffect(() => {
		//
	}, [])

	const getLocation = async () => {
		let { status } = await Location.requestForegroundPermissionsAsync()
		if (status != 'granted') {
			Alert.alert('Permission to access location was denied')
			return
		}

		let location = await Location.getCurrentPositionAsync({})
		setLatitude(`${location.coords.latitude}`)
		setLongitude(`${location.coords.longitude}`)
	}

	Location.watchPositionAsync({ accuracy: Location.Accuracy.Highest }, (location) => {
		setLatitude(`${location.coords.latitude}`)
		setLongitude(`${location.coords.longitude}`)
	})

	const showMap = async () => {
		let latlng = `${latitude},${longitude}`
		let url = ''
		if (Platform.OS === 'android') {
			url = 'geo:' + latlng
		} else if (Platform.OS === 'ios') {
			url = 'https://maps.apple.com/?ll=' + latlng
		}

		let supported = await Linking.canOpenURL(url)
		if (supported) {
			await Linking.openURL(url)
		} else {
			Alert.alert("No apps supported")
		}
	}

	return (
		<View style={globalStyles.container}>
			<TextInput style={styles.textInput}
				defaultValue={latitude}
				onChangeText={setLatitude}
				placeholder="Latitude"
			/>

			<TextInput style={styles.textInput}
				defaultValue={longitude}
				onChangeText={setLongitude}
				placeholder="Longitude"
			/>

			<Text></Text>
			<Button title="Get Location" onPress={getLocation} />

			<Text></Text>
			<Button title="Show Map" onPress={showMap} />
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