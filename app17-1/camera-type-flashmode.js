import React from 'react'
import { StyleSheet, Text, View, Switch } from 'react-native'
import { globalStyles } from './global-style'
import { Camera } from 'expo-camera'
import requestPermission from './camera-permission'

export default function CameraTypeFlashMode() {
	let [cameraType, setCameraType] = React.useState()
	let [isFrontCamera, setIsFrontCamera] = React.useState(false)
	let [flashMode, setFlashMode] = React.useState()
	let [isFlashOn, setIsFlashOn] = React.useState(false)

	React.useEffect(() => {
		requestPermission()   //ตรวจสอบ Permission
	}, [])

	const switchCameraType = (v) => {
		//ถ้า Switch เป็น on ให้ใช้กล้องหน้า ถ้าเป็น off ใช้กล้องหลัง
		let t = (v)
			? Camera.Constants.Type.front
			: Camera.Constants.Type.back

		setCameraType(t)
		setIsFrontCamera(v)
	}

	const switchFlashMode = (v) => {
		//ถ้า Switch เป็น on ให้ใช้แฟลช ถ้าเป็น off ไม่ใช้แฟลช
		let f = (v)
			? Camera.Constants.FlashMode.on
			: Camera.Constants.FlashMode.off

		setFlashMode(f)
		setIsFlashOn(v)
	}

	return (
		<View style={globalStyles.container}>
			<Camera style={styles.camera} type={cameraType} flashMode={flashMode} />
			<Text></Text>
			<View style={styles.typeFlashContainer}>
				<View style={styles.textSwitchContainer}>
					<Text style={styles.text}>กล้องหน้า  </Text>
					<Switch value={isFrontCamera} onValueChange={switchCameraType} />
				</View>
				<View style={styles.textSwitchContainer}>
					<Text style={styles.text}>Flash  </Text>
					<Switch value={isFlashOn} onValueChange={switchFlashMode} />
				</View>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	camera: {
		width: 240,
		height: 240
	},
	typeFlashContainer: {
		width: 320,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	textSwitchContainer: {
		flexDirection: 'row'
	},
	text: {
		fontSize: 18
	}
})
