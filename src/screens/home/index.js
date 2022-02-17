import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import RenderItem from "./components/RenderItem"
import Seperator from "./components/Seperator"
import api from "../../api"
import AddItem from './components/AddItem'


const Home = () => {
    const [data, setData] = useState({});

    const getItem = () => {
        api.
            allCharacters().then(response => {
                if (response) {
                    setData(response)
                } else {
                    console.log("allCharacters error")
                }
            }
            )
            .catch(e => console.log(e))

    }

    useEffect(() => {
        getItem();
    }, [])

    return (
        <View >
            <View style={{}}>
                <FlatList
                    ItemSeparatorComponent={() => <Seperator />}
                    data={data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <RenderItem item={item} onPress={() => console.log("tıklandı")} />
                    }

                />
            </View>


            <AddItem />


        </View>
    )
}


export default Home

const styles = StyleSheet.create({})