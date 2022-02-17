import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Colors } from "../../../constants"
const Input = () => {
    return (
        <View style={styles.inputStyle}>
            <TextInput

                placeholder='sadsda'
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        borderColor: Colors.black
    }
})