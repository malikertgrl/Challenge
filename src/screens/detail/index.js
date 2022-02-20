import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, ScrollView, Alert } from 'react-native'
import api from "../../api"
import { Layout, Colors } from '../../constants'
import Spinner from "../../components/Spinner"
import { useSelector, useDispatch } from 'react-redux'
import { setLoading } from '../../redux/action'



const Details = ({ route }) => {
    const { characterList, loading } = useSelector(state => state.SystemReducer)
    const dispatch = useDispatch()
    const [character, setCharacter] = useState({})
    const item = route?.params?.item
    useEffect(() => {
        showDetails();
    }, [])


    // According to the id endpoint, it sends a request to the service and gets the character details.
    const showDetails = () => {
        if (item.isManuel) {
            setCharacter(item)
        } else {
            dispatch(setLoading(true))
            api
                .characterDetails(item.id)
                .then(response => {
                    dispatch(setLoading(false))

                    if (response) {
                        setCharacter(response)
                    } else {
                        Alert.alert("Alert", "Bir sorun oluştu. Lütfen tekrar deneyiniz.")
                        console.log("characterDetails")
                    }
                })
                .catch((e) => console.log(e))
        }

    }

    return (
        <ScrollView>
            <View >
                {loading ?
                    <View style={styles.spinner}>
                        <Spinner />

                    </View>
                    :
                    <View style={styles.container}>
                        <Image
                            style={styles.imageStyle}
                            source={{ uri: character.avatar }}
                        />
                        <Text style={styles.text}>{character.name} </Text>
                        <Text>{character.job}</Text>
                        <Text style={styles.aboutStyle}>{character.about && character.about}</Text>
                    </View>
                }

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
    },
    aboutStyle: {
        marginHorizontal: 18,
        marginVertical: 15

    },
    spinner: { marginTop: Layout.windowHeight / 2 + 15 }
})