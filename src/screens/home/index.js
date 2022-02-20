import React, { useEffect, useState } from 'react'
import { View, FlatList, Alert } from 'react-native'
import RenderItem from "./components/RenderItem"
import Seperator from "./components/Seperator"
import api from "../../api"
import AddItem from './components/AddItem'
import { Colors, Layout } from "../../constants"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteItem } from "./utils/deleteItem"
import Spinner from "../../components/Spinner"
import { useSelector, useDispatch } from 'react-redux'
import { setLoading, setAllCharacters, removeCharacter } from '../../redux/action'


const Home = ({ navigation }) => {
    const { allCharacters, loading } = useSelector(state => state.SystemReducer)
    const dispatch = useDispatch()

    const totalHeight = Layout.windowHeight



    // deletes the selected element
    // const handleDeleteItem = async (id) => {
    //     dispatch(removeCharacter(id))

    // }



    //When the page is first opened, if there is no data in the storage, it will pull the data with api request.
    //Shows if there is data in the storage..
    const getList = async () => {
        const itemList = await AsyncStorage.getItem("data")
        console.log("gösterilen karakterler", itemList)
        if (itemList) {
            dispatch(setLoading(false))
            const parseList = JSON.parse(itemList)
            dispatch(setAllCharacters(parseList))

        } else {
            api.
                allCharacters().then(async (response) => {
                    if (response) {
                        dispatch(setLoading(false))
                        await AsyncStorage.setItem("data", JSON.stringify(response))
                        dispatch(setAllCharacters(response))

                    } else {
                        Alert.alert("Alert", "Karakterler yüklenemedi uygulamayı kapatıp tekrar açınız")
                        console.log("allCharacters error")
                    }

                }
                )
                .catch(e => console.log(e))
        }
    }

    useEffect(() => {
        getList();
        dispatch(setLoading(true))
    }, [])

    useEffect(() => {
        console.log("length", allCharacters.length)
        AsyncStorage.setItem("data", JSON.stringify(allCharacters))
    }, [allCharacters])

    return (
        <View >

            {loading ?
                <View style={{ marginTop: totalHeight / 2 - 15 }}>
                    <Spinner />

                </View>
                :
                <View>
                    <FlatList
                        ItemSeparatorComponent={() => <Seperator />}
                        data={allCharacters}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <RenderItem
                                item={item}
                                onPress={() => navigation.navigate("Details", { item: item })}
                                iconPress={() => dispatch(removeCharacter(item.id))}

                            />
                        }

                    />
                    {/* add element component */}
                    <AddItem
                        iconPress={() => navigation.navigate("AddCharacter")}
                    />

                </View>}


        </View>
    )
}


export default Home

