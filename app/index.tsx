import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const index = () => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [value, SetValue] = useState(0);
  
  return (
    <View style={styles.body}>

      <Text style={styles.range}>Enter your Range</Text>

      <TextInput 
      value={min}  
      placeholder='First Value'
      onChangeText={setMin}
      returnKeyType="next"
      keyboardType='numeric'
      style={styles.userInput}
      />

<TextInput 
      value={max}  
      placeholder='Second Value'
      onChangeText={setMax}
      returnKeyType="done"
      keyboardType='numeric'
      
      keyboardAppearance='dark'
      style={styles.userInput}
      />

  <Text style={styles.output}>{value}</Text>


    <TouchableOpacity 
      style={styles.generateButton}
      onPress={()=>{
      const random = Math.floor(Math.random()*(parseInt(max)-parseInt(min)+1)+parseInt(min));
      SetValue(random);
      }}><Text>Generate</Text></TouchableOpacity>
    
   
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  body:{
    margin: 0,
    padding: 10,
    justifyContent: 'center',
    flex: 1,
    alignItems:'center',
    backgroundColor: 'gray',

    
  },

  range:{
    margin: 0,
    fontSize: 30,
    color: 'white'
    
  },
  userInput:{
    margin: 5,
    textAlign: 'center',
    backgroundColor: 'white',
    fontSize: 30,
    borderRadius: 10,
    width: 300,
    height: 70,
  },

  output:{
    color: 'red',
    fontSize: 100,
    justifyContent: 'center',

  },
  generateButton:{
    margin: 10,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'goldenrod',
    width: 150,
    height: 40,
    borderRadius: 10,
    color: 'white',
  }
})