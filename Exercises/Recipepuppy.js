import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function Recipepuppy() {
    
    const [ingredient, setIngredient] = useState('');
    const [recipes, setRecipes] = useState([]);

    const listSeparator = () => {
        return (
            <View style={{
                height: 1,
                width: "90%",
                backgroundColor: "#CED0CE",
                marginLeft: "10%"
            }}
            />
        )
    }
    useEffect(()=> {
            fetch('http://www.recipepuppy.com/api/')
            .then(response => response.json())
            .then(data => { setRecipes(data.results); })
            .catch((error) => {
                Alert.alert('Error', error)
            });
    }, [])

    const getRecipes = () => {
       
        fetch(`http://www.recipepuppy.com/api/?i=${ingredient}`)
        .then(response => response.json())
        .then(data => { setRecipes(data.results); })
        .catch((error) => {
            Alert.alert('Error', error)
        }); 
    }

    return (
    <View style={styles.screen}>
        <View style={styles.maincontainer}>
            <View style={styles.smallcontainer}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>RecipePuppy</Text></View>
            <View style={styles.listcontainer}>
            <FlatList style={{ marginLeft: "5%" }}
                    keyExtractor={((item, index) => index.toString())}
                    ItemSeparatorComponent={listSeparator}
                    renderItem={({ item }) =>
                        <View>
                            <Text>{item.title}</Text>
                            <Image style={{ width: 50, height: 50 }}
                            source={{uri: item.thumbnail || "https://icon-library.net/images/placeholder-image-icon/placeholder-image-icon-17.jpg"}} />
                        </View>}
                    data={recipes} />
            </View>
        </View>
        <View style={styles.footerContainer}>

            <TextInput style={styles.inputs} 
                value={ingredient}
                placeholder="Ingredient" 
                onChangeText={input => setIngredient(input)} />
                
            <Button title="Find" onPress={getRecipes} />

        </View>
    </View>);
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F4C8BF',
        alignItems: 'center',
        padding: 20,
    },
    smallcontainer: {
        flex: 1,
        width: "100%",
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        margin: 1,
    },
    footerContainer: {
        flex: 1,
        width: "100%",
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        margin: 5,
        position: 'absolute',
        paddingTop: 15,
        paddingBottom: 5,
        bottom: 1
    },
    buttons: {
        flex: 1,
        flexDirection: 'row',
        width: 150,
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        padding: 20,
    },
    image: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 20,
    },
    maincontainer: {
        flex: 4,
        padding: 10,
        backgroundColor: '#fff',
        width: "100%",
        margin: 5,
    },
    listcontainer: {
        flex: 25,
        width: "100%",
        backgroundColor: '#FFFFFF',
        margin: 1,
    },
    inputs: {
        width: 200,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 1,
    },
    text1: {
        fontSize: 18,
        width: 200,
    }
});