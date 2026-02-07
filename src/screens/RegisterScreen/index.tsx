import { StyleSheet, View } from 'react-native';
import { useState } from 'react';
import React from 'react';
import { Input, Button } from '@components';
import LoginScreen from '../LoginScreen';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const [newName, setNewName] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Name - Surname"
          value={newName}
          onChangeText={setNewName}
        />
        <Input
          placeholder="Password"
          value={newpassword}
          onChangeText={setNewPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Save Account"
          onPress={() => navigation.navigate(LoginScreen)}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;

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
