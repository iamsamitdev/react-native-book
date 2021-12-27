import React from 'react'
import { Text, View, StyleSheet, Dimensions, useWindowDimensions } from 'react-native'
import { globalStyles } from './global-style'

export default function WindowDimension() {
	const dim = Dimensions.get('window')
	const w1 = parseInt(dim.width)
	const h1 = parseInt(dim.height)

	const w2 = parseInt(useWindowDimensions().width)
	const h2 = parseInt(useWindowDimensions().height)

	return (
		<View style={globalStyles.container}>
			<Text style={{ fontSize: 18 }}>
				Width: {'\n'}
				Dimensions {'=>'} {w1}, {'\n'}
				useWindowDimensions {'=>'} {w2} {'\n\n'}

				Height: {'\n'}
				Dimensions {'=>'} {h1}, {'\n'}
				useWindowDimensions {'=>'} {h2} {'\n'}
			</Text>
		</View>
	)
}