import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import MyComponent from './my-component'
import FlexTest from './flex-test';
import CenterTextBox from './center-textbox'
import ColumnItems from './column-items'
import RowItems from './row-items'
import ListItems from './list-items'

export default function App() {
	/* 	
	การทดสอบแต่ละหัวข้อในหนังสือ 
	จะอยู่ใน comment บล็อกเดียวกัน
	ดังนั้น หากต้องการทดสอบเรื่องใด 
	ก็ให้นำ comment ของบล็อกนั้นออกไป
	แล้วไปทำ comment ในบล็อกเดิมแทน
	*/

	return (    
		<View style={styles.container}>
		<Text>Open up App.js to start working on your app!</Text>
		<StatusBar style="auto" />
		</View>
	)

	//return <MyComponent/>

	//return <FlexTest/>

	//return <CenterTextBox/>

	//return <ColumnItems />

	//return <RowItems/>

	//return <ListItems/>
}

/*
const styles = StyleSheet.create({
  container: {
	flex: 1,
	backgroundColor: '#fff',
	alignItems: 'center',
	justifyContent: 'center',
  },
});
*/