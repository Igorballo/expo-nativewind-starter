import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

const SplashScreen = () => {
    return (
        <View className='bg-primary-100 h-full flex flex-row items-center justify-center'>
            <Text className='text-5xl text-center text-white font-bold'>Mono</Text>
            <StatusBar style='light' />
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})