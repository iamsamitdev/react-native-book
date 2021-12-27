import React from 'react'
import { StyleSheet, Button, Text, Image, View, Platform, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { Video } from 'expo-av'

export default function ImagePickerCamera() {
    let [image, setImage] = React.useState(null)
    let [video, setVideo] = React.useState(null)

    const getPermission = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraPermissionsAsync()
            if (status !== 'granted') {
                Alert.alert('การเข้าใช้งานถูกปฏิเสธ')
                return <View/>
            }
        }
    }

    React.useEffect(() => {
        getPermission()
    }, [])

    const launchCamera = async (type) => {
        setImage(null)
        setVideo(null)

        let t = (type === 'image') 
                ? ImagePicker.MediaTypeOptions.Images
                : ImagePicker.MediaTypeOptions.Videos

        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: t,
            //allowsEditing: true,
            //quality: 1,
            //videoMaxDuration: 10
        })

        if (!result.cancelled) {
            if (result.type === 'image') {
                setImage(result.uri)
            } else if (result.type === 'video') {
                setVideo(result.uri)
            }

            //result.cancelled (true/false), result.type, 
            //result.width, result.height, 
            //duration (video)
        }
    };

    return (
        <View style={styles.container}>
            <Button title="ถ่ายภาพ" onPress={() => launchCamera('image')}/>
            <Text></Text>
            <Button title="ถ่ายวิดีโอ" onPress={() => launchCamera('video')}/>
            <Text></Text>
            {image && <Image source={{ uri: image }} style={styles.img}/>}
            {video && <Video source={{ uri: video }} style={styles.video} useNativeControls={true}/>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 100
    },
    img: {
        width: 320, height: 240
    },
    video: {
        width: 240,
        height: 240
    }
})