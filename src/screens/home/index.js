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

    // listemizden eleman siler
    const deleteItem = (id) => {
        const newData = data.filter(item => item.id != id)
        setData(newData)
        AsyncStorage.setItem("data", JSON.stringify(newData))
    }

    //sayfa ilk açıldığında storageda data yoksa api request ile datayı çeker
    //storage da data varsa gösterir.
    const getList = async () => {
        console.log("data", data)
        const itemList = await AsyncStorage.getItem("data")
        if (itemList) {
            const parseList = JSON.parse(itemList)
            setData(parseList);
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


    useEffect(() => {
        getList();
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
                        onPress={() => navigation.navigate("Details", { id: item.id, item: item })}
                        iconPress={() => deleteItem(item.id)}

                    />
                }

            />
            {/* eleman ekleme componenti */}
            <AddItem
                iconPress={() => navigation.navigate("AddCharacter", { setData })}
            />
        </View>
    )
}


export default Home

const styles = StyleSheet.create({})