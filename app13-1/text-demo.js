import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function TextDemo() {

	return (
		<View style={styles.container}>
			<Text numberOfLines={3} ellipsizeMode='tail' style={{ fontSize: 18 }}>
				Text is a React component for displaying text. {'\n'}
				Text supports {' '}
				<Text style={{ fontWeight: 'bold' }}>
					nesting, styling, and {' '}
					<Text style={{ fontStyle: 'italic' }}>touch handling.</Text>
				</Text>
			</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 50,
		padding: 15
	},
	items: {
		width: 200,
		marginBottom: 15
	}
})
