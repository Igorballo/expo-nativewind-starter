import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const ButtonText = ({ icon, title, link }) => {
    const router = useRouter();
    return (
        <View className="flex flex-col items-center gap-2">
            <TouchableOpacity
                onPress={() => { router.push(link) }}
                activeOpacity={0.8}
                className='w-14 h-14 rounded-full border border-primary-100 p-4 flex flex-row justify-center items-center'
            >
                <Image source={icon} resizeMode='contain' className="w-6 h-6" />
            </TouchableOpacity>
            <Text className="text-sm">{title} </Text>
        </View>
    )
}

export default ButtonText

const styles = StyleSheet.create({})