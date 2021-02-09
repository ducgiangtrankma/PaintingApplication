import React from 'react';
import {View} from 'react-native';
import CaptureImage from './src/CaptureImages';
import {ModalPortal} from 'react-native-modals';
import Painting from './src/Painting';
export default function App() {
  return (
    <View style={{flex: 1}}>
      <ModalPortal />
      <Painting />
    </View>
  );
}
