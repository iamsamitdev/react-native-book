import React from 'react'
import { View, StyleSheet, Button, Text, Alert, Switch } from 'react-native'

export default function SwitchDemo() {
	let [switchBluetooth, setSwitchBluetooth] = React.useState(false)
	let [switchWiFi, setSwitchWiFi] = React.useState(false)

	return (
		<View style={styles.container}>
			<View style={styles.items}>
				<Text style={styles.text}>Bluetooth</Text>
				<Switch value={switchBluetooth} onChange={
					e => setSwitchBluetooth(e.nativeEvent.value)
				} />
			</View>
			<View style={styles.items}>
				<Text style={styles.text}>Wi-Fi</Text>
				<Switch value={switchWiFi} onValueChange={setSwitchWiFi} />
			</View>
			<View style={[styles.items, { marginTop: 30, justifyContent: 'center' }]}>
				<Button
					title="Show Switch Value"
					onPress={
						() => {
							let b = switchBluetooth.toString()
							let w = (switchWiFi) ? 'On' : 'Off'
							let t = `Bluetooth: ${b}, Wi-Fi: ${w}`
							Alert.alert(t)
						}
					} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 70,
		marginLeft: 20,
		marginRight: 20
	},
	items: {
		flexDirection: 'row',
		marginBottom: 15,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	text: {
		fontSize: 18
	}
})
