import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Colors from '../../styles/Colors';

interface ButtonProps extends HTMLButtonElement {
  titleName: string;
  disabled: any;
}
const activeRef: React.RefObject<TouchableWithoutFeedback> = React.createRef();
const active = () => {
  activeRef.current && activeRef.current;
};
const FormButton: React.FC<ButtonProps> = ({titleName, disabled, ...props}) => (
  // change to pressable
  <View style={styles.button}>
    <TouchableWithoutFeedback
      ref={activeRef}
      onPressIn={() => active()}
      {...props}>
      <Text style={styles.text}>{titleName}</Text>
    </TouchableWithoutFeedback>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dark,
    height: 50,
    width: 240,
    margin: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: Colors.accent,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.background,
    textTransform: 'uppercase',
  },
});
export default FormButton;
