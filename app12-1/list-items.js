import React from "react"
import { View, Text, StyleSheet } from "react-native"

export default function ListItems() {
	const items = ['One', 'Two', 'Three', 'Four', 'Five']

	return (
		<View style={styles.container}>
			{
				items.map((item, i) => {
					return (
						<View key={i} style={styles.items}>
							<View style={[styles.box, styles.boxImg]}>
								<Text style={styles.text}>Image</Text>
							</View>
							<View style={[styles.box, styles.boxContent]}>
								<Text style={styles.text}>{item}</Text>
							</View>
						</View>
					)
				})
			}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
		padding: 10
	},
	items: {
		flexDirection: 'row',
		marginBottom: 15,
		paddingLeft: 10
	},
	box: {
		color: 'white',
		justifyContent: 'center',
		alignItems: 'center'
	},
	boxImg: {
		width: 80,
		height: 80,
		backgroundColor: 'black',
		marginRight: 10
	},
	boxContent: {
		flex: 1,
		backgroundColor: '#aaa',
	},
	text: {
		color: 'white',
		fontSize: 20,
	}
})
