import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';

export default function Calculator({navigation}) {

  const [result, setResult] = useState(0);
  const [v1, setV1] = useState();
  const [v2, setV2] = useState();
  const [data, setData] = useState([]);
  const sum = parseFloat(v1) + parseFloat(v2);
  const sumStr = v1 + " + " + v2 + " = " + sum;
  const dec = parseFloat(v1) - parseFloat(v2);
  const decStr = v1 + " - " + v2 + " = " + dec;
 
  const addPressed = () => {
    setResult(sum)  
    setData([sumStr, ...data])
    setV1('')
    setV2('')
  }
  const decPressed = () => {
    setResult(dec)
    setData([decStr, ...data])
    setV1('')
    setV2('')
  }


  return (

<View style={styles.container}>
        <Text style={{textAlign:'center'}}>Result:{result.toFixed(2)}</Text>
        <TextInput style={styles.inputs}
        keyboardType='numeric'
        onChangeText={jotain =>setV1(jotain)} value={v1}/>
        <TextInput style={styles.inputs} keyboardType='numeric' onChangeText={testi =>setV2(testi)} value={v2}/>
        <StatusBar style="auto" />
      <View style={styles.buttons}>
        <Button  title='+' onPress={addPressed}/>
        <Button  title='-' onPress={decPressed}/>
      </View>
      <View style={styles.hstr}>
        <Button title="Calculator History" onPress={()=> navigation.navigate('CalculatorHistory', {list: data})}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    buttons:{
      flex:1,
      flexDirection:'row',
      width:150,
      alignItems:'flex-start',
      justifyContent:'space-around',
      padding:20,
    },
    hstr:{
      flex:1,
      alignItems:'flex-start',
      padding:20,
    },
    listcontainer: {
      flex: 4,
      padding:10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputs:{
      width: 200,
      borderWidth: 1,
      borderColor: 'black',
    },
  });