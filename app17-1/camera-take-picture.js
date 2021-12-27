import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Switch, Image } from 'react-native'
import { Camera } from 'expo-camera'
import { globalStyles } from './global-style'
import requestPermission from './camera-permission'

export default function CameraTakePicture() {
	let CONS = Camera.Constants
	let camera = React.useRef()
	let [hasPermission, setHasPermission] = React.useState()
	let [cameraType, setCameraType] = React.useState()
	let [isFrontCamera, setIsFrontCamera] = React.useState(false)
	let [flashMode, setFlashMode] = React.useState()
	let [isFlashOn, setIsFlashOn] = React.useState(false)
	let [picture, setPicture] = React.useState()

	React.useEffect(() => {
		setHasPermission(requestPermission())
	}, [])

	const takePicture = async () => {
		if (!hasPermission) {
			Alert.alert('การเข้าใช้กล้องถูกปฏิเสธ')
			return
		}

		let pic = await camera.current.takePictureAsync({
			quality: 1, base64: true
		})

		setPicture(pic)
	}

	const switchCameraType = (v) => {
		setCameraType((v) ? CONS.Type.front : CONS.Type.back)
		setIsFrontCamera(v)
	}

	const switchFlashMode = (v) => {
		setFlashMode((v) ? CONS.FlashMode.on : CONS.FlashMode.off)
		setIsFlashOn(v)
	}

	return (
		<View style={globalStyles.container}>
			<Camera style={styles.camera} type={cameraType} flashMode={flashMode} ref={camera} />
			<Text></Text>
			<View style={styles.typeFlashContainer}>
				<View style={styles.textSwitchContainer}>
					<Text style={styles.textSwitch}>กล้องหน้า  </Text>
					<Switch value={isFrontCamera} onValueChange={switchCameraType} />
				</View>
				<View style={styles.textSwitchContainer}>
					<Text style={styles.textSwitch}>Flash  </Text>
					<Switch value={isFlashOn} onValueChange={switchFlashMode} />
				</View>
			</View>
			<Text></Text>
			<TouchableOpacity
				style={styles.button}
				onPress={takePicture}>
				<Text style={styles.textButton}>ถ่ายภาพ</Text>
			</TouchableOpacity>
			<Text></Text>
			<Image source={{ uri: picture && picture.uri }} style={styles.img} />
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
		flexDirection: 'row',
		alignItems: 'center'
	},
	textSwitch: {
		fontSize: 18
	},
	button: {
		width: 150,
		height: 36,
		backgroundColor: 'royalblue',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	textButton: {
		color: 'white',
		fontSize: 18
	},
	img: {
		width: 240,
		height: 240
	}
})
