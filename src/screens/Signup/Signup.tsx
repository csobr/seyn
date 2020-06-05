import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Colors from '../../styles/Colors';
import GlobalStyles from '../../styles/GlobalStyles';
import FormInput from '../../components/Form/FormInput';
import {AuthContext} from '../../components/Auth/AuthProvider';

const SignUp: React.FC = ({}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {register} = React.useContext(AuthContext);
  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <FormInput
          placeholderText="Email"
          onChangeText={userEmail => setEmail(userEmail)}
          labelValue={email}
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize={'none'}
          style={styles.input}
        />
        <FormInput
          placeholderText="Password"
          labelValue={password}
          secureTextEntry={true}
          onChangeText={userPassword => setPassword(userPassword)}
          style={styles.input}
        />
        <Button title="Sign up" onPress={() => register(email, password)} />
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
    marginBottom: 30,
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
