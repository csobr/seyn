import React, {FormEvent} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import FormInput from '../../components/Form/FormInput';
import FormButton from '../../components/Form/FormButton';
import {ErrorMessage} from '../../components/Form';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/auth';
import {
  setError,
  setLoading,
  sendPasswordResetEmail,
  setSuccess,
} from '../../store/auth/action';

const ForgotPassword = ({}) => {
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const dispatch = useDispatch();
  const {error, success} = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
      if (success) {
        dispatch(setSuccess(''));
      }
    };
  }, [error, dispatch]);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await dispatch(sendPasswordResetEmail(email, 'Email sent!'));
    setLoading(false);
  };

  const inValid = email === undefined;
  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Forgot Password</Text>
        <ErrorMessage error={error} visible={true} />
        <FormInput
          placeholder={'Email'}
          keyboardType={'email-address'}
          value={email}
          autoCapitalize={'none'}
          autoFocus={true}
          onChangeText={(e) => setEmail(e.currentTarget.value)}
        />
        <FormButton titleName={'Send email'} onPress={submitHandler} />
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
