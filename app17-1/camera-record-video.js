import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, Switch } from 'react-native'
import { Camera } from 'expo-camera'
import { globalStyles } from './global-style'
import requestPermission from './camera-permission'
import { Video, Audio } from 'expo-av'   //npm install expo-av

export default function CameraRecordVideo() {
	let CONS = Camera.Constants
	let camera = React.useRef()
	let [hasPermission, setHasPermission] = React.useState(false)
	let [cameraType, setCameraType] = React.useState(Camera.Constants.Type.back)
	let [isFrontCamera, setIsFrontCamera] = React.useState(false)
	let [flashMode, setFlashMode] = React.useState()
	let [isFlashOn, setIsFlashOn] = React.useState(false)
	let [isRecording, setIsRecording] = React.useState(false)
	let [video, setVideo] = React.useState(null)

	const getPermission = async () => {
		let allow = await requestPermission()  //อยู่ในโมดูลที่สร้างเอาไว้แล้ว
		if (allow) {
			setHasPermission(allow)
			//สำหรับกรณีการบันทึกเสียงวิดีโอ 
			await Audio.requestPermissionsAsync()
			await Audio.setAudioModeAsync({
				allowsRecordingIOS: true,
				playsInSilentModeIOS: true,
			})
		}
	}

	React.useEffect(() => {
		getPermission()
	}, [])

	const recordVideo = async () => {
		if (!hasPermission) {
			Alert.alert('การเข้าใช้กล้องถูกปฏิเสธ')
			return
		}

		if (!isRecording) {
			setIsRecording(true)
			setVideo(null)
			let vdo = await camera.current.recordAsync({
				maxDuration: 30, maxFileSize: 1024 * 1024 * 10, mute: false
			})
			setVideo(vdo)
		} else {
			camera.current.stopRecording()
			setIsRecording(false)
		}
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
				onPress={recordVideo}>
				<Text style={styles.text}>
					{(!isRecording) ? 'ถ่ายวิดีโอ' : 'หยุดถ่ายวิดีโอ'}
				</Text>
			</TouchableOpacity>
			<Text></Text>
			{
				//ถ้ามีวิดีโอให้แสดงคอมโพเนนต์ Video 
				(video)
					?
					<Video source={{ uri: video && video.uri }} style={styles.video} useNativeControls={true} />
					:
					<View />
			}

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
	button: {
		width: 150,
		height: 36,
		backgroundColor: 'royalblue',
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'white'
	},
	video: {
		width: 240,
		height: 240
	}
})
