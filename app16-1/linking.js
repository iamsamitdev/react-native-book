import React from 'react'
import { Text, View, StyleSheet, Button, Alert, Linking } from 'react-native'
import { globalStyles } from './global-style'

export default function LinkingDemo() {
	const openLink = async (url) => {
		let supported = await Linking.canOpenURL(url)
		if (supported) {
			await Linking.openURL(url)
		} else {
			Alert.alert('No apps supported')
		}
	}

	return (
		<View style={globalStyles.container}>
			<Button title="Go to developerthai.com" onPress={
				openLink('http://www.developerthai.com')
			} />

			<Text></Text>
			<Button title="Telephone" onPress={
				openLink('tel:+1234567890')
			} />

			<Text></Text>
			<Button title="Open Settting" onPress={
				async () => { await Linking.openSettings() }
			} />
		</View>
	)
}

const styles = StyleSheet.create({

})