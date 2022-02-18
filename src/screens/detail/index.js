import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import api from "../../api"
import { Layout, Colors } from '../../constants'

const Details = ({ route }) => {
    const [character, setCharacter] = useState({})
    const [item, setItem] = useState({})

    useEffect(() => {
        showDetails();
        setItem(route.params.item)

    }, [])

    // id endpointine göre servise istek atıp karakter detaylarını alır.
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
        console.log("item ne geliyor", item) ||
        <View style={styles.container}>
            {/* {character ?
                <View>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: character.avatar }}
                    />
                    <Text style={styles.text}>{character.name} </Text>
                    <Text>{character.job} </Text>
                </View>
                : */}

            <View>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: item.avatar }}
                />
                <Text style={styles.text}>{item.name} </Text>
                <Text>{item.job}</Text>
            </View>


            {/* } */}

        </View>
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
        color: Colors.black
    }
})