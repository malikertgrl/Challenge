import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Input from "./components/Input"
import CustomButton from "./components/CustomButton"

const AddCharacter = () => {
    return (
        <View>
            <Input
                title="Name Surname:"
            />
            <Input
                title="Job Title:"
            />
            <Input
                title="About Him/Her:"
                style={{ height: 80 }}
            />

            <Input
                title="Image Link:"
            />

            <CustomButton onPress={() => console.log("kaydedilecek")} />

        </View>
    )
}

export default AddCharacter

const styles = StyleSheet.create({})