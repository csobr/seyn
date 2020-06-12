import React from 'react';
import FormInput from '../../components/Form/FormInput';
import {AuthContext} from '../../components/Auth/AuthProvider';
import {View, Text, StyleSheet} from 'react-native';
import GlobalStyles from '../../styles/GlobalStyles';
import FormButton from '../../components/Form/FormButton';

const ResetPassword = ({}) => {
  const {password} = React.useContext(AuthContext);
  const [resetPassword, setResetPassword] = React.useState(password);

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>Reset Password</Text>
        <FormInput placeholder="New Password" labelValue={resetPassword} />
        <FormInput
          placeholder=" Confirm New Password"
          labelValue={resetPassword}
        />
        <FormButton titleName={'Reset password'} />
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
export default ResetPassword;
