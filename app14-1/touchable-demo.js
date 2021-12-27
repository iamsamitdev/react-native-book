import React from 'react'
import {
	View, StyleSheet, Alert, Text, Image,
	TouchableHighlight, TouchableOpacity
} from 'react-native'

export default function TouchableDemo() {
	return (
		<View style={styles.container}>
			<TouchableOpacity activeOpacity={0.25}
				style={[styles.items, styles.buttonOpacity]}
				onPress={
					() => { Alert.alert('Button Opacity') }
				}
			>
				<Text style={styles.buttonText}>Opacity</Text>
			</TouchableOpacity>

			<TouchableHighlight underlayColor='red'
				style={[styles.items, styles.buttonHighlight]}
				onPress={
					() => { Alert.alert('Button Highlight') }
				}
			>
				<Text style={styles.buttonText}>Highlight</Text>
			</TouchableHighlight>

			<TouchableHighlight style={[styles.items,]}
				underlayColor='red'
				onPress={
					() => { Alert.alert('Button Add Cart') }
				}
			>
				<View style={styles.viewImgTextContainer}>
					<Image source={require('./cart64.png')} style={styles.img} />
					<Text style={styles.buttonText}>Add Cart</Text>
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
		marginTop: 50
	},
	items: {
		width: 250,
		height: 45,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 15,
		borderRadius: 15,
		backgroundColor: 'royalblue'
	},
	buttonOpacity: {

	},
	buttonHighlight: {

	},
	buttonText: {
		fontSize: 20,
		color: 'white'
	},
	viewImgTextContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	img: {
		height: 40,
		width: 40,
		marginRight: 10
	}
})
