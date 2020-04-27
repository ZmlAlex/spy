import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';

import GameScreen from '../components/screens/GameScreen';
import RolesScreen from '../components/screens/RolesScreen';

import PlayersOptions from '../components/options/PlayersOptions';
import TimerOptions from '../components/options/TimerOptions';
import PackagesOptions from '../components/options/PackagesOptions';
import TimerScreen from '../components/screens/TimerScreen';

const Stack = createStackNavigator();

const SpyNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Игра" component={GameScreen} />
        <Stack.Screen name="Роли" component={RolesScreen} />
        <Stack.Screen
          name="Время"
          component={TimerScreen}
          options={({navigation}) => ({
            headerLeft: () => (
              <HeaderBackButton
                label="Игра"
                onPress={() => navigation.navigate('Игра')}
              />
            ),
          })}
        />

        <Stack.Screen name="Игроки" component={PlayersOptions} />
        <Stack.Screen name="Таймер" component={TimerOptions} />
        <Stack.Screen name="Набор" component={PackagesOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SpyNavigator;
