import { TextInput, StyleSheet } from 'react-native';
import React from 'react';

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
};

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    borderRadius: 30,
    fontSize: 16,
  },
});
