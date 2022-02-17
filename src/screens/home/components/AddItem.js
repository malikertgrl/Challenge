import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Layout, Colors } from '../../../constants'
import Icon from "./Icon"

const AddItem = ({ onPress }) => {
    return (
        <View style={styles.addButton}>
            <Icon
                name={"add"}
                size={35}
                color={Colors.white}
                onPress={onPress}

            />
        </View>

    )
}

export default AddItem

const styles = StyleSheet.create({
    addButton: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.blue,
        width: 60,
        height: 60,
        borderRadius: 30,
        position: "absolute",
        marginTop: Layout.windowHeight - 150,
        marginLeft: Layout.windowWidth / 2 - 30
    }
})