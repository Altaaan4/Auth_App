import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import React from 'react';

type InputProps = {
  value: string;
  onChangeText: (text: string) => void;
} & TextInputProps;

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  ...props
}) => {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      {...props}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
});
