import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Camera } from 'expo-camera'
import requestPermission from './camera-permission'

export default function CameraFlashTorch() {
	let [hasPermission, setHasPermission] = React.useState()
	let [isTorchOn, setIsTorchOn] = React.useState(false)
	let [bgColor, setBgColor] = React.useState('royalblue')

	React.useEffect(() => {
		setHasPermission(requestPermission())
	}, [])

	return (
		<View style={styles.container}>
			<Camera type={null} flashMode={
				(isTorchOn)
					? Camera.Constants.FlashMode.torch
					: Camera.Constants.FlashMode.off
			} />
			<Text></Text>
			<TouchableOpacity
				style={[styles.button, { backgroundColor: `${bgColor}` }]}
				onPress={() => {
					if (!hasPermission) {
						Alert.alert('การเข้าใช้กล้องถูกปฏิเสธ')
						return
					}
					setBgColor((isTorchOn) ? 'royalblue' : 'red')
					setIsTorchOn(!isTorchOn)
				}
				}>

				<Text style={styles.text}>
					{(isTorchOn) ? 'ปิด' : 'เปิด'}
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: 150,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 200,
	},
	text: {
		fontSize: 50,
		color: 'aqua'
	}
})

