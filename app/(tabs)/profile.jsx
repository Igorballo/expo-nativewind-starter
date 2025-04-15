import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import icons from '../../constants/icons'
import { useRouter } from 'expo-router'
import ProfileLink from '../../components/ProfileLink'

const Profile = () => {
    const router = useRouter();
    return (
        <SafeAreaView className="bg-white w-full h-full">
            <View className="w-full">
                <ImageBackground source={images.layoutBackground} resizeMode="stretch">
                    <View className='w-full h-64 px-6 pt-12'>
                        <View className='flex flex-row items-center justify-between'>
                            <Image source={icons.arrow} resizeMode='contain' className="-rotate-90 w-4 h-4" />
                            <Text className='text-xl  text-white font-semibold'> Profile </Text>

                            <View className='bg-[#429690] p-2 rounded-xl'>
                                <TouchableOpacity
                                    onPress={() => { console.log("pressed") }}
                                    activeOpacity={0.8}
                                    className=''
                                >
                                    <Image source={icons.bell} resizeMode='contain' className="w-6 h-6" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View className='-mt-24 p-6 flex flex-row justify-center'>
                    <View className='flex flex-col justify-center'>
                        <Image source={images.avatar} resizeMode='contain' className="rounded-full w-40 h-40" />
                        <View >
                            <Text className='text-xl text-center text-black font-semibold mb-1'>Enjelin Morgeana</Text>
                            <Text className='text-sm text-center text-[#438883] font-bold'>@enjelin_morgeana</Text>
                        </View>
                    </View>
                </View>

                <View className="flex flex-col gap-4 px-10 mt-2">
                    <View className="border-b border-[#EEEEEE] pb-4">
                        <TouchableOpacity
                            // onPress={() => { router.push('/home') }}
                            activeOpacity={0.8}
                            className='flex flex-row items-center justify-between'
                        >
                            <View className='flex flex-row items-center gap-4'>
                                <View className="bg-[#F0F6F5] rounded-full h-[50px] w-[50px] flex items-center justify-center">
                                    <Image source={icons.diamond} resizeMode='contain' className="w-8 h-8" />
                                </View>
                                <Text className='text-base text-black font-medium'>Invite Friends</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View className="flex flex-col gap-4 ml-1.5">
                        <ProfileLink icon={icons.user} title="Account info" link="/home" />
                        <ProfileLink icon={icons.users} title="Personal profile" link="/home" />
                        <ProfileLink icon={icons.mail} title="Message center" link="/home" />
                        <ProfileLink icon={icons.badge} title="Login and security" link="/home" />
                        <ProfileLink icon={icons.lock} title="Data and privacy" link="/home" />
                    </View>

                </View>
            </View>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})