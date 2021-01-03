import React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  PressableProps,
  StyleProp,
  ViewStyle,
  PressableStateCallbackType,
} from 'react-native';
import Colors from '../../styles/Colors';

interface ButtonProps extends HTMLButtonElement {
  titleName: string;
  disabled?: any;
  onPress?: any;
}
interface PressableOpacity extends PressableProps {
  disabledOpacity?: number;
}
type StyleType = (state: PressableStateCallbackType) => StyleProp<ViewStyle>;

const FormButton = (props: ButtonProps & PressableOpacity) => {
  const {titleName, disabled, disabledOpacity, style, ...rest} = props;
  const getOpacity = React.useCallback(
    (pressed: boolean) => {
      if (disabled) return disabledOpacity ?? 0.6;
      else return pressed ? 0.6 : 1;
    },
    [disabled, disabledOpacity],
  );
  const _style = React.useCallback<StyleType>(
    ({pressed}) => [styles.button, {opacity: getOpacity(pressed)}],
    [getOpacity, style, styles.button],
  );
  return (
    <Pressable style={_style} disabled={disabled} {...rest}>
      <Text style={styles.text}>{titleName}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    width: '75%',
    padding: 15,
    margin: 30,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.background,
    textTransform: 'uppercase',
  },
});
export default FormButton;
