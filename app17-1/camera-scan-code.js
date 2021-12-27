import React from 'react'
import { StyleSheet, Text, View, Button, Alert } from 'react-native'
import { globalStyles } from './global-style'
import { BarCodeScanner } from 'expo-barcode-scanner'  //npm install expo-barcode-scanner

export default function CameraBarCodeScan() {
	let [scanned, setScanned] = React.useState(false)

	const getPermission = async () => {
		const { status } = await BarCodeScanner.requestPermissionsAsync()
		if (status !== 'granted') {
			Alert.alert('การเข้าใช้งานถูกปฏิเสธ')
			return <View />
		}
	}

	React.useEffect(() => {
		getPermission()
	}, [])

	const onScanned = ({ type, data }) => {
		//type คือชนิดของโค้ด และ data คือค่าของโค้ดนั้น
		Alert.alert(`Type: ${type}, Data: ${data}`)
		setScanned(true)
	}

	return (
		<View style={globalStyles.container}>
			<BarCodeScanner style={styles.barcode}
				onBarCodeScanned={scanned ? undefined : onScanned}
			/>
			<Text></Text>
			<Button title='Scan Again'
				onPress={() => setScanned(false)} disabled={!scanned} 
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	barcode: {
		width: 300,
		height: 300
	},
	button: {
		width: 150,
		height: 36,
		backgroundColor: 'royalblue',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
})
