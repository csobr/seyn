import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Colors from '../../styles/Colors';
import GlobalStyles from '../../styles/GlobalStyles';

const SignUp: React.FC = ({}) => {
  return (
    <View style={GlobalStyles.body}>
      <Text style={styles.title}>Sign up</Text>

      <TextInput keyboardType="number-pad" placeholder="phone-number" />
      {/* <TextInput
        placeholder="Email"
        autoCapitalize="none"
        onChangeText={email => email}
        value={'Email'}
        style={styles.input}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        value={'Password'}
        autoCapitalize="none"
        onChangeText={password => password}
        style={styles.input}
      /> */}
      {/* <Button title="Sign Up" /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 32,
  },
  input: {
    width: 200,
    height: 30,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
});
export default SignUp;
