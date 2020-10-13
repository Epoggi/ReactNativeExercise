import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, View, TextInput } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import {api_key} from '../private/config.js';

export default function Maps101() {
  const [location, setLocation] = useState({
    latitude: 60.200692,
    longitude: 24.934302,
    latitudeDelta: 0.0322,
    longitudeDelta: 0.0221,
  })
  

  const [input, setInput] = useState('');
  const key = api_key;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${input}&key=${key}`;
  
  const getGeocode = () => {
     
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const lat = data.results[0].geometry.location.lat;
        const lon = data.results[0].geometry.location.lng;
        setLocation({
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0121
        });
      })
      .catch((error) => {
        Alert.alert('Error', error)
      });
  }

  return (
    <View style={styles.mainContainer}>
      <MapView
        style={{ flex: 1 }}
        region={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221,
        }}>
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title={input}
        />
      </MapView>
      <TextInput  placeholder='type address' style={{height:35, fontSize: 20}} onChangeText={input => setInput(input)}/>
      <Button title='Find' onPress={getGeocode} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  buttonList: {
    flex: 1,
    width: "100%",
    backgroundColor: '#FFFFFF',
    alignItems: 'center',

  },
});