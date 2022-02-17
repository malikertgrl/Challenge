import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Seperator = () => {
    return (
        <View style={styles.SeperatorStyle}>

        </View>
    )
}

export default Seperator

const styles = StyleSheet.create({
    SeperatorStyle: {
        // elevation: 2,
        borderBottomWidth: 1,
        borderBottomColor: "#0001"
    }
})