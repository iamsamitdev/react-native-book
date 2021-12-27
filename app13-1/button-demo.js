import React from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'

export default function ButtonDemo() {
	const onPressButton1 = () => {
		Alert.alert('You clicked Button 1')
	}

	return (
		<View style={styles.container}>
			<View style={styles.items}>
				<Button title="Button 1" color="blue" onPress={onPressButton1} />
			</View>
			<View style={styles.items}>
				<Button title="ปุ่มที่ 2" color="green" onPress={
					() => Alert.alert('คลิกปุ่มที่ 2')
				} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 50
	},
	items: {
		width: 150,
		marginBottom: 15
	},
})
