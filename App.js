/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Colors from './src/Config/Colors';
import Images from './src/Config/Images';

import SC7Onboarding from 'sc7onboarding';

const App: () => React$Node = () => {
  return (
    <SC7Onboarding
      screenAmount = {3}
      navigationNames = {["Onboarding1", "Onboarding2", "Onboarding3"]}
      backgroundColors = {[Colors.azul, Colors.naranja, Colors.verde]}
      textColors = {[Colors.white, Colors.white, Colors.white]}
      titles = {["Title1", "Title2", "Title3"]}
      descriptions = {["Description 1", "Description 2", "Description 3"]}
      images = {[Images.IMG1, Images.IMG2, Images.IMG3]}
      nextText = {"Next"}
      backText = {"Back"}
      endText = {"End"}
      onClickEnd = {() => {console.log("End")}}
    />
  );
};

export default App;
