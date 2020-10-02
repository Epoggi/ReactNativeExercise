import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, Button, TextInput } from 'react-native';
import { Picker } from '@react-native-community/picker';


export default function CoinEx() {

    const [amount, setAmount] = useState(0);
    const [currency, setCurrency] = useState('');

    const [rates, setRates] = useState('');

    useEffect(() =>
        getRates(),
        []);

    const getRates = () => {
        fetch(`https://api.exchangeratesapi.io/latest`)
            .then(response => response.json())
            .then(data => {
                setRates(data.rates);
            })
            .catch((error) => {
                Alert.alert('Error', error);
            });
    }
        /* *Alkuperäinen toiminto yhteistyössä Lotan kanssa

             const [result, setResult] = useState(0);

            const convertRates = () => {
            const rate = rates[currency];
            setResult((amount / rate).toFixed(5))}

            <Button title="Convert" onPress={convertRates}/>
            *Keksin erotella funktion ja saada live refresh aikaan
        */
    const rate = rates[currency];
    const result = ((amount / rate).toFixed(5))

    return (
        <View style={styles.screen}>
            <StatusBar hidden={true} />
            <View style={styles.maincontainer}>
                <Text style={{ fontSize: 24 }}>{amount} {currency} = {result} €</Text>

                <View style={styles.row}>
                    <View style={styles.inputs}>
                        <TextInput
                            style={{ fontSize: 20, }}
                            type="numeric"
                            placeholder="Amount"
                            onChangeText={amount => setAmount(amount)} />
                    </View>
                    <View style={styles.picker}>
                        <Picker
                            selectedValue={currency}
                            onValueChange={value => setCurrency(value)}>
                            {
                                Object.keys(rates).map((item, index) =>
                                    <Picker.Item key={index} label={item} value={item} />)
                            }
                        </Picker>
                    </View>
                </View>

            </View>
        </View>
    );
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
    row: {
        height: 90,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 20,
        margin: 1,
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
        flex: 9,
        width: "100%",
        backgroundColor: '#FFFFFF',
        margin: 1,
    },
    inputs: {
        width: "50%",
        height: "100%",
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        margin: 1,
    },
    picker: {
        width: "50%",
        height: "100%",
        borderWidth: 1,
        borderColor: 'black',
        margin: 1,
    },
    text1: {
        fontSize: 18,
        width: 200,
    }
});