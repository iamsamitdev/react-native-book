import React from 'react';
import { Text, View, Button, StyleSheet, Alert } from 'react-native'
import NetInfo from '@react-native-community/netinfo'
import { globalStyles } from './global-style';

export default function NetInfoDemo() {
	let [isConnected, setIsConnected] = React.useState()
	let [connectionType, setConnectionType] = React.useState()

	React.useEffect(() => {
		NetInfo.addEventListener(state => {
			setIsConnected(state.isConnected)
			setConnectionType(state.type)
		})
	})

	const checkConnection = () => {
		NetInfo.fetch().then(state => {
			let text = 'ไม่มีการเชื่อมต่อ'
			if (state.isConnected) {
				text = 'ชนิดการเชื่อมต่อ: ' + state.type
			}
			Alert.alert(text)
		})
	}

	return (
		<View style={globalStyles.container}>
			<Text style={{ fontSize: 18 }}>
				{
					(isConnected)
						? 'ชนิดการเชื่อมต่อ: ' + connectionType
						: 'ไม่มีการเชื่อมต่อ'
				}
			</Text>

			{/* แนวทางการตรวจสอบอีกวิธีหนึ่ง */}
			<Text></Text>
			<Button title="ตรวจสอบการเชื่อมต่อ" onPress={checkConnection} />
		</View>
	)
}