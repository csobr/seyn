import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import FormInput from '../../components/Form/FormInput';
import FormButton from '../../components/Form/FormButton';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {ErrorMessage} from '../../components/Form';

const ForgotPassword = ({}) => {
  const {isError, forgotPassword} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  // check it email exits
  async function handlePasswordReset(values) {
    const {email} = values;

    try {
      await forgotPassword(email);
      console.log('Password reset email sent successfully');
    } catch (error) {}
  }

  // const inValid = email === undefined;
  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <ErrorMessage errorText={isError} />
        <FormInput
          placeholderText={'Email'}
          labelValue={email}
          autoCapitalize={'none'}
          onChangeText={checkemail => setEmail(checkemail)}
        />
        <FormButton
          titleName={'Send email'}
          onPress={() => handlePasswordReset}
        />
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
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: '700',
  },
});
export default ForgotPassword;
