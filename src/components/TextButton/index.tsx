import { StyleSheet, Text,TouchableOpacity } from 'react-native'
import React from 'react'

type TextButtonProps = {
  text: string;
  onPress: () => void;
};

const TextButton: React.FC<TextButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.TextContainer}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TextButton

const styles = StyleSheet.create({
    TextContainer: {
    color: 'black',
    fontSize: 15,
    fontWeight: '900',
    padding:40,
    alignItems:'center'
  },},
    
)