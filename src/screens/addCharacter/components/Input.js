import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Colors } from "../../../constants"
const Input = ({
    testID,
    onChangeText,
    value,
    title,
    placeholder,
    style }) => {
    return (
        <View style={{ margin: 10 }}>
            <Text style={styles.text}>{title}</Text>
            <TextInput
                testID={testID}
                style={[styles.inputStyle, { ...style }]}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                multiline={true}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    inputStyle: {
        backgroundColor: "#fff",
        marginVertical: 5,
        elevation: 2,
        height: 45,
        borderRadius: 5
    },
    text: { color: Colors.black }
})