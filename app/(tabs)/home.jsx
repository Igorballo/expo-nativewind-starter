import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import icons from '../../constants/icons'
import images from '../../constants/images'
import global from '../../constants/global'
import { useRouter } from 'expo-router'
const Home = () => {
    const router = useRouter();


    renderTransaction = ({ item }) => (
        console.log(item),

        <Pressable
            key={item.id}
            onPress={() => router.push("/detail-transactions")}
            className="flex flex-row items-center gap-2.5 w-full mb-4"
        >
            <View className="bg-[#F0F6F5] p-2 rounded-lg flex-none items-center justify-center w-16 h-16">
                <Image source={item.logo} resizeMethod='contain' className='w-auto h-auto' />
            </View>
            <View className="flex flex-row flex-1 items-center justify-between py-1 w-full">
                <View className="flex flex-col gap-1">
                    <Text className="text-black text-lg font-semibold">{item.company}</Text>
                    <Text className="text-gray text-sm">{item.date}</Text>
                </View>
                <Text className={`${item.type === "sent" ? "text-[#F95B51]" : "text-[#25A969]"} text-lg font-semibold`}>
                    {`${item.type === "sent" ? "-" : "+"} ${item.amount}`}
                </Text>
            </View>
        </Pressable>
    );

    renderUser = ({ item }) => (
        <View className="mr-4">
            <Image source={item.image} resizeMode='contain' className="w-20 h-20 rounded-full" />
        </View>
    )

    return (
        <SafeAreaView className='h-full bg-white'>
            <View className="w-full">
                <ImageBackground source={images.layoutBackground} resizeMode="stretch">
                    <View className='w-full h-64 px-6 pt-12'>
                        <View className='flex flex-row items-center justify-between'>
                            <View className="flex flex-col">
                                <Text className='text-sm  text-white font-medium'> Good afternoon,</Text>
                                <Text className='text-xl  text-white font-semibold'> Enjelin Morgeana</Text>
                            </View>
                            <View className='bg-[#429690] p-2 rounded-xl'>
                                <TouchableOpacity
                                    onPress={() => { console.log("pressed") }}
                                    activeOpacity={0.8}
                                    className=''
                                >
                                    <Image source={icons.bell} resizeMode='contain' className="w-8 h-8" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View className='bg-primary-100 shadow-3xl rounded-xl mx-6 -mt-32 p-6 flex flex-col gap-8'>
                    <View className='flex flex-row justify-between'>
                        <View className="">
                            <Text className='text-base text-white font-semibold mb-2'>Total Balance</Text>
                            <Text className='text-3xl text-white font-bold'>$ 2,548.00</Text>
                        </View>
                        <Image source={icons.menu} resizeMode='contain' className="w-8 h-8" />
                    </View>
                    <View className="flex flex-row justify-between">
                        <View className="flex flex-col gap-1.5">
                            <View className="flex flex-row items-center gap-2">
                                <Image source={icons.downarrow} resizeMode='contain' className="" />
                                <Text className="text-[#D0E5E4] font-medium text-base">Income</Text>
                            </View>
                            <Text className="ml-1.5 text-white font-semibold text-xl">$ 1,840.00</Text>
                        </View>
                        <View className="flex flex-col gap-1.5 justify-end items-end">
                            <View className="flex flex-row items-center gap-2">
                                <Image source={icons.uparrow} resizeMode='contain' className="" />
                                <Text className="text-[#D0E5E4] font-medium text-base">Expenses</Text>
                            </View>
                            <Text className=" text-white text-right font-semibold text-xl">$ 284.00</Text>
                        </View>
                    </View>

                </View>
            </View>

            <View className="m-6 flex flex-col gap-4">
                <View className="flex flex-col gap-4">
                    <View className="flex flex-row justify-between w-full">
                        <Text className="text-black text-xl font-bold">Transactions  history</Text>
                        <Text className="text-[#666666] text-base">See all</Text>
                    </View>

                    <View className="w-full flex flex-col">
                        <FlatList
                            data={global.transactions}
                            renderItem={({ item }) => (
                                renderTransaction({ item })
                            )}
                        />
                    </View>
                </View>
                <View className="flex flex-col gap-4">
                    <View className="flex flex-row justify-between w-full">
                        <Text className="text-black text-xl font-bold">Send Again</Text>
                        <Text className="text-[#666666] text-base">See all</Text>
                    </View>

                    <View className="w-full flex flex-row">
                        <FlatList
                            data={global.users}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ paddingHorizontal: 10 }}
                            renderItem={({ item }) => (
                                renderUser({ item })
                            )}
                            nestedScrollEnabled={true}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default Home

const styles = StyleSheet.create({})