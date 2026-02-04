import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // 1. Bunu ekle
import Input from '../../components/Inputs/input';
import Button from '../../components/Buttons/Button';

const HomeScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // 2. Navigation hook'unu tanımla
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <Input
        placeholder="Name - Surname"
        value={name}
        onChangeText={setName}
      />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* 3. Doğrudan onPress içinde yönlendir */}
      <Button 
        title="Login" 
        onPress={() => navigation.navigate('Home')} 
      />
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