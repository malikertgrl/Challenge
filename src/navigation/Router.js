
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/home"
import Details from "../screens/detail"
import AddCharacter from "../screens/addCharacter"



const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Simpsons"
                    }} />
                <Stack.Screen name="Details" component={Details} />
                <Stack.Screen name="AddCharacter" component={AddCharacter}
                    options={{
                        title: "Add New Character"
                    }} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}
