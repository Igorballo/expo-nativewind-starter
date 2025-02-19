import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '../../../constants/images'
import icons from '../../../constants/icons'
import { useLocalSearchParams, useRouter } from 'expo-router'
import global from '../../../constants/global'


const DetailTransactions = () => {
    const { id } = useLocalSearchParams();
    const router = useRouter();
    const transaction = global.transactions.find((transaction) => transaction.id === parseInt(id));

    return (
        <SafeAreaView className="bg-white w-full h-full">
            <View className="w-full">
                <ImageBackground source={images.layoutBackground} resizeMode="stretch">
                    <View className='w-full h-64 px-6 pt-12'>
                        <View className='flex flex-row items-center justify-between'>
                            <TouchableOpacity
                                onPress={() => router.back()}
                                activeOpacity={0.8}
                                className=''
                            >
                                <Image source={icons.arrow} resizeMode='contain' className="-rotate-90 w-4 h-4" />
                            </TouchableOpacity>

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
                            <Image source={transaction.logo} resizeMode='contain' className="rounded-full w-12 h-12" />
                        </View>
                        {transaction.type === 'sent' && (<View className="bg-red-50 rounded-full px-8 py-2">
                            <Text className="text-[#F95B51] text-sm font-medium">Expense</Text>
                        </View>)}
                        {transaction.type === 'received' && (<View className="bg-green-50 rounded-full px-8 py-2">
                            <Text className="text-primary-100 text-sm font-medium">Income</Text>
                        </View>)}
                        <Text className="text-2xl font-semibold">{transaction.type === 'sent' ? transaction.earning : transaction.amount}</Text>
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
                                    {transaction.type === "sent" && <Text className="font-bold text-base text-[#F95B51]">Expense</Text>}
                                    {transaction.type === "received" && <Text className="font-bold text-base text-primary-100">Income</Text>}
                                </View>
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">From</Text>
                                    <Text className="font-bold text-base text-black"> {transaction.from} </Text>
                                </View>
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">Time</Text>
                                    <Text className="font-bold text-base text-black"> {transaction.time} </Text>
                                </View>
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">Date</Text>
                                    <Text className="font-bold text-base text-black"> {transaction.date} </Text>
                                </View>
                            </View>
                            <View className="border-y-2 border-[#DDDDDD] py-6 gap-2">
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">{transaction.type === 'sent' ? 'Spending' : 'Earnings'} </Text>
                                    <Text className="font-bold text-base text-black"> {transaction.amount} </Text>
                                </View>
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">Fee</Text>
                                    <Text className="font-bold text-base text-black"> {transaction.fee} </Text>
                                </View>
                            </View>
                            <View className="py-6">
                                <View className="flex flex-row w-full justify-between">
                                    <Text className="font-medium text-base text-[#666666]">Total</Text>
                                    <Text className="font-bold text-base text-black"> {transaction.total} </Text>
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