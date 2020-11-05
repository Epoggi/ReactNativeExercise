import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, ScrollView } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.buttonList}>
                <ScrollView contentContainerStyle={styles.contentContainer}>
                    <Button title="MyPlaces" onPress={() => navigation.navigate('MyPlaces')} />
                    {listSeparator()}
                    <Button title="ShoppingElements" onPress={() => navigation.navigate('ShoppingElements')} />
                    {listSeparator()}
                    <Button title="Text to Speech" onPress={() => navigation.navigate('Text to Speech')} />
                    {listSeparator()}
                    <Button title="Contacts" onPress={() => navigation.navigate('Contacts')} />
                    {listSeparator()}
                    <Button title="ShoppingList" onPress={() => navigation.navigate('ShoppingListV2')} />
                    {listSeparator()}
                    <Button title="Maps103" onPress={() => navigation.navigate('Maps103')} />
                    {listSeparator()}
                    <Button title="Maps101" onPress={() => navigation.navigate('Maps101')} />
                    {listSeparator()}
                    <Button title="Coin Exchange" onPress={() => navigation.navigate('CoinEx')} />
                    {listSeparator()}
                    <Button title="Recipepuppy" onPress={() => navigation.navigate('Recipepuppy')} />
                    {listSeparator()}
                    <Button title="Calculator" onPress={() => navigation.navigate('Calculator')} />
                    {listSeparator()}
                    <Button title="Jobs" onPress={() => navigation.navigate('Jobs')} />
                    {listSeparator()}
                    <Button title="TestField" onPress={() => navigation.navigate('TestField')} />
                    {listSeparator()}
                    <Button title="MultipleTags(CRASH)" onPress={() => navigation.navigate('MultipleTags')} />
                    {listSeparator()}
                    <Button title="MultipleTagsOld" onPress={() => navigation.navigate('MultipleTagsOld')} />
                    {listSeparator()}
                    <Button title="CheckBox" onPress={() => navigation.navigate('CheckBox')} />
                    {listSeparator()}
                    <Button title="CheckBoxC" onPress={() => navigation.navigate('CheckBoxC')} />
                    {listSeparator()}
                    <Button title="CheckBoxE" onPress={() => navigation.navigate('CheckBoxE')} />
                </ScrollView>
            </View>
        </View>
    );
}
const listSeparator = () => {
    return (
        <View style={{
            height: 1,
            width: "90%",
            backgroundColor: "#CED0CE",
            marginLeft: "10%",
            padding: 1,
            margin: 5,
        }}
        />
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        padding: 20,
    },
    buttonList: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',

    },
    contentContainer: {
        paddingVertical: 20,
      }
});