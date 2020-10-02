import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function Jobs() {
    const [desc, setDesc] = useState('');
    const [loc, setLoc] = useState('');
    const [jobs, setJobs] = useState([]);
    const [info, setInfo] = useState('');

    useEffect(() => {
        fetch(`https://jobs.github.com/positions.json?`)
            .then(response => response.json())
            .then(data => { setJobs(data); })
            .catch((error) => {
                Alert.alert('Error', error)
            }, [])
    });

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

    const getJobs = () => {
        setJobs('')
        if (loc != '' && desc != '') {
            fetch(`https://jobs.github.com/positions.json?description=${desc}&location=${loc}`)
                .then(response => response.json())
                .then(data => { setJobs(data); })
                .catch((error) => {
                    Alert.alert('Error', error)
                });
                setInfo('search matches to:')
        }
        else if (loc != '' && desc == '') {
            fetch(`https://jobs.github.com/positions.json?location=${loc}`)
                .then(response => response.json())
                .then(data => { setJobs(data); })
                .catch((error) => {
                    Alert.alert('Error', error)
                });               
                setInfo('location matches to:')
        }
        else if (desc != '' && loc == '') {
            fetch(`https://jobs.github.com/positions.json?description=${desc}`)
                .then(response => response.json())
                .then(data => { setJobs(data); })
                .catch((error) => {
                    Alert.alert('Error', error)
                });
                setInfo('description matches to:')
        }
        else {
            fetch(`https://jobs.github.com/positions.json?`)
                .then(response => response.json())
                .then(data => { setJobs(data); })
                .catch((error) => {
                    Alert.alert('Error', error)
                });
                setInfo('not found.')
        }
    }

    return (<View style={styles.mainContainer}>
        <View style={styles.listcontainer}>
            <View style={styles.container}>
    <Text style={{ fontSize: 20, fontWeight: "bold" }}>Jobs {info}</Text></View>
            <View style={styles.listC}>
                <FlatList
                    style={{ marginLeft: "5%" }}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={listSeparator}
                    renderItem={({ item }) => <View><Text>Job:{item.title}{"\n"}Company:{item.company}</Text></View>}
                    data={jobs} />
            </View>
        </View>
        <View style={styles.footerContainer}>

            <TextInput style={styles.inputs} value={desc}
                placeholder="Description" onChangeText={desc => setDesc(desc)} />

            <TextInput style={styles.inputs} value={loc}
                placeholder="Location" onChangeText={loc => setLoc(loc)} />
            <Button title="Find" onPress={getJobs} />

        </View>
    </View>);
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#F4C8BF',
        alignItems: 'center',
        padding: 20,
    },
    container: {
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
    listcontainer: {
        flex: 4,
        padding: 10,
        backgroundColor: '#fff',
        width: "100%",
        margin: 5,
    },
    listC: {
        flex: 25,
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