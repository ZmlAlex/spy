import 'react-native-gesture-handler';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeConfig} from '../redux/reducers/configReducer';

import Tutorial from '../components/Tutorial';
import SpyNavigator from '../navigation';

const Game = () => {
  const tutorialIsRead = useSelector((state) => state.config.tutorialIsRead);
  const dispatch = useDispatch();

  const handleOnDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    dispatch(changeConfig({option: 'tutorialIsRead', value: true}));
  };

  return tutorialIsRead ? (
    <SpyNavigator />
  ) : (
    <Tutorial handleOnDone={handleOnDone} />
  );
};

export default Game;
