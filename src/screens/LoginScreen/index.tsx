import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../../components/InputBox';
import Button from '../../components/Button';

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Input placeholder="Name - Surname" value={name} onChangeText={setName} />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={() => navigation.navigate('Home')} />
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
