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


const Home = ({ navigation }) => {
    const [isload, setIsLoad] = useState(false)
    const [data, setData] = useState({});
    const totalHeight = Layout.windowHeight

    const loading = (val) => {
        setIsLoad(val)
    }
    // deletes the selected element
    const handleDeleteItem = (id) => {
        const newData = deleteItem(id, data)
        setData(newData)
        AsyncStorage.setItem("data", JSON.stringify(newData))
    }

    //When the page is first opened, if there is no data in the storage, it will pull the data with api request.
    //Shows if there is data in the storage..
    const getList = async () => {
        const itemList = await AsyncStorage.getItem("data")
        if (itemList) {
            loading(false)
            const parseList = JSON.parse(itemList)
            setData(parseList);
        } else {

            api.
                allCharacters().then(async (response) => {
                    if (response) {
                        loading(false)
                        await AsyncStorage.setItem("data", JSON.stringify(response))
                        setData(response)
                    } else {
                        Alert.alert("Alert", "Karakterler yüklenemedi uygulamayı kapatıp tekrar açar mısınız?")
                        console.log("allCharacters error")
                    }

                }
                )
                .catch(e => console.log(e))
        }
    }

    useEffect(() => {
        getList();
        loading(true)
    }, [])

    return (
        <View >

            {isload ?
                <View style={{ marginTop: totalHeight / 2 - 15 }}>
                    <Spinner />

                </View>
                :
                <View>
                    <FlatList
                        ItemSeparatorComponent={() => <Seperator />}
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <RenderItem
                                item={item}
                                onPress={() => navigation.navigate("Details", { item: item })}
                                iconPress={() => handleDeleteItem(item.id)}

                            />
                        }

                    />
                    {/* add element component */}
                    <AddItem
                        iconPress={() => navigation.navigate("AddCharacter", { setData })}
                    />

                </View>}


        </View>
    )
}


export default Home

