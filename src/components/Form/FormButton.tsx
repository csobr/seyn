import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';
import Colors from '../../styles/Colors';

interface ButtonProps extends HTMLButtonElement {
  titleName: string;
  disabled?: any;
  onPress?: any;
}

const FormButton: React.FC<ButtonProps> = ({titleName, disabled, ...props}) => (
  <Pressable
    style={({pressed}) => [
      {backgroundColor: pressed ? Colors.ligther : Colors.accent},
      styles.button,
    ]}
    {...props}>
    <Text style={styles.text}>{titleName}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    width: '70%',
    padding: 15,
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.background,
    textTransform: 'uppercase',
  },
});
export default FormButton;
