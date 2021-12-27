import React from 'react'
import { View, StyleSheet, Platform, Alert, Text, FlatList } from 'react-native'

export default function ApiFlatList() {
    let [data, setData] = React.useState([])
    let host = (Platform.OS == 'android') ? '10.0.2.2' : 'localhost'

    React.useEffect(() => {
        fetch(`http://${host}:8000/api/read-data`)
            .then(response => response.json())
            .then(result => setData(result))
            .catch(err => Alert.alert(err))
    }, [])

    const renderFlatListItem = (data) => {
        return (
            <View key={data._id} style={styles.flatListItems}>
                <Text style={styles.itemName}>{data.item.name}</Text>
                <Text style={styles.itemPrice}>{data.item.price}฿</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>รายการสินค้า</Text>
            <FlatList data={data} renderItem={renderFlatListItem}
                keyExtractor={(item, index) => item + index}
                style={styles.flatList}
                contentContainerStyle={styles.flatListContent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    flatList: {
        marginTop: 10
    },
    flatListContent: {
        margin: 10,
        paddingBottom: 50
    },
	flatListItems: {
		flexDirection: 'row', 
        justifyContent: 'space-between',
		backgroundColor: '#cde', 
        marginBottom: 8, 
        padding: 10
	},
    itemName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    itemPrice: {
        fontSize: 16,
        color: 'gray'
    },
})