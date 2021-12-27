import React from 'react'
import { View, StyleSheet, Linking } from 'react-native'

export default function LinkingDemo() {
	return (
		<View style={styles.container}>
			<View style={styles.items}>
				<Linking>

				</Linking>
			</View>
			<View style={styles.items}>

			</View>
			<View style={styles.items}>

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
		marginBottom: 15,
		alignItems: 'center',
		justifyContent: 'space-between'
	},
})
