import { View } from 'react-native'
import React, { useState } from 'react'
import Input from "./components/Input"
import CustomButton from "./components/CustomButton"
import AsyncStorage from '@react-native-async-storage/async-storage'

const AddCharacter = ({ navigation, route }) => {
    const [character, setCharacter] = useState({
        name: "",
        job: "",
        about: "",
        id: Math.random(),
        avatar: "",
        isManuel: true
    })

    // Retrieves the change in the input.
    const changeText = (key, value) => {
        setCharacter(data => ({ ...data, [key]: value }))
    }

    //saves the character.
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
                testID="name"
                title="Name Surname:"
                value={character.name}
                onChangeText={text => changeText("name", text)}
            />
            <Input
                testID="job"
                title="Job Title:"
                value={character.job}
                onChangeText={text => changeText("job", text)}

            />
            <Input
                testID="about"
                title="About Him/Her:"
                value={character.about}
                style={{ height: 80 }}
                onChangeText={text => changeText("about", text)}
            />

            <Input
                testID="avatar"
                title="Image Link:"
                value={character.avatar}
                onChangeText={text => changeText("avatar", text)}

            />

            <CustomButton onPress={() => saveCharacter()} />

        </View>
    )
}

export default AddCharacter
