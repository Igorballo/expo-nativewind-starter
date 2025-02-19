import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, Tabs } from 'expo-router'
import icons from '../../constants/icons';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View className="flex items-center justify-center">
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                className="w-6 h-6"
            />
            {/* <Text
                className={`${focused ? "font-semibold" : "font-regular"} whitespace-nowrap text-xs`}
                style={{ color: color }}
            >
                {name}
            </Text> */}
        </View>
    );
};

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: "#2F7E79",
                    tabBarBackgroundColor: "#fff",
                    tabBarInactiveTintColor: "gray",
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: "#fff",
                        borderWidth: 0,
                        borderTopWidth: 0,
                        paddingTop: 10,
                        height: 64,
                    },
                    headerShown: false,
                }}
                backBehavior="history"
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        headerShown: false,
                        title: "Home",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="statistic"
                    options={{
                        headerShown: false,
                        title: "Statistic",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.statistic}
                                color={color}
                                name="Statistic"
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="wallet"
                    options={{
                        title: "Wallet",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.wallet}
                                color={color}
                                name="Wallet"
                                focused={focused}
                            />
                        ),
                    }}

                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: "Profile",
                        headerShown: false, tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.user}
                                color={color}
                                name="Profile"
                                focused={focused}
                            />
                        ),
                    }}
                />

                <Tabs.Screen
                    name="detail-transactions"
                    options={{
                        href: null,
                        headerShown: false,
                        title: "Détail transaction",
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.statistic}
                                color={color}
                                name="detail-transactions"
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({})