import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Layout } from '../../../constants'


const AddItem = () => {
    return (
        <View style={styles.addButton}>
            <Text style={{ fontSize: 25 }}>ADDDD</Text>
        </View>
    )
}

export default AddItem

const styles = StyleSheet.create({
    addButton: {
        position: "absolute",
        marginTop: Layout.windowHeight - 70,
        marginLeft: Layout.windowWidth / 2 - 50
    }
})