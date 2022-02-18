import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from "./components/Input"
import CustomButton from "./components/CustomButton"
import { NavigationContainer } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddCharacter = ({ navigation, route }) => {
    console.log(route.params)
    const [character, setCharacter] = useState({
        name: "",
        job: "",
        about: "",
        id: Math.random(),
        avatar: ""
    })

    // inputtaki değişimi alır.
    const changeText = (key, value) => {
        setCharacter(data => ({ ...data, [key]: value }))
    }

    //karakteri kaydeder.
    const saveCharacter = () => {
        console.log("character", character)
        navigation.goBack()
        AsyncStorage.getItem("data").then(data => {
            const characterList = JSON.parse(data)
            characterList.push(character)
            AsyncStorage.setItem("data", JSON.stringify(characterList))
            route.params.setData(characterList)
        })

    }

    return (
        <View>
            <Input
                title="Name Surname:"
                value={character.name}
                onChangeText={text => changeText("name", text)}
            />
            <Input
                title="Job Title:"
                value={character.job}
                onChangeText={text => changeText("job", text)}

            />
            <Input
                title="About Him/Her:"
                value={character.about}
                style={{ height: 80 }}
                onChangeText={text => changeText("about", text)}
            />

            <Input
                title="Image Link:"
                value={character.image}
                onChangeText={text => changeText("image", text)}

            />

            <CustomButton onPress={() => saveCharacter()} />

        </View>
    )
}

export default AddCharacter

const styles = StyleSheet.create({})