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
      <Button
        title="Save Account"
        onPress={() => navigation.navigate(LoginScreen)}
      />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
  },
});
