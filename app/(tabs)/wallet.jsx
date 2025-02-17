import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import icons from '../../constants/icons'
import images from '../../constants/images'
import ButtonText from '../../components/ButtonText'
import global from '../../constants/global'

const Wallet = () => {
    const router = useRouter();

    const [activeTab, setActiveTab] = useState("tab-1");

    const toggleTab = (tab) => {
        setActiveTab(tab);
    }

    renderUpcomingBills = ({ item }) => (
        <View className="flex flex-row items-center gap-2.5 w-full mb-4">
            <View className="bg-[#F0F6F5] p-2 rounded-lg flex-none items-center justify-center w-16 h-16">
                <Image source={item.logo} resizeMethod='contain' className='w-auto h-auto' />
            </View>
            <View className="flex flex-row flex-1 items-center justify-between py-1 w-full">
                <View className="flex flex-col gap-1">
                    <Text className="text-black text-lg font-semibold">{item.company}</Text>
                    <Text className="text-gray text-sm">{item.date}</Text>
                </View>

                <TouchableOpacity className="px-10 py-2.5 rounded-3xl bg-[#ECF9F8] text-primary-100 text-center text-base font-medium">
                    <Text>Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="bg-white w-full h-full">
            <View className="w-full">
                <ImageBackground source={images.layoutBackground} resizeMode="stretch">
                    <View className='w-full h-64 px-6 pt-12'>
                        <View className='flex flex-row items-center justify-between'>
                            <Image source={icons.arrow} resizeMode='contain' className="-rotate-90 w-4 h-4" />
                            <Text className='text-xl  text-white font-semibold'> Wallet </Text>

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

                <View className='-mt-24 px-6 pt-12 flex flex-col justify-center bg-white rounded-t-3xl'>
                    <View className='flex flex-col justify-center items-center '>
                        <Text className="text-base text-black mb-2">Total Balance</Text>
                        <Text className="text-3xl text-black font-bold">$ 2,548.00</Text>
                        <View className="flex flex-row items-center mt-6 gap-6">
                            <ButtonText icon={icons.add} title={"Add"} link={"#"} />
                            <ButtonText icon={icons.qrCode} title={"Pay"} link={"#"} />
                            <ButtonText icon={icons.share} title={"Send"} link={"#"} />
                        </View>
                    </View>

                    <View className='flex flex-row justify-center mb-6 mt-12'>
                        <View className='w-ful flex flex-row gap-4 justify-center items-center bg-[#F4F6F6] rounded-3xl p-1'>
                            <TouchableOpacity
                                onPress={() => toggleTab("tab-1")}
                                activeOpacity={0.8}
                                className={`px-14 py-3 rounded-3xl ${activeTab === "tab-1" ? 'bg-white' : ''
                                    }`}
                            >
                                <Text className={`text-sm font-semibold ${activeTab === "tab-1" ? 'text-[#333333]' : 'text-[#666666]'
                                    }`}>
                                    Transactions
                                </Text>
                            </TouchableOpacity>

                            {/* Upcoming Bills Tab */}
                            <TouchableOpacity
                                onPress={() => toggleTab("tab-2")}
                                activeOpacity={0.8}
                                className={`px-14 py-3 rounded-3xl ${activeTab === "tab-2" ? 'bg-white' : ''
                                    }`}
                            >
                                <Text className={`text-sm font-semibold ${activeTab === "tab-2" ? 'text-[#333333]' : 'text-[#666666]'
                                    }`}>
                                    Upcoming Bills
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="w-full flex flex-col">
                        {
                            activeTab === "tab-1" && (<FlatList
                                data={global.transactions}
                                renderItem={({ item }) => (
                                    renderTransaction({ item })
                                )}
                            />)
                        }

                        {activeTab === "tab-2" && (
                            <FlatList
                                data={global.upcomingbills}
                                renderItem={({ item }) => (
                                    renderUpcomingBills({ item })
                                )}
                            />
                        )}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Wallet

const styles = StyleSheet.create({})