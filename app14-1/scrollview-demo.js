import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'

export default function ScrollViewDemo() {
	return (
		<View style={styles.container}>
			<Text style={{ alignSelf: 'center', fontSize: 20 }}>ScrollView</Text>
			<ScrollView
				contentContainerStyle={styles.scrollViewContent}
				style={{ alignItems: 'center' }}
				horizontal={false}>

				<Image source={require('./react500.png')} style={styles.img} />
				<Text style={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id est laborum.
				</Text>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
	},
	scrollViewContent: {
		margin: 5,
		padding: 20,
		paddingBottom: 50,
		backgroundColor: '#ddd'
	},
	img: {
		width: 200,
		height: 200,
		alignSelf: 'center',
		marginBottom: 30
	},
	text: {
		fontSize: 30,
		textAlign: 'center',
		marginBottom: 20
	}
})
