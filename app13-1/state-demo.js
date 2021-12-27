import React from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'

export default function StateDemo() {
	const t = 'จำนวนครั้งที่คลิก: '
	let [count, setCount] = React.useState(0)
	let [text, setText] = React.useState(t + count) //จัดเก็บข้อความใน State

	const onPressButton = () => {
		let c = count + 1
		setCount(c)
		setText(t + c)
	}

	return (
		<View style={styles.container}>
			<View style={styles.items}>
				<Button title="Click Here" color="blue" onPress={onPressButton} />
			</View>
			<View style={styles.items}>
				<Text style={{ fontSize: 18 }}>
					{text}    {/* แสดงข้อความที่เก็บใน State */}
				</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: 50
	},
	items: {
		width: 200,
		marginBottom: 15
	}
})
