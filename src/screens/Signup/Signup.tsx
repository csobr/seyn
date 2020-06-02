import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Colors from '../../styles/Colors';
import GlobalStyles from '../../styles/GlobalStyles';

const SignUp: React.FC = props => {
  const {navigation} = props;
  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>

        <TextInput
          keyboardType="number-pad"
          placeholder="phone-number"
          selectionColor={Colors.black}
          keyboardAppearance={'dark'}
        />

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
        <Button title="Sign Up" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
    fontWeight: '600',
  },
  input: {
    width: 200,
    height: 30,
    borderColor: Colors.black,
    borderBottomWidth: 1,
  },
});
export default SignUp;
