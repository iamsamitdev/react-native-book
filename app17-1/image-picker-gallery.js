import React from 'react'
import { StyleSheet, Button, Text, Image, View, Platform, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Video } from 'expo-av'

export default function ImagePickerGallery() {
    let [image, setImage] = React.useState(null)
    let [video, setVideo] = React.useState(null)

    const getPermission = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await
                ImagePicker.requestMediaLibraryPermissionsAsync()

            if (status !== 'granted') {
                Alert.alert('การเข้าใช้งานถูกปฏิเสธ')
                return <View />
            }
        }
    }

    React.useEffect(() => {
        getPermission()
    }, [])

    const pickImage = async () => {
        setImage(null)
        setVideo(null)
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All, //Images,  Videos
            allowsEditing: true
        })

        if (!result.cancelled) {
            if (result.type === 'image') {
                setImage(result.uri)
            } else if (result.type === 'video') {
                setVideo(result.uri)
            }
        }
    };

    return (
        <View style={styles.container}>
            <Button title="Pick Image or Video" onPress={pickImage} />
            <Text></Text>
            {/* ถ้าเป็นภาพ ให้แสดงด้วยคอมโพเนนต์ Image */}
            {image && <Image source={{ uri: image }} style={styles.img} />}
            {/* ถ้าเป็นวิดีโอ ให้แสดงด้วยคอมโพเนนต์ Video (Expo AV) */}
            {video && <Video source={{ uri: video }} style={styles.video} useNativeControls={true} />}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 100
    },
    img: {
        width: 240, height: 240
    },
    video: {
        width: 240,
        height: 240
    }
})