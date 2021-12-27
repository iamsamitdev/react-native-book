
import { StyleSheet, Platform } from "react-native"

export const globalStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#ecf0f1',
		padding: 8,
		...Platform.select({
			ios: { paddingTop: 30 },
			android: { paddingTop: 45 }
		})
	}
})
