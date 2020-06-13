import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps extends HTMLButtonElement {
  titleName: string;
  onPress: any;
  disabled: any;
  underlayColor: any;
}
const FormButton: React.FC<ButtonProps> = ({titleName, disabled, ...props}) => (
  <TouchableOpacity
    activeOpacity={disabled ? 1 : 0.7}
    underlayColor={Colors.grey}
    {...props}
    style={styles.button}>
    <Text style={styles.text}>{titleName}</Text>
  </TouchableOpacity>
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
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.background,
    textTransform: 'uppercase',
  },
});
export default FormButton;
