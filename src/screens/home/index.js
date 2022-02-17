import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import RenderItem from "./components/RenderItem"
import Seperator from "./components/Seperator"
import api from "../../api"
import AddItem from './components/AddItem'
import { Colors } from 'react-native/Libraries/NewAppScreen'


const Home = ({ navigation }) => {
    const [data, setData] = useState({});

    const deleteItem = (id) => {
        // console.log("sileceğiz", item)
        const newData = data.filter(item => item.id != id)
        setData(newData)
    }

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
                iconPress={() => navigation.navigate("AddCharacter")}
            />


        </View>
    )
}


export default Home

const styles = StyleSheet.create({})