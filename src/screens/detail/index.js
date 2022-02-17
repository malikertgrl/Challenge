import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import api from "../../api"
import { Layout, Colors } from '../../constants'

const Details = ({ route }) => {
    const [character, setCharacter] = useState({})
    useEffect(() => {
        showDetails();
    }, [])

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
        <View style={styles.container}>
            <Image
                style={styles.imageStyle}
                source={{ uri: character.avatar }}
            />
            <Text style={styles.text}>{character.name} </Text>
            <Text>Job:  {character.job} </Text>

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