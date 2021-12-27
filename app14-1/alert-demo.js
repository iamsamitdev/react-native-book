import React from 'react'
import { View, StyleSheet, Button, Alert } from 'react-native'

export default function AlertDemo() {

  const onPressButton1 = () => {
    Alert.alert(
      'การตรวจสอบเวอร์ชันแอป',
      'แอปของท่านเป็นเวอร์ชันล่าสุดแล้ว',
      [
        {
          text: 'ตกลง',
          onPress: () => { }
        }
      ]
    )
  }

  const onPressButton2 = () => {
    Alert.alert(
      'ยินยันการลบแอป',
      'ท่านต้องการลบแอปนี้จริงหรือไม่',
      [
        {
          text: 'ตกลง',
          onPress: () => { }
        },
        {
          text: 'ยกเลิก',
          onPress: () => { }
        }
      ]
    )
  }

    const onPressButton3 = () => {
    Alert.alert(
      'อัปเดตแอป',
      'มีแอปเวอร์ชันที่ใหม่กว่า ต้องการอัปเดตตอนนี้หรือไม่',
      [
        {
          text: 'ตกลง',
          onPress: () => { }
        },
        {
          text: 'ภายหลัง',
          onPress: () => { }
        }, 
        {
          text: 'ยกเลิก',
          onPress: () => { }
        }
      ]
    )
  }

    return (
		<View style={styles.container}>
			<View style={styles.items}>
        <Button title="Alert แบบ 1 ปุ่ม" onPress={onPressButton1} />
			</View>
			<View style={styles.items}>
        <Button title="Alert แบบ 2 ปุ่ม" onPress={onPressButton2} />
			</View>
			<View style={styles.items}>
        <Button title="Alert แบบ 3 ปุ่ม" onPress={onPressButton3} />
			</View>
		</View>
	)    
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 70,
		marginLeft: 20,
		marginRight: 20
	},
	items: {
		marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
	},
})
