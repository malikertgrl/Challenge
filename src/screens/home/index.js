import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import RenderItem from "./components/RenderItem"
import Seperator from "./components/Seperator"
import api from "../../api"
import AddItem from './components/AddItem'
import { Colors } from "../../constants"
import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({ navigation }) => {
    const [data, setData] = useState({});


    const deleteItem = (id) => {
        // console.log("sileceğiz", item)
        const newData = data.filter(item => item.id != id)
        setData(newData)
        AsyncStorage.setItem("data", JSON.stringify(newData))
    }

    const getItem = async () => {
        console.log("data", data)
        const itemList = await AsyncStorage.getItem("data")
        if (itemList) {
            const parse = JSON.parse(itemList)
            setData(parse);
        } else {
            api.
                allCharacters().then(async (response) => {
                    if (response) {
                        await AsyncStorage.setItem("data", JSON.stringify(response))
                        setData(response)
                    } else {
                        console.log("allCharacters error")
                    }

                }
                )
                .catch(e => console.log(e))
        }

    }

    // const setStorage = async () => {
    //     await AsyncStorage.setItem("data", JSON.stringify(data))
    //     console.log("setStorage çalıştı")
    // }

    // const getStorage = async () => {
    //     console.log("getstorage")
    //     try {
    //         const getData = await AsyncStorage.getItem("data")
    //         console.log("storageda ne geliyor", getData)
    //         if (getData != null) {
    //             const parse = JSON.parse(getData)
    //             setData(parse);
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        getItem();
    }, [])

    return (
        <View style={{ backgroundColor: Colors.white }}>
            <FlatList
                ItemSeparatorComponent={() => <Seperator />}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <RenderItem
                        item={item}
                        onPress={() => navigation.navigate("Details", { id: item.id })}
                        iconPress={() => deleteItem(item.id)}

                    />
                }

            />
            <AddItem
                iconPress={() => navigation.navigate("AddCharacter", { setData })}
            />
        </View>
    )
}


export default Home

const styles = StyleSheet.create({})