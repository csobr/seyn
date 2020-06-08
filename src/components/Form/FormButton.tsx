import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

interface ButtonProps extends HTMLButtonElement {
  titleName: string;
  onPress: any;
}
const FormButton: React.FC<ButtonProps> = props => {
  const {titleName, onPress} = props;
  return (
    <View style={styles.button}>
      <Button
        title={titleName}
        onPress={() => onPress}
        color={Colors.background}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dark,
    height: 40,
    width: 150,
    margin: 30,
    borderRadius: 5,
  },
});
export default FormButton;
