import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import FormInput from '../../components/Form/FormInput';
import FormButton from '../../components/Form/FormButton';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {ErrorMessage} from '../../components/Form';

const ForgotPassword = ({}) => {
  const {email, isError, forgotPassword} = React.useContext(AuthContext);

  // check it email exits

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <ErrorMessage errorText={isError} />
        <FormInput
          placeholderText={'Email'}
          labelValue={email}
          autoCapitalize={'none'}
          onChangeText={email || forgotPassword}
        />
        <FormButton
          titleName={'Send email'}
          onPress={() => forgotPassword(email)}
          // disabled={}
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
