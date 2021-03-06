import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Layout, Colors, Images } from '../../../constants'
import Icon from "./Icon"

const RenderItem = ({ item, onPress, iconPress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.innerContainer}>
                    <Image
                        style={styles.ImageStyle}
                        source={{
                            uri: item.avatar
                        }}
                    />
                    <View style={styles.textStyle}>
                        <Text> {item.name}</Text>
                    </View>

                </View>
            </TouchableOpacity>

            <Icon
                name={"delete"}
                size={35}
                iconPress={iconPress}
            />
        </View>

    )
}

export default RenderItem

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15

        // backgroundColor: "#fff"
    },
    textStyle: {
        margin: 15
    },
    ImageStyle: {
        resizeMode: "contain",
        height: Layout.windowHeight / 9 - 25,
        width: Layout.windowWidth / 5 - 25
    }
})