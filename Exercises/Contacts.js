import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Alert, } from 'react-native';
import * as ExpoContacts from 'expo-contacts';

export default function Contacts() {

    const [contact, setContact] = useState({});

    useEffect(() => {
        getContacts()

    }, []);

    const getContacts = async () => {
        const { status } = await ExpoContacts.requestPermissionsAsync();
        if (status === 'granted') {
            //access contacts
            const { data } = await ExpoContacts.getContactsAsync({
                fields: [ExpoContacts.Fields.PhoneNumbers],
            });
            if (data.length > 0) {
                setContact(data);
            }
        }
    }


    const listSeparator = () => {
        return (
            <View style={{
                height: 1,
                width: "90%",
                backgroundColor: "#CED0CE",
                alignSelf: 'center'
            }}
            />
        )
    }

    return (
        <View style={styles.screen}>
            <View style={styles.maincontainer}>
                <View style={styles.row}>
                    <Button title="Get Contacts" onPress={getContacts}></Button>
                </View>
                <View style={styles.listcontainer}>
                    <FlatList data={contact}
                        ItemSeparatorComponent={listSeparator}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) =>
                            <View>
                                <Text style={{ fontSize: 15, paddingLeft: '15%' }}>
                                    {item.name} {item.phoneNumbers[0].number}</Text>
                            </View>}
                    />
                </View>
            </View>
        </View>
    );
}
/* Testit aiheuttivat ongelmia käynnistyksessä
                <Text> Test1(contact[0].name): {contact[0].name} </Text>
                <Text> Test2(phoneNumbers[0].number): {contact[0].phoneNumbers[0].number}</Text>
                <Text> Test3(JSON.stringify): {JSON.stringify(contact[0].phoneNumbers)}</Text>


Jos olisi useampi numero, niin kokeilisin laittaa flätlistin tuon toisen sisälle
<FlatList data={item.phoneNumbers} 
ItemSeparatorComponent={listSeparator}
keyExtractor={item => item.id}
renderItem={({ item }) => 
<Text style={{fontSize:10}}>{item.number}</Text>}
/>
*/
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