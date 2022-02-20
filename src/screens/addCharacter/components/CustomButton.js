import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from "../../../constants"

const CustomButton = ({ onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>Add Character</Text>
            </View>
        </TouchableOpacity>

    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.blue,
        height: 45,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
    },
    text: {
        color: Colors.white,
    }
})