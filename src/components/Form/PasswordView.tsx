import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
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
  onChangeText: any;
}

const PasswordView: React.FC<Props> = props => {
  const {value, placeholder, ...rest} = props;
  const [icon, setIcon] = React.useState(eyeHide);
  const [hidden, setToHidden] = React.useState(true);

  const inputRef: React.RefObject<TextInput> = React.createRef();
  const focusedInput = () => {
    inputRef.current && inputRef.current.setNativeProps(styles.input_focused);
  };
  const onBlur = () => {
    inputRef.current && inputRef.current.setNativeProps(styles.input_onBlur);
  };
  const passwordView = () => {
    icon !== eyeShow
      ? (setIcon(eyeShow), setToHidden(false))
      : (setIcon(eyeHide), setToHidden(true));
  };

  return (
    <React.Fragment>
      <Text style={styles.label}>{placeholder}</Text>
      <View style={styles.passwordView} ref={inputRef}>
        <TextInput
          style={styles.input}
          secureTextEntry={hidden}
          textContentType="password"
          selectionColor={Colors.accent}
          onFocus={() => focusedInput()}
          onBlur={() => onBlur()}
          {...rest}
        />
        <TouchableOpacity onPress={() => passwordView()}>
          <SvgXml xml={icon} width="20" height="20" />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  passwordView: {
    flexDirection: 'row',
    width: '70%',
    marginBottom: 30,
    padding: 15,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: Colors.dark,
  },
  input: {
    flex: 1,
  },

  input_focused: {
    borderColor: Colors.accent,
  },
  input_onBlur: {
    borderColor: Colors.dark,
  },
  label: {
    fontSize: 16,
    textAlign: 'left',
    width: '70%',
  },
});

export default PasswordView;
