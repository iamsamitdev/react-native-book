import React from 'react'
import {
    View, StyleSheet, Text, SectionList,
    TouchableHighlight, Alert
} from 'react-native'

export default function SectionListDemo() {
    const data = [
        {
            title: 'JavaScript',
            data: [
                { name: 'Node.js', price: 300 },
                { name: 'Express.js', price: 100 },
                { name: 'React', price: 500 },
                { name: 'React Native', price: 450 },
                { name: 'Vue.js', price: 150 },
                { name: 'Angular', price: 50 },
            ]
        },
        {
            title: 'Database',
            data: [
                { name: 'MongoDB', price: 80 },
                { name: 'Mongoose', price: 60 },
            ]
        },
        {
            title: 'Mobile OS',
            data: [
                { name: 'Android', price: 400 },
                { name: 'iOS', price: 600 },
            ]
        },
        {
            title: 'Tool',
            data: [
                { name: 'Expo CLI', price: 350 },
                { name: 'Expo Snack', price: 180 },
                { name: 'VS Code', price: 100 },
            ]
        }
    ]

    const onPressItem = (data) => {
        let text = `กลุ่ม: ${data.section.title} ${'\n'}`
        text += `สินค้า: ${data.item.name} ราคา: ${data.item.price} บาท`
        Alert.alert(text)
    }

    const rendersectionListItem = (data) => {
        return (
            <TouchableHighlight onPress={() => onPressItem(data)}>
                <View key={data.item.name} style={styles.sectionListItems}>
                    <Text style={styles.sectionListItemName}>{data.item.name}</Text>
                    <Text style={styles.sectionListItemPrice}>{data.item.price}฿</Text>
                </View>
            </TouchableHighlight>
        )
    }

    const renderSectionListHeader = (data) => {
        return (
            <Text style={styles.sectionListHeader}>
                {data.section.title}
            </Text>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>รายการสินค้า</Text>
            <SectionList
                sections={data}
                renderSectionHeader={renderSectionListHeader}
                renderItem={rendersectionListItem}
                keyExtractor={(item, index) => item + index}
                style={styles.sectionList}
                contentContainerStyle={styles.sectionListContent}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    sectionList: {
        marginTop: 10
    },
    sectionListContent: {
        margin: 10,
        paddingBottom: 50
    },
    sectionListHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'brown',
        marginTop: 15,
        marginBottom: 5
    },
    sectionListItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#cde',
        marginBottom: 8,
        padding: 10
    },
    sectionListItemName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    sectionListItemPrice: {
        fontSize: 16,
        color: 'gray'
    },
})
