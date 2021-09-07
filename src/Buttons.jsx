import React , { useState, Component , useEffect, useContext} from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, Button, Platform,TouchableOpacity } from 'react-native';



const ExtraText = '  Dom';
const Etext = React.createContext(ExtraText);


const ButtonInput = (props) => {
  const textExtra = useContext(Etext);
        return (  
              
        
            <TouchableOpacity style={styles.container} onPress={() => props.handleOnPress(props.value)}>
                <Text style={styles.text}>{props.value + textExtra}</Text>
                </TouchableOpacity>
        );
      
    }

  const styles = StyleSheet.create({
    container: {
          flex: 1,
          margin: 2,
          backgroundColor: 'rgba(255,255,255,0.1)',
          justifyContent: 'center',
          alignItems: 'center'
        
      },
      text: {
          color: 'white',
          fontSize: 26
      }
   
  });
  
export default ButtonInput;