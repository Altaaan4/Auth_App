import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, Button, TextButton } from '@components';

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
      <View style={styles.inputContainer}>
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
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={Login} />

        <TextButton
          text="Click here to create an account."
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputContainer: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    gap: 10,
  },
});
