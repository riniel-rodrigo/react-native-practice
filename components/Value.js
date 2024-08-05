import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useBalance } from '../context/balanceContext'

const Value = () => {

  const {balance} = useBalance();

  return(    
    <View>
      <Text style = {styles.text}> Saldo: {balance} </Text>
    </View>
  )

}

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    fontSize: 18,
    marginTop: 10,
    fontWeight: '500',
  },
  
})

export default Value;