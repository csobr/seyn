import React from 'react';
import {View, Text, TextInput, StyleSheet, Platform} from 'react-native';
import Colors from '../../styles/Colors';

interface FormProps extends HTMLInputElement {
  value: string;
  placeholder: string;
  autoFocus?: boolean;
  autoCompleteType?: any;
  autoCorrect?: any;
  textContentType?: any;
  keyboardType: any;
  autoCapitalize?: any;
  onChangeText?: any;
  onBlur?: any;
}
const FormInput = (props: FormProps) => {
  const {value, placeholder, ...rest} = props;
  const inputRef: React.RefObject<TextInput> = React.createRef();
  const labelRef: React.RefObject<Text> = React.createRef();
  const focusedInput = () => {
    inputRef.current && inputRef.current.setNativeProps(styles.input_focused);
    labelRef.current &&
      labelRef.current?.setNativeProps({style: {color: Colors.accent}});
  };
  const blurInput = () => {
    inputRef.current && inputRef.current.setNativeProps(styles.input_onBlur);
    labelRef.current &&
      labelRef.current.setNativeProps({style: {color: Colors.dark}});
  };
  return (
    <View style={styles.InputContainer} ref={inputRef}>
      <Text ref={labelRef} style={styles.label}>
        {placeholder}
      </Text>
      <TextInput
        autoCorrect={false}
        autoFocus={false}
        value={value}
        style={styles.input}
        selectionColor={Colors.accent}
        onFocus={() => focusedInput()}
        onBlur={() => blurInput()}
        returnKeyType="next"
        blurOnSubmit={false}
        onSubmitEditing={() => inputRef.current?.focus()}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    width: '75%',
    marginBottom: 35,
    padding: Platform.OS === 'android' ? 0 : 4,
    backgroundColor: '#EFEDEA',
    borderBottomWidth: 1,
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
    paddingLeft: 3,
    position: 'absolute',
    paddingTop: 1,
  },
});
export default FormInput;
