"use client"

import {
    FlatList,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Platform,
    TouchableWithoutFeedback,
} from "react-native"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import icons from "../../constants/icons"
import { useRouter } from "expo-router"
import global from "../../constants/global"
import { Dimensions } from "react-native"
import DropDownPicker from "react-native-dropdown-picker"
const screenWidth = Dimensions.get("window").width

const Statistic = () => {
    const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]
    const router = useRouter()
    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedItemId, setSelectedItemId] = useState(null)
    const [selectedPeriod, setSelectedPeriod] = useState("Day")
    const [showTooltip, setShowTooltip] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState("Expense")
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("Expense");
    const [categories, setCategories] = useState([
        { label: 'Expense', value: 'Expense' },
        { label: 'Income', value: 'Income' }
    ]);
    const [selectedSpendingItem, setSelectedSpendingItem] = useState(null)

    const [selectedPeriode, setSelectedPeriode] = useState("Day")

    const periodes = ["Day", "Week", "Month", "Year"]
    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible)
    }

    // Close dropdown when clicking outside
    const closeDropdown = () => {
        if (dropdownVisible) {
            setDropdownVisible(false)
        }
    }

    const renderTransaction = ({ item, index }) => {
        return (
            <Pressable
                key={item.id}
                onPress={() => {
                }}
                className={`flex flex-row items-center gap-2.5 w-full mb-4 px-4 py-2 rounded-lg 
                ${selectedItemId === item.id ? "bg-green-500 shadow-xl" : "bg-[#FBFBFB]"}`}
            >
                <View className="flex-none items-center justify-center">
                    <Image source={item.logo} resizeMethod="contain" className="w-auto h-auto rounded-full" />
                </View>
                <View className="flex flex-row flex-1 items-center justify-between py-1 w-full">
                    <View className="flex flex-col gap-1">
                        <Text className={`text-lg font-semibold ${selectedItemId === item.id ? "text-white" : "text-black"}`}>
                            {item.company}
                        </Text>
                        <Text className={`text-sm ${selectedItemId === item.id ? "text-white" : "text-gray"}`}>{item.date}</Text>
                    </View>
                    <Text
                        className={`text-lg font-semibold ${selectedItemId === item.id ? "text-white" : item.type === "sent" ? "text-[#F95B51]" : "text-[#25A969]"}`}
                    >
                        {`${item.type === "sent" ? "-" : "+"} ${item.amount}`}
                    </Text>
                </View>
            </Pressable>
        )
    }


    return (
        <TouchableWithoutFeedback onPress={closeDropdown}>
            <SafeAreaView style={styles.container}>
                {/* Header Section */}
                <View className="w-full px-6 pt-12 mb-8 ">
                    <View className="flex flex-row items-center justify-between">
                        <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8} className="">
                            <Image source={icons.chevron} resizeMode="contain" className="text-black w-4 h-4" />
                        </TouchableOpacity>

                        <Text className="text-xl text-black font-semibold"> Transaction Details </Text>

                        <TouchableOpacity
                            onPress={() => {
                                console.log("pressed")
                            }}
                            activeOpacity={0.8}
                            className=""
                        >
                            <Image source={icons.download} resizeMode="contain" className="w-6 h-6" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex flex-row items-center justify-between w-full my-6 gap-4 px-6">
                    {periodes.map((periode) => (
                        <TouchableOpacity
                            key={periode}
                            onPress={() => setSelectedPeriode(periode)}
                            className={`px-6 py-2.5 rounded-lg ${selectedPeriode === periode ? "bg-primary-100" : "bg-gray-200"}`}
                        >
                            <Text className={`text-center text-sm ${selectedPeriode === periode ? "text-white" : "text-gray-700"}`}>
                                {periode}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View className="flex flex-row w-full justify-end mb-6 px-6">
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={categories}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setCategories}
                        containerStyle={{ width: 130 }}
                        dropDownContainerStyle={{ width: 130 }}
                        placeholder="Sélectionner une catégorie"
                    />
                </View>

                {/* Main Content - Split into two sections */}
                <View style={{ flex: 1 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        style={{ flex: 1 }}
                        contentContainerStyle={{ paddingBottom: 20 }}
                    >
                        {/* Period Tabs */}
                        <View className="px-6">
                            <View role="status" class="max-w-sm border border-gray-300 rounded-lg p-4">
                                <View className="animate-pulse w-full bg-slate-300 h-48 rounded-lg mb-5 flex justify-center items-center">
                                    {/* Chart placeholder */}
                                </View>
                                <View class=" w-full flex justify-between items-start animate-pulse">
                                    <View className="block">
                                        <Text class="h-3 bg-slate-400 rounded-full  w-48 mb-4"></Text>
                                        <Text class="h-2 bg-slate-400 rounded-full w-32 mb-2.5"></Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                    {/* Top Spending Section - Separate FlatList */}
                    <View className="m-6 flex flex-col gap-4">
                        <View className="flex flex-col gap-4">
                            <View className="flex flex-row justify-between w-full">
                                <Text className="text-black text-xl font-bold">Top Spending</Text>
                                <Text className="text-[#666666] text-base">See all</Text>
                            </View>

                            <View className="w-full flex flex-col" style={{ height: 300 }}>
                                <FlatList
                                    data={global.transactions}
                                    keyExtractor={(item) => item.id.toString()}
                                    renderItem={({ item, index }) => renderTransaction({ item, index })}
                                    contentContainerStyle={{ paddingBottom: 20 }}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    tabContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginTop: 10,
        marginBottom: 20,
    },
    tabButton: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    selectedTabButton: {
        backgroundColor: "#2F7E79",
    },
    tabButtonText: {
        color: "#666",
    },
    selectedTabButtonText: {
        color: "white",
    },
    dropdownButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        marginHorizontal: 16,
        marginBottom: 20,
        width: 120,
        alignSelf: "flex-end",
    },
    dropdownButtonText: {
        color: "#666",
        fontWeight: "500",
    },
    chartContainer: {
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    chart: {
        borderRadius: 16,
        paddingRight: 20,
    },
    tooltipContainer: {
        position: "absolute",
        top: 70,
        left: screenWidth / 2 - 30,
        alignItems: "center",
    },
    tooltip: {
        backgroundColor: "white",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    tooltipText: {
        color: "#3E988B",
        fontWeight: "600",
    },
    tooltipPoint: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: "#3E988B",
        borderWidth: 2,
        borderColor: "white",
        marginTop: 5,
    },
    tooltipLine: {
        width: 1,
        height: 40,
        backgroundColor: "#ccc",
        marginTop: 0,
    },
    tooltipMonth: {
        color: "#3E988B",
        fontWeight: "500",
        marginTop: 5,
    },
    spendingContainer: {
        paddingHorizontal: 16,
        marginBottom: 80,
    },
    spendingHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    spendingTitle: {
        fontSize: 18,
        fontWeight: "600",
    },
    spendingItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 15,
    },
    transferItem: {
        backgroundColor: "#3E988B",
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    logoContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
        backgroundColor: "#f5f5f5",
    },
    transferLogoContainer: {
        backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    youtubeLogoContainer: {
        backgroundColor: "#FF0000",
    },
    logo: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    spendingDetails: {
        flex: 1,
    },
    merchantName: {
        fontSize: 16,
        fontWeight: "500",
    },
    spendingDate: {
        fontSize: 12,
        color: "#999",
        marginTop: 2,
    },
    spendingAmount: {
        fontSize: 16,
        fontWeight: "500",
        color: "#FF5252",
    },
    bottomNav: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: "#eee",
        backgroundColor: "white",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    navItem: {
        alignItems: "center",
    },
    pickerContainer: {
        alignSelf: "flex-end",
        marginRight: 16,
        marginBottom: 20,
        width: 120,
    },
    iosPicker: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
        width: 120,
        height: 40,
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "white",
    },
    androidPicker: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 20,
        width: 120,
        height: 40,
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "white",
    },
    picker: {
        width: 120,
        height: 40,
        color: "#666",
        marginLeft: Platform.OS === "ios" ? -8 : 0,
    },
})

export default Statistic
