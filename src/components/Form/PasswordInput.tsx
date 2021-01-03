import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {eyeHide} from '../../assets/icons/showpassword/hidepassword';
import {eyeShow} from '../../assets/icons/showpassword/showpassword';
import {SvgXml} from 'react-native-svg';
import Colors from '../../styles/Colors';

interface Props extends HTMLInputElement {
  icon?: string;
  hidden?: boolean;
  value?: string;
  placeholder?: string;
  onChangeText?: any;
  onBlur?: any;
}

const PasswordView: React.FC<Props> = (props) => {
  const {value, placeholder, ...rest} = props;
  const [icon, setIcon] = React.useState(eyeHide);
  const [hidden, setToHidden] = React.useState(true);

  const inputRef: React.RefObject<TextInput> = React.createRef();
  const labelRef: React.RefObject<Text> = React.createRef();
  const focusedInput = () => {
    inputRef.current && inputRef.current.setNativeProps(styles.input_focused);
    labelRef.current &&
      labelRef.current.setNativeProps({style: {color: Colors.accent}});
  };
  const onBlur = () => {
    inputRef.current && inputRef.current.setNativeProps(styles.input_onBlur);
    labelRef.current &&
      labelRef.current.setNativeProps({style: {color: Colors.dark}});
  };
  const passwordView = () => {
    icon !== eyeShow
      ? (setIcon(eyeShow), setToHidden(false))
      : (setIcon(eyeHide), setToHidden(true));
  };

  return (
    <React.Fragment>
      <View style={styles.passwordInputContainer} ref={inputRef}>
        <Text ref={labelRef} style={styles.label}>
          {placeholder}
        </Text>
        <TextInput
          style={styles.input}
          secureTextEntry={hidden}
          textContentType="password"
          autoCapitalize={'none'}
          selectionColor={Colors.accent}
          onFocus={() => focusedInput()}
          onBlur={() => onBlur()}
          {...rest}
        />
        <TouchableOpacity onPress={() => passwordView()} style={styles.icon}>
          <SvgXml xml={icon} fill={Colors.grey} width="25" height="20" />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  passwordInputContainer: {
    flexDirection: 'row',
    width: '75%',
    marginBottom: 30,
    backgroundColor: '#EFEDEA',
    borderBottomWidth: 1,
    padding: Platform.OS === 'android' ? 0 : 4,
  },
  input: {
    flex: 1,
    paddingBottom: 5,
    paddingLeft: 3,
    paddingTop: 20,
    includeFontPadding: false,
  },

  input_focused: {
    borderBottomColor: Colors.accent,
  },
  input_onBlur: {
    borderBottomColor: Colors.dark,
  },
  label: {
    fontSize: 11,
    padding: 1,
    paddingLeft: 3,
    position: 'absolute',
  },
  icon: {
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PasswordView;
