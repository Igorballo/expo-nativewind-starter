import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const ProfileLink = ({ icon, title, link }) => {
    const router = useRouter();
    return (
        <TouchableOpacity
            onPress={() => { router.push(link) }}
            activeOpacity={0.8}
            className='p-2 flex flex-row items-center justify-between'
        >
            <View className='flex flex-row items-center gap-4'>
                <Image source={icon} resizeMode='contain' />
                <Text className='text-base text-black font-medium'>{title}</Text>
            </View>
        </TouchableOpacity>

    )
}

export default ProfileLink

const styles = StyleSheet.create({})