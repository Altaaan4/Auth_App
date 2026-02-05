import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button } from '@components';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<any>();

  const Login = () => {
    const TrueName = 'altan';
    const TruePassword = '1234';

    if (name === TrueName && password === TruePassword) {
      navigation.navigate('Home');
    } else {
      Alert.alert('Hatalı giriş', 'Name veya password yanlış');
    }
  };

  return (
    <View style={styles.container}>
      <Input placeholder="Name - Surname" value={name} onChangeText={setName} />

      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Login" onPress={Login} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
  },
});
