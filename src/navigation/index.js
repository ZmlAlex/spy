import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import GameScreen from '../components/screens/GameScreen';
import RolesScreen from '../components/screens/RolesScreen';

import LanguageScreen from '../components/screens/LanguageScreen';
import TutorialScreen from '../components/screens/TutorialScreen';

import PlayersOptions from '../components/options/PlayersOptions';
import TimerOptions from '../components/options/TimerOptions';
import PackagesOptions from '../components/options/PackagesOptions';
import TimerScreen from '../components/screens/TimerScreen';

//helpers
import {generateHeaderStyles} from '../utils/navigationHelpers';

const TutorialStack = createStackNavigator();

const TutorialStackScreen = () => (
  <TutorialStack.Navigator headerMode="none">
    <TutorialStack.Screen name="Languages" component={LanguageScreen} />
    <TutorialStack.Screen name="Tutorial" component={TutorialScreen} />
  </TutorialStack.Navigator>
);

const GameStack = createStackNavigator();

const GameStackScreen = () => (
  <GameStack.Navigator>
    <GameStack.Screen
      name="Игра"
      component={GameScreen}
      options={generateHeaderStyles()}
    />
    <GameStack.Screen
      name="Роли"
      component={RolesScreen}
      options={generateHeaderStyles()}
    />
    <GameStack.Screen
      name="Время"
      component={TimerScreen}
      options={generateHeaderStyles()}
    />

    <GameStack.Screen name="Игроки" component={PlayersOptions} />
    <GameStack.Screen name="Таймер" component={TimerOptions} />
    <GameStack.Screen
      name="Набор"
      component={PackagesOptions}
      options={generateHeaderStyles()}
    />
  </GameStack.Navigator>
);

const RootStack = createStackNavigator();

const RootStackScreen = () => {
  const tutorialIsRead = useSelector((state) => state.config.tutorialIsRead);

  return (
    <RootStack.Navigator headerMode="none">
      {tutorialIsRead ? (
        <RootStack.Screen name="game" component={GameStackScreen} />
      ) : (
        <RootStack.Screen name="tutorial" component={TutorialStackScreen} />
      )}
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
