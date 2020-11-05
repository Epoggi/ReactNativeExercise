import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Input, Button, ListItem, Icon } from 'react-native-elements';


export default function MyPlaces({ navigation }) {
    const [maPlace, setMaPlace] = useState([{id: 1, address: 'Tatti 17 Helsinki'}, {id: 2, address: 'Ratapihantie 13 Pasila'}]);
    const [userInput, setUserInput] = useState('');
    const [addressId, setAddressId] = useState (3);

    const addPlace = () => {
        setMaPlace([{id: addressId, address: userInput}, ...maPlace])
        setAddressId(addressId + 1)
    }
    const handleRemove = (id) => {
        const newList = maPlace.filter((item) => item.id !== id);
        setMaPlace(newList);
    }
//ListItem onPress?
//onLongPress delete(item.index)
    const renderItem = ({ item }) => (
        <ListItem bottomDivider >
            <ListItem.Content style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                <ListItem.Title>{item.address}</ListItem.Title>
                <Button title="show on map" iconRight 
                icon={ <Icon name="map" size={25} color="gray" />} 
                type="clear" titleStyle={{color:'gray'}}
                onPress={()=> navigation.navigate('MyMap', {address: item.address})}
                onLongPress={() => handleRemove(item.id)}
                />
            </ListItem.Content>
        </ListItem>
    )

    return (
        <View style={styles.screen}>
            <StatusBar hidden={true} />

            <View style={styles.smallcontainer}>

                <Input placeholder="Type in address" label='Placefinder'
                    onChangeText={uInput => setUserInput(uInput)}
                    value={userInput}
                />

                <Button title="SAVE" onPress={addPlace}
                    buttonStyle={{ width: 340, backgroundColor: 'gray', }}
                    titleStyle={{ textAlign: 'center', fontSize: 20 }}
                    icon={{ name: 'save', color: '#fff', }}
                />

            </View>
            <View style={styles.listcontainer}>
                <FlatList data={maPlace}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderItem}
                /></View>
        </View>

    );
}

const styles = StyleSheet.create({
    //Main screen
    screen: {
        flex: 1,
        backgroundColor: '#CED0CE',
        alignItems: 'center',
        padding: 20,
    },
    //Container styles
    maincontainer: {
        flex: 4,
        padding: 10,
        backgroundColor: '#fff',
        width: "100%",
        margin: 5,
    },
    smallcontainer: {
        flex: 1,
        minHeight: 110,
        width: "100%",
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        margin: 1,
        padding: 5,
    },
    listcontainer: {
        flex: 7,
        width: "100%",
        backgroundColor: '#FFFFFF',
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
    row: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 5,
        margin: 1,
        backgroundColor: '#FFFFFF',
    },
    //Flatlist styles
    flatStyle: {
        flexDirection: 'row',
        padding: 3,
        margin: 1,
        alignItems: 'center',
    },
    items1: {
        padding: 2,
        flex: 5,
        marginLeft: '10%',
    },
    items2: {
        padding: 2,

        flex: 1
    },
    image: {
        flex: 1,
        alignItems: 'flex-start',
        padding: 20,
    },
    //TextInput & Text styles
    inputs: {
        width: "50%",
        height: 50,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 1,
    },
    basicTexts: {
        fontSize: 18,
        alignSelf: 'flex-start'
    }
});