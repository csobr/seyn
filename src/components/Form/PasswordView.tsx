import React from 'react';
import {SvgXml} from 'react-native-svg';
import {eyeHide} from '../../assets/icons/showpassword/hidepassword';
import {eyeShow} from '../../assets/icons/showpassword/showpassword';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Props = {
  hidden: boolean;
};

const PasswordView: React.FC<Props> = () => {
  const [icon, setIcon] = React.useState(eyeHide);
  const [hidden, setToHidden] = React.useState(true);

  const passwordView = () => {
    icon !== eyeShow
      ? (setIcon(eyeShow), setToHidden(false))
      : (setIcon(eyeHide), setToHidden(true));
  };

  return (
    <>
      <TouchableOpacity onPress={() => passwordView()}>
        <SvgXml xml={icon} width="15" height="15" />
      </TouchableOpacity>
    </>
  );
};

//export const PasswordViewContext = React.createContext<Partial<Props>>({});
export default PasswordView;
