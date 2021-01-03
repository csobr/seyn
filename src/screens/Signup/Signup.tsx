import React, {FormEvent} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import {
  FormInput,
  FormButton,
  PasswordInput,
  ErrorMessage,
} from '../../components/Form/index';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/auth/index';
import {setError, signup} from '../../store/auth/action';

const SignUp = ({}) => {
  const [firstName, setFirstName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const newUser = {
    name: firstName,
    email: email,
    profileImg: '',
    transport: '',
    time: undefined,
    active: false,
    status: '',
  };

  const dispatch = useDispatch();
  const {error} = useSelector((state: RootState) => state.auth);

  React.useEffect(() => {
    return () => {
      if (error) {
        dispatch(setError(''));
      }
    };
  }, [error, dispatch]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    dispatch(signup({email, password, firstName}, () => setLoading(false)));
  };

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Sign up</Text>
        <ErrorMessage error={error} visible={false} />
        <FormInput
          placeholder="Name"
          value={firstName}
          onChangeText={(name) => setFirstName(name)}
          autoFocus={true}
          keyboardType={'default'}
        />
        <FormInput
          placeholder="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
          keyboardType="email-address"
          autoCapitalize={'none'}
        />
        <PasswordInput
          placeholder="Password"
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <FormButton
          titleName="Sign Up"
          onPress={submitHandler}
          disabled={loading}
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
    height: 100,
  },
  title: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: '700',
  },
});
export default SignUp;
