import React, {useState, useEffect, useLayoutEffect} from 'react';
import {HeaderBackButton} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';

const TimerScreen = ({navigation}) => {
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    if (!counter) {
      setCounter('end');
    }

    return () => clearInterval(timer);
  }, [counter]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          label="Игра"
          onPress={() => navigation.navigate('Игра')}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{counter}</Text>
      <Text> Minutes : {Math.floor(counter / 60)}</Text>
      <Text> Seconds: {counter - 60 * Math.floor(counter / 60)}</Text>
      <Text>
        Начинайте задавать вопросы! Успейте вычислить шпиона прежде, чем истечет
        время, иначе он победит.
      </Text>
    </View>
  );
};

TimerScreen.navigationOptions = ({navigate, navigation}) => ({
  tabBarLabel: 'Your custom label...',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerRight: (
    <Button
      title="Name"
      onPress={() => {
        navigation.navigate('viewname');
      }}
    />
  ),
  headerLeft: (
    <Button
      title="Name"
      onPress={() => {
        navigation.navigate('viewname');
      }}
    />
  ),
});

export default TimerScreen;
