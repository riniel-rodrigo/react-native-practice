import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import Value from './components/Value';
import Launch from './components/launch';
import BalanceProvider from './context/balanceContext';

const App = () => {
  return (
    <BalanceProvider>
      <View style={styles.container}>
        <Value />
        <Launch Credito />
        <Launch />
      </View>
    </BalanceProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    padding: 10,
  },
});

export default App;
