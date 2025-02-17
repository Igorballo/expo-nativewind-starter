import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { SplashScreen } from './splash-screen'
import { Link, router, useRouter } from 'expo-router'
import images from '../constants/images'

const App = () => {
    const router = useRouter();
    return (
        <SafeAreaView className='h-full bg-white'>
            <ScrollView className='h-full'>
                <View className='relative'>
                    <Image
                        className='w-full'
                        source={images.onboardingBackground}
                        resizeMode='contain'
                    />
                    <Image
                        className='absolute inset-x-0 bottom-0 w-full'
                        source={images.onboardingUser}
                        resizeMode='contain'
                    />
                </View>
                <View className='mt-4 flex flex-col items-center justify-center '>
                    <Text className='text-4xl text-primary-200 font-bold'>Spend Smarter</Text>
                    <Text className='text-4xl text-primary-200 font-bold'>Save More</Text>
                </View>
                <View className='mt-4 mx-6'>
                    <TouchableOpacity
                        onPress={() => { router.push("/home") }}
                        activeOpacity={0.8}
                        className='bg-primary-100 rounded-full min-h-[62px] flex flex-row justify-center items-center'
                    >
                        <Text className=' text-white text-lg font-semibold'>
                            Get Started
                        </Text>
                    </TouchableOpacity>
                </View>
                <View className="flex justify-center mt-4 flex-row gap-2">
                    <Text className="text-sm text-gray-7s00 font-pregular">
                        Already Have Account?
                    </Text>
                    <Link
                        href="/sign-in"
                        className="text-sm text-primary-100"
                        styles={{ textDecorationLine: "underline" }}
                    >
                        Log In
                    </Link>
                </View>
                <StatusBar backgroundColor='black' style='light' />
            </ScrollView>
        </SafeAreaView>
    )
}

export default App

const styles = StyleSheet.create({})