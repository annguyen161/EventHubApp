import {View, Text} from 'react-native';
import React from 'react';
import {fontFamilies} from '../../constants/fontFamilies';
import {ButtonComponent} from '../../components';
import {globalStyles} from '../../styles/globalStyles';

const LoginScreen = () => {
  return (
    <View style={[globalStyles.container]}>
      <Text style={{fontFamily: fontFamilies.regular, fontSize: 40}}>
        LoginScreen
      </Text>
      <ButtonComponent disable text="SIGN IN" type="primary" />
    </View>
  );
};

export default LoginScreen;
