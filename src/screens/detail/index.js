import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import api from "../../api"
import { Layout, Colors } from '../../constants'

const Details = ({ route }) => {
    const [character, setCharacter] = useState({})
    const [item, setItem] = useState({})

    useEffect(() => {
        showDetails();
        setItem(route.params.item)

    }, [])

    // According to the id endpoint, it sends a request to the service and gets the character details.
    const showDetails = () => {
        api
            .characterDetails(route.params.id)
            .then(response => {
                if (response) {
                    setCharacter(response)
                } else {
                    console.log("characterDetails")
                }
            })
            .catch((e) => console.log(e))
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                <Image
                    style={styles.imageStyle}
                    source={{ uri: item.avatar }}
                />
                <Text style={styles.text}>{item.name} </Text>
                <Text>{item.job}</Text>
                <Text>{item.about && item.about}</Text>
            </View>
        </ScrollView>

    )
}

export default Details

const styles = StyleSheet.create({
    imageStyle: {
        resizeMode: "cover",
        width: Layout.windowWidth / 2 + 50,
        height: Layout.windowHeight / 2 - 15,
    },
    container: {
        marginTop: 15,
        alignItems: "center"
    },
    text: {
        fontSize: 25,
        color: Colors.black,
    }
})