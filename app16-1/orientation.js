import React from 'react'
import { Text, View, useWindowDimensions } from 'react-native'
import { globalStyles } from './global-style'
import * as ScreenOrientation from 'expo-screen-orientation'

export default function ScreenOrientationDemo() {
	let [orietationText, setOrientationText] = React.useState('')
	let windowWidth = parseInt(useWindowDimensions().width)
	let windowHeight = parseInt(useWindowDimensions().height)

	const setScreenOrientation = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.ALL
			//DEFAULT, PORTRAIT, PORTRAIT_UP, PORTRAIT_DOWN, 
			//LANDSCAPE, LANDSCAPE_LEFTLANDSCAPE_RIGHT
		)
	}

	React.useEffect(() => {
		setScreenOrientation()
	}, [])

	const getOrientation = async () => {
		let ort_text = [
			'Portrait_Up', 'Portrait_Down', 'Landscape_Right', 'Landscape_Left'
		]

		let ort = await ScreenOrientation.getOrientationAsync()
		let text = ort_text[ort - 1]  //ลบ 1 เพื่อให้ตรงกับลำดับอาร์เรย์
		setOrientationText(text)
	}

	ScreenOrientation.addOrientationChangeListener(getOrientation)

	getOrientation()

	return (
		<View style={globalStyles.container}>
			<Text style={{ fontSize: 18 }}>Orientation: {orietationText}</Text>
			<Text>{'\n'}
				Window Width: {windowWidth} {'\n'}
				Window Height: {windowHeight}
			</Text>
		</View>
	)
}