import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Alert, FlatList } from 'react-native';
import { Header, Icon, Input, Button, ListItem } from 'react-native-elements';



export default function TestField() {

    const setAlarm = () => {
        Alert.alert('Alarm set at: ', 'Alarm dummy ',
            [{ text: 'ok' },],
            { cancelable: false })
    }
    const hello = () => {
        Alert.alert('Hello! ', 'Hi.. ',
            [{ text: 'Hello' },
            { text: 'Okay.....' }],
            { cancelable: false })
    }
    const hello2 = () => {
        Alert.alert('test! ', 'Hi.. ',
            [{ text: 'Hello' },
            { text: 'Okay.....' }],
            { cancelable: false })
    }
    const [userInput, setUserInput] = useState('');

    const saveInput = () => {
        Alert.alert('Input saved: ', 'Show user input here => ' + { userInput },
            [{ text: 'ok' },
            { text: 'why no user input?' }],
            { cancelable: false })
    }
    const [list, setList] = useState([
        { test1: 'one', test2: 'two', test3: 'three' },
        { test1: 'four', test2: 'five' }])

//Notes: onLongPress ei toimi ilman onPressiä?
    const renderItem = ({ item }) => (
        <ListItem bottomDivider >
            <ListItem.Content>
                <ListItem.Title>{item.test1}</ListItem.Title>
                <ListItem.Subtitle>{item.test2}</ListItem.Subtitle>
                <ListItem.Chevron type="material" name="pets" color="black" onLongPress={hello} onPress={hello2} />
            </ListItem.Content>
        </ListItem>
    )


    return (
        <View style={styles.screen}>
            <StatusBar hidden={true} />
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Playground', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View style={styles.row}>
                
                <Input placeholder="Input test" label='uInput'
                    onChangeText={uInput => setUserInput(uInput)}
                    value={userInput} />
                <Icon type="material" reverseColor="lightblue"
                    name="alarm" onPress={setAlarm} />
            </View>
            <Button raised icon={{ name: 'save', color: '#fff' }} 
            
            iconRight onPress={saveInput} title="Save" 
            />
            <Button type="clear" reverseColor="white" 
            icon={ <Icon name="save" size={15} color="black" /> } 
            iconRight 
            titleStyle={styles.title}
            title="Button with right icon"
            />
            <View style={styles.listcontainer}>
                <Text>First test for List Item element</Text>
                <FlatList data={list}
                    keyExtractor={((item, index) => index.toString())}
                    renderItem={({ item }) => (
                        <ListItem bottomDivider >
                            <ListItem.Content>
                                <ListItem.Title>{item.test1}</ListItem.Title>
                                <ListItem.Subtitle>{item.test2}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )}
                />
                <Text>Second test for list item element</Text>
                <FlatList
                    data={list}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()} />

            </View>
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
    },
    title: {
        color:'black',
        fontSize:20
        
    }
    
});