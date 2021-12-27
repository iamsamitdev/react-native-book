import React from 'react'
import {
	View, StyleSheet, Alert, Text, FlatList, TouchableOpacity
} from 'react-native'

export default function FlatListDemo1() {
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

	const onPressItem = (item) => {
		Alert.alert(`${item.name}  ราคา ${item.price} บาท`)
	}

	const renderFlatListItem = (data) => {
		//อ่านอักขระตัวแรกของชื่อสินค้า ไปใส่ใน Shape Drawable
		let firstLetter = String(data.item.name).substring(0, 1)

		return (
			<TouchableOpacity onPress={() => onPressItem(data.item)}>
				<View style={styles.flatListItems}>
					<View style={styles.shapeBg}>
						<Text style={styles.shapeText}>{firstLetter}</Text>
					</View>
					<Text style={styles.itemName}>{data.item.name}</Text>
					<Text style={styles.itemPrice}>{data.item.price}฿</Text>
				</View>
			</TouchableOpacity>
		)
	}

	return (
		<View style={styles.container}>
			<Text style={{ alignSelf: 'center', fontSize: 20 }}>รายการสินค้า</Text>
			<FlatList
				data={data}
				renderItem={renderFlatListItem}
				keyExtractor={(item, index) => item + index}
				style={{ marginTop: 10 }}
				contentContainerStyle={{ margin: 10 }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
	},
	flatListItems: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		backgroundColor: '#cde',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		marginBottom: 8,
		padding: 10
	},
	shapeBg: {
		width: 40,
		height: 40,
		backgroundColor: 'green',
		borderRadius: 40,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
		marginRight: 10
	},
	shapeText: {
		fontSize: 20,
		color: 'white',
	},
	itemName: {
		flex: 3,
		fontSize: 18,
		fontWeight: 'bold'
	},
	itemPrice: {
		flex: 1,
		fontSize: 16,
		color: 'gray',
		textAlign: 'right'
	}
})
