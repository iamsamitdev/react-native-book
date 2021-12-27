import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import Home from './home'
import About from './about'
import Contact from './contact'
import Setting from './setting'
import PersonalInfo from './personal-info'
import TabHome from './tab-home'
import TabProduct from './tab-product'
import TabMenu from './tab-menu'
import TabCart from './tab-cart'
import TabStackProduct from './tab-stack-product'
import TabStackProductDetail from './tab-stack-product-detail'
import TabStackMember from './tab-stack-member'
import TabStackMemberSignup from './tab-stack-member-signup'
import { cartContext } from './tab-cart-context'


export default function App() {
	/* 	
	การทดสอบแต่ละหัวข้อในหนังสือ 
	จะอยู่ใน comment บล็อกเดียวกัน
	ดังนั้น หากต้องการทดสอบเรื่องใด 
	ก็ให้นำ comment ของบล็อกนั้นออกไป
	แล้วไปทำ comment ในบล็อกเดิมแทน
	*/

	/*
	const Stack = createStackNavigator()
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="About" component={About} />
				<Stack.Screen name="Contact" component={Contact} />
			</Stack.Navigator>
		</NavigationContainer>
	)
	*/

	/*
	const Stack = createStackNavigator()
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen name="Home" component={Home}
					options={{ headerTitle: 'หน้าแรก' }}
				/>

				<Stack.Screen name="About" component={About}
					options={{ headerTitle: 'เกี่ยวกับเรา', headerBackTitle: ' ' }}
				/>

				<Stack.Screen name="Contact" component={Contact}
					options={{ headerTitle: 'ติดต่อเรา', headerBackTitle: ' ' }}
				/>

				<Stack.Screen name="PersonalInfo" component={PersonalInfo}
					options={{ headerTitle: 'ข้อมูลส่วนตัว', headerBackTitle: ' ' }}
				/>

				<Stack.Screen name="Setting" component={Setting}
					options={{ headerTitle: 'ตั้งค่า', headerBackTitle: ' ' }}
				/>

			</Stack.Navigator>
		</NavigationContainer>
	)
	*/

	//สร้าง Stack สำหรับเลื่อนระหว่างหน้าจอกลุ่มในกลุ่ม Product  
	const ProductStack = () => {
		const Product = createStackNavigator()
		return (
			<Product.Navigator>
				<Product.Screen name="TabStackProduct" component={TabStackProduct}
					options={{ headerTitle: 'รายการสินค้า' }}
				/>
				<Product.Screen name="TabStackProductDetail" component={TabStackProductDetail}
					options={{ headerTitle: 'รายละเอียดสินค้า', headerBackTitle: ' ' }}
				/>
			</Product.Navigator>
		)
	}
	
	//สร้าง Stack สำหรับเลื่อนระหว่างหน้าจอกลุ่มในกลุ่ม Member
	const MemberStack = () => {
		const Member = createStackNavigator()
		return (
			<Member.Navigator>
				<Member.Screen name="TabStackMember" component={TabStackMember}
					options={{ headerTitle: 'สมาชิก' }}
				/>
				<Member.Screen name="TabStackMemberSignup" component={TabStackMemberSignup}
					options={{ headerTitle: 'สมัครสมาชิก', headerBackTitle: ' ' }}
				/>
			</Member.Navigator>
		)
	}

	//สร้าง Bottom Navigation
	let [cart, setCart] = React.useState()

	const Tab = createBottomTabNavigator()
	return (
		<cartContext.Provider value={[cart, setCart]}>
			<NavigationContainer>
				<Tab.Navigator tabBarOptions={{
					labelStyle: { fontSize: 14 },
					showLabel: true,
					activeTintColor: 'brown',
					inactiveTintColor: 'blue'
				}}>

					<Tab.Screen name="TabHome" component={TabHome} options={{
						tabBarLabel: 'หน้าแรก',
						tabBarIcon: ({ color, size }) => {
							return <Ionicons name="md-home" size={18} color={color} />
						}
					}} />

					{/* ปุ่ม สินค้า ต้องเชื่อมโยงไปยังกลุ่ม Product */}
					<Tab.Screen name="ProductStack" component={ProductStack} options={{
						tabBarLabel: 'สินค้า',
						tabBarIcon: ({ color, size }) => {
							return <Ionicons name="basket" size={20} color={color} />
						}
					}} />

					<Tab.Screen name="TabCart" component={TabCart} options={{
						tabBarLabel: 'รถเข็น',
						tabBarIcon: ({ color, size }) => {
							return <Ionicons name="cart" size={20} color={color} />
						},
						tabBarBadge: cart
					}} />

					{/* ปุ่ม สมาชิก ต้องเชื่อมโยงไปยังกลุ่ม Member */}
					<Tab.Screen name="MemberStack" component={MemberStack} options={{
						tabBarLabel: 'สมาชิก',
						tabBarIcon: ({ color, size }) => {
							return <Ionicons name="person" size={18} color={color} />
						}
					}} />

					<Tab.Screen name="TabMenu" component={TabMenu} options={{
						tabBarLabel: 'เมนู',
						tabBarIcon: ({ color, size }) => {
							return <Ionicons name="menu" size={20} color={color} />
						}
					}} />

				</Tab.Navigator>
			</NavigationContainer>
		</cartContext.Provider>
	)
	
}

