import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Button, } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.buttonList}>
        <Button title="Maps101" onPress={()=> navigation.navigate('Maps101')}/>
        {listSeparator()}   
        <Button title="Coin Exchange" onPress={()=> navigation.navigate('CoinEx')}/>
        {listSeparator()}
        <Button title="Recipepuppy" onPress={()=> navigation.navigate('Recipepuppy')}/>
        {listSeparator()}
        <Button title="Calculator" onPress={()=> navigation.navigate('Calculator')}/>
        {listSeparator()}
        <Button title="Jobs" onPress={()=> navigation.navigate('Jobs')}/>
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
            padding:1,
            margin:5,
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
        width: "100%",
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        
    },
});