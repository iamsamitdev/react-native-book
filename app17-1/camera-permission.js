import React from 'react'
import { Camera } from 'expo-camera'

export default async function requestPermission() {
    let { status } = await Camera.requestPermissionsAsync()

    if (status === 'granted') {
        return true
    } else {
        return false
    }
}