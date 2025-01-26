import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const App = () => {
    return (
        <SafeAreaView className='h-full bg-gray-200'>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className='h-full flex flex-row items-center justify-center'>
                    <Text className='text-3xl text-center text-black italic font-bold'>This is the home page build with expo + nativewind</Text>
                    <StatusBar backgroundColor='#161622' style='light' />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({})