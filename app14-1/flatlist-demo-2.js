import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native'

export default function FlatListDemo2() {
	const data = [
		{ name: 'JavaScript', price: 120 },
		{ name: 'EcmaScript', price: 200 },
		{ name: 'Node.js', price: 300 },
		{ name: 'Express.js', price: 100 },
		{ name: 'React', price: 500 },
		{ name: 'React Native', price: 450 },
		{ name: 'Vue.js', price: 150 },
		{ name: 'Angular', price: 50 },
		{ name: 'MongoDB', price: 80 },
		{ name: 'Mongoose', price: 60 },
		{ name: 'Expo CLI', price: 350 },
		{ name: 'Expo Snack', price: 180 },
		{ name: 'Bootstrap', price: 250 },
		{ name: 'NPM', price: 360 },
		{ name: 'jQuery', price: 20 },
		{ name: 'VS Code', price: 100 },
		{ name: 'Android', price: 400 },
		{ name: 'iOS', price: 600 },
		//{ name: '', price:  },
	]

	const renderFlatListItem = (data) => {
		return (
			<View style={styles.flatListItems}>
				<Text style={styles.itemName}>{data.item.name}</Text>
				<Text style={styles.itemPrice}>{data.item.price}฿</Text>
			</View>
		)
	}

	return (
		<View style={styles.container}>
			<Text style={{ alignSelf: 'center', fontSize: 20 }}>รายการสินค้า</Text>
			<FlatList
				data={data}
				renderItem={renderFlatListItem}
				numColumns={2}
				keyExtractor={(item, index) => item + index}
				style={styles.flatList}
				contentContainerStyle={styles.flatListContent}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
	},
	flatList: {
		marginTop: 10,
	},
	flatListContent: {
		margin: 10,
		alignItems: 'center',
		paddingBottom: 50
	},
	flatListItems: {
		width: 150,
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#cde',
		borderWidth: 1,
		borderColor: 'gray',
		borderRadius: 8,
		margin: 10,
		padding: 10
	},
	itemName: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	itemPrice: {
		fontSize: 16,
		color: 'gray'
	}
})
