import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList, Alert, AsyncStorage } from 'react-native';
import * as SQLite from 'expo-sqlite';

export default function ShoppingListV2() {

    const db = SQLite.openDatabase('shoplistdb.db')

    const [product, setProduct] = useState('')
    const [amount, setAmount] = useState('')
    const [appList, setAppList] = useState([])

//At the start of the software, check if table for shoplists exists or not, create if latter.
     useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(`create table if not exists shoplist (id integer primary key not null, product text, amount text);`);
        }, sqlError, updateList );
    }, []); 

//remove item with given id
    const deleteItem = (id) => {
        db.transaction(tx => {
            tx.executeSql(`delete from shoplist where id = ?;`, [id]);
        }, sqlError, updateList)
    }
//remove all from shoplist
    const deleteAll = () => {
        db.transaction(tx=> {
            tx.executeSql('DELETE FROM shoplist;');
        }, sqlError, updateList)
    }
//update list in app
    const updateList = () => {
        db.transaction(tx =>{
            tx.executeSql('select * from shoplist;', [], (_, { rows }) => 
            setAppList(rows._array)
            );
        });
    }
//add given inputs into SQLite db
    const saveItem = () => {
        db.transaction(tx => {
            tx.executeSql('insert into shoplist (product, amount) values (?, ?);', [product, amount]);
        }, sqlError, updateList);
    }
//Show error msg, shows the function error was found in
    const sqlError = (props) => {
        console.log('SQLite error' + props )
        Alert.alert('SQLite error', 'SQLite error in: ' + props,
            [{ text: 'ok' },
            { text: 'oh god' },
            { text: 'what do?' }],
            { cancelable: false })
    }
/* 
    const addToList = () => {
        setAppList([...appList, product + ', ' + amount])
        setProduct('')
        setAmount('')
    } 
*/
// delete all from shoplist
    const clearAlert = () =>
        Alert.alert(
            'Confirm',
            'Confirm list wipe',
            [
                {
                    text: 'Yes, clear list',
                    onPress: () => deleteAll()
                },
                {
                    text: 'No dear god cancel!',
                    style: "cancel"
                }
            ],
            { cancelable: false }
        );

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
            <StatusBar hidden={true} />
            <View style={styles.smallcontainer}>
                <Text style={{ textAlign: 'center', fontSize: 18, }}>Shopping list</Text>
                <TextInput
                    style={styles.inputs}
                    onChangeText={typed => setProduct(typed)}
                    placeholder='Product'
                    value={product}
                />
                <TextInput
                    style={styles.inputs}
                    onChangeText={typed => setAmount(typed)}
                    placeholder='Amount'
                    value={amount}
                />
            </View>
            <View style={styles.row}>
                <Button title="Add" onPress={saveItem} />
                <Button title="Clear" onPress={clearAlert} />
            </View>
            <View style={styles.listcontainer}>
                <FlatList data={appList}
                    ItemSeparatorComponent={listSeparator}
                    keyExtractor={(item => item.id.toString())}
                    renderItem={({ item }) =>
                        <View
                            style={styles.flatStyle}>
                            <View style={styles.items1}>
                                <Text style={styles.basicTexts}>{item.product}, {item.amount}</Text>
                            </View>
                            <View style={styles.items2}>
                                <Button title="x" onPress={() => deleteItem(item.id)}/>
                            </View>
                        </View>}
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