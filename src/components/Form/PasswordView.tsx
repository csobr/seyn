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
      <View style={styles.passwordView} ref={inputRef}>
        <Text style={styles.label}>{placeholder}</Text>
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
    padding: 10,
    backgroundColor: '#EDE8E4',
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  input: {
    flex: 1,
    padding: 10,
  },

  input_focused: {
    borderBottomColor: Colors.accent,
  },
  input_onBlur: {
    borderBottomColor: Colors.dark,
  },
  label: {
    fontSize: 11,
    position: 'absolute',
    padding: 3,
  },
});

export default PasswordView;
