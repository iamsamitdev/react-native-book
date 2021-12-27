import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight, TouchableOpacity, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function IoniconsDemo() {
	return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.25}
				style={styles.button}
				onPress={() => Alert.alert('Home')}>

				<View style={styles.imgTextContainer}>
					<Ionicons name="home" size={20} color="white" style={styles.icon} />
					<Text style={styles.text}>Home</Text>
				</View>
			</TouchableOpacity>
			<TouchableHighlight underlayColor='red'
				style={styles.button}
				onPress={() => Alert.alert('Help')}>

				<View style={styles.imgTextContainer}>
					<Ionicons name="help-circle-outline" size={28} color="white" style={styles.icon} />
					<Text style={styles.text}>Help</Text>
				</View>
			</TouchableHighlight>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		marginTop: 70
	},
	button: {
		width: 250,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: 'royalblue'
	},
	text: {
		fontSize: 20,
		color: 'white'
	},
	imgTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	icon: {
		marginRight: 15
	}
})
