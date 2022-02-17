import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



const Icon = ({ name, size, color, onPress }) => {
    return (

        <View>
            <TouchableOpacity onPress={onPress}>
                <MaterialIcons name={name} size={size} color={color} />
            </TouchableOpacity>
        </View>
    )
}

export default Icon

const styles = StyleSheet.create({})