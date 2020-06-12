import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import FormInput from '../../components/Form/FormInput';
import {NavProps} from '../Home/Home';
import FormButton from '../../components/Form/FormButton';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {ErrorMessage} from '../../components/Form';

type Props = {
  navigation: NavProps;
};

const ForgotPassword = ({navigation}: Props) => {
  const {email, isError} = React.useContext(AuthContext);

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <ErrorMessage errorText={isError} />
        <FormInput
          placeholderText={'Email'}
          labelValue={email}
          autoCapitalize={'none'}
          onChangeText={setEmail => setEmail}
        />
        <FormButton titleName={'Send email'} onPress={setEmail => setEmail} />
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
