import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function CalculatorHistory({route}) {

const {list} = route.params;

  return (
    <View style={styles.container}>
         <FlatList data={list}
         
          keyExtractor={((item, index) => index.toString())}
          renderItem={({item}) => <Text style={{fontSize:20}}>{item}</Text>}
          />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    inputs:{
      width: 200,
      borderWidth: 1,
      borderColor: 'black',
    },
    buttons:{
      flex:1,
      flexDirection:'row',
      width:150,
      alignItems:'flex-start',
      justifyContent:'space-around',
      padding:20,
    },
    listcontainer: {
      flex: 4,
      padding:10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });