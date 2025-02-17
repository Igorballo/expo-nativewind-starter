import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../constants/images'
import icons from '../../constants/icons'

const DetailTransactions = () => {
    return (
        <SafeAreaView className="bg-white w-full h-full">
            <View className="w-full">
                <ImageBackground source={images.layoutBackground} resizeMode="stretch">
                    <View className='w-full h-64 px-6 pt-12'>
                        <View className='flex flex-row items-center justify-between'>
                            <Image source={icons.arrow} resizeMode='contain' className="-rotate-90 w-4 h-4" />
                            <Text className='text-xl  text-white font-semibold'> Transaction Details </Text>

                            <TouchableOpacity
                                onPress={() => { console.log("pressed") }}
                                activeOpacity={0.8}
                                className=''
                            >
                                <Image source={icons.menu} resizeMode='contain' className="w-6 h-6" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>

                <View className='-mt-24 px-6 pt-12 flex flex-col justify-center bg-white rounded-t-3xl'>
                    <View className='flex flex-col gap-4 justify-center items-center '>
                        <View className="bg-[#FAFAFA] p-4 rounded-full flex-none items-center justify-center ">
                            <Image source={icons.upwork1} resizeMode='contain' className="rounded-full" />
                        </View>
                        <View className="bg-[#FAFAFA] rounded-full px-8 py-2">
                            <Text className="text-primary-100 text-sm font-medium">Income</Text>
                        </View>
                        <Text className="text-2xl font-semibold">$ 850.00</Text>
                    </View>

                    <View className="mt-8 px-2">
                        <View className="flex w-full justify-between">
                            <Text className="text-base font-medium">Transaction details</Text>
                            <Image source={icons.arrow} resizeMode='contain' />
                        </View>
                        <View>
                            <View className="flex flex-col gap-2 pb-6 mt-2 w-full">
                                <View className="flex flex-row w-full justify-between ">
                                    <Text className="font-medium text-base text-[#666666]">Status</Text>
                                    <Text className="font-semibold text-base text-primary-100">Income</Text>
                                </View>
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">From</Text>
                                    <Text className="font-semibold text-base text-black">Upwork Escrow</Text>
                                </View>
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">Time</Text>
                                    <Text className="font-semibold text-base text-black">10:00 AM</Text>
                                </View>
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">Date</Text>
                                    <Text className="font-semibold text-base text-black">Feb 30, 2022</Text>
                                </View>
                            </View>
                            <View className="border-y-2 border-[#DDDDDD] py-6">
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">Earnings</Text>
                                    <Text className="font-semibold text-base text-black">$ 870.00</Text>
                                </View>
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">Fee</Text>
                                    <Text className="font-semibold text-base text-black">- $ 20.00</Text>
                                </View>
                            </View>
                            <View className="py-6">
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">Total</Text>
                                    <Text className="font-semibold text-base text-black">$ 850.00</Text>
                                </View>
                            </View>

                            <View className='mt-4'>
                                <TouchableOpacity
                                    onPress={() => { router.push("/home") }}
                                    activeOpacity={0.8}
                                    className='border border-primary-100  rounded-full min-h-[62px] flex flex-row justify-center items-center'
                                >
                                    <Text className=' text-primary-100 text-lg font-semibold'>
                                        Download Receipt
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DetailTransactions

const styles = StyleSheet.create({})