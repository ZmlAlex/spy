import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LanguageScreen from '../components/screens/LanguageScreen';
import TutorialScreen from '../components/screens/TutorialScreen';

import GameScreen from '../components/screens/GameScreen';
import RolesScreen from '../components/screens/RolesScreen';
import TimerScreen from '../components/screens/TimerScreen';

import PlayersOptions from '../components/screens/GameScreen/components/PlayersOptions';
import TimerOptions from '../components/screens/GameScreen/components/TimerOptions';
import PackagesOptions from '../components/screens/GameScreen/components/PackagesOptions';

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
      options={{
        headerStyle: {
          shadowColor: 'transparent',
        },
        gestureEnabled: false,
      }}
    />
    <GameStack.Screen
      name="Время"
      component={TimerScreen}
      options={{
        header: () => null,
        gestureEnabled: false,
      }}
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
