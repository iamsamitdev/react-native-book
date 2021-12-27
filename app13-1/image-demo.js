import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function ImageDemo() {
    const imgSrc = require('./react-logo.png')
    const resizeModes = ['cover', 'contain', 'stretch', 'center']

    return (
        <View style={styles.container}>
            {
                resizeModes.map((mode, i) => {
                    return (
                        <View style={styles.items}>
                            <Image key={i} source={imgSrc} resizeMode={mode} style={styles.img} />
                            <Text style={{ fontSize: 16 }}>{mode}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        marginTop: 70
    },
    items: {
        marginBottom: 20,
    },
    img: {
        width: 140,
        height: 140,
        borderWidth: 1,
        borderColor: 'red',
    }
})
