import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function CenterTextBox() {
	return (
		<View style={styles.container}>
			<View style={styles.items}>
				<Text style={styles.text}>Hello</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	items: {
		width: 100,
		height: 100,
		backgroundColor: 'lightgray',
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'blue',
		fontSize: 20,
	}
})
