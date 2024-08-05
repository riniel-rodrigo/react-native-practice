import React, { useState } from 'react';
import { StyleSheet, Button, TextInput } from 'react-native'

import {useBalance} from '../context/balanceContext'


const Launch = (props) => {

  const [userValue, setUserValue] = useState(0);
  const {balance, setBalance} = useBalance();

  return(
    <>
      <TextInput
        style={styles.input}
        onChangeText={setUserValue}
        value={userValue}
        placeholder="0,00"
        keyboardType="numeric"
      />

      <Button
        title={props.Credito ? "Adicionar Saldo" : "Subtrair Saldo"}
        color={props.Credito ? "#89b153" : "#bc4749"}
        onPress={() => {
          if(props.Credito){
            setBalance(balance + Number(userValue));
          }
          else{
            setBalance(balance - Number(userValue));
          }
        }}
      />
    
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 5
  },
});

export default Launch;