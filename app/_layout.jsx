import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
// Import your global CSS file
import "../global.css";
import { Stack } from 'expo-router';
import SplashScreen from './splash-screen';

const RootLayout = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <>
            {isLoading ? (
                <SplashScreen />
            ) : (
                <Stack>
                    <Stack.Screen name='index' options={{ headerShown: false }} />
                    <Stack.Screen name='(auth)' options={{ headerShown: false }} />
                    <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
                </Stack>
            )}

        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})