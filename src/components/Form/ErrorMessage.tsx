import React from 'react';
import {Text, StyleSheet} from 'react-native';

interface Props extends HTMLElement {
  errorText: string;
}
const ErrorMessage: React.FC<Props> = ({errorText}) => (
  <Text style={styles.error}>{errorText}</Text>
);

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 11,
  },
});
export default ErrorMessage;
