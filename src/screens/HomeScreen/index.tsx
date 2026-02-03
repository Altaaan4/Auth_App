import React, { useState } from 'react';
import { View, Alert, StyleSheet } from 'react-native';
import Input from '../../components/Inputs/input';
import Button from '../../components/Buttons/Button';

const HomeScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');



  return (
    <View style={styles.container}>
      <Input
        placeholder="Name - Surname"
        value={name}
        onChangeText={setName}
      />

      <Input
        placeholder ="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login"   onPress={() => Alert.alert('Hata', 'Butona basıldı!')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
  },
  
});
