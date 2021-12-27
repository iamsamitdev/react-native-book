import React from "react"
import {View, Text, StyleSheet, Platform} from "react-native"
import commonStyles from "./common-styles"

export default function MyComponent() {
    return (
		<View style={styles.container}>
			<Text style={styles.textTitle}>React</Text>
			<Text style={styles.textPlain}>JavaScript Framework for Web App</Text>
			<Text style={styles.textTitle}>React Native</Text>
			<Text style={styles.textPlain}>JavaScript Framework for Mobile App</Text>
		</View>
    )    
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'lightgray',
        padding: 20,
		...Platform.select({
			android: { paddingTop: 30 },
			ios: { paddingTop: 45}
		})
	},
	textTitle: {
		color: 'blue',
		fontSize: 20,
		fontWeight: 'bold',
        marginTop: 15,
	},
    textPlain: {
        fontSize: 16
    }
})
