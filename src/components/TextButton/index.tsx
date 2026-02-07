import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

type TextButtonProps = {
  text: string;
  onPress: () => void;
};

const TextButton: React.FC<TextButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: '900',
    alignSelf: 'center',
  },
});
