import React from 'react'
import {
	View, StyleSheet, Alert, Text,
	TouchableOpacity, Modal, Button, TextInput
} from 'react-native'

export default function ModalDemo() {
	let [modalVisible, setModalVisible] = React.useState(false)
	let [textPassword, setTextPassword] = React.useState('')

	return (
		/* คอนเท็นเพนอร์ของเพจ */
		<View style={styles.container}>
			<Modal style={styles.modal}
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onShow={() => setTextPassword('')}
				onRequestClose={() => setModalVisible(!modalVisible)}
			>
				{/* Modal Container & Modal Content */}
				<View style={styles.container}>
					<View style={styles.modalView}>
						<Text style={{ fontSize: 18 }}>รหัสผ่าน</Text>
						<TextInput style={styles.inputPassword}
							defaultValue={textPassword}
							secureTextEntry={true}
							onChangeText={t => setTextPassword(t)}
						/>
						<TouchableOpacity activeOpacity={0.25}
							style={styles.modalButton}
							onPress={() => {
								Alert.alert('รหัสผ่าน: ', textPassword, [
									{ title: 'OK', onPress: () => { setModalVisible(!modalVisible) } }
								])
							}}
						><Text style={styles.modalButtonText}>OK</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
			{/* ปุ่มสำหรับคลิกเพื่อเรียก Modal ขึ้นมาแสดง */}
			<Button title="Show Modal" onPress={
				() => { setModalVisible(true) }
			} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 50
	},
	modalView: {
		width: 250,
		backgroundColor: '#cde',
		borderRadius: 10,
		padding: 20
	},
	inputPassword: {
		height: 32,
		borderWidth: 1,
		borderColor: 'lightgray',
		backgroundColor: 'white',
		marginTop: 5,
		marginBottom: 15
	},
	modalButton: {
		width: 60,
		height: 34,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'center',
		borderRadius: 15,
		backgroundColor: 'royalblue',
		padding: 5
	},
	modalButtonText: {
		fontSize: 16,
		color: 'white'
	},
})
