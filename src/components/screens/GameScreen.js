import React from 'react';
import {View, Text, Button} from 'react-native';
import {ListItem} from 'react-native-elements';

const optionsList = [
  {
    title: 'Игроки',
    icon: 'rowing',
    config: 'Игроки',
  },
  {
    title: 'Таймер',
    icon: 'av-timer',
    config: 'Таймер',
  },
  {
    title: 'Набор',
    icon: 'package',
    config: 'Набор',
  },
];

const packageList = [
  {
    title: 'Озеро',
    icon: 'geo',
    config: 'Игроки',
  },
  {
    title: 'Лес',
    icon: 'geo',
    config: 'Таймер',
  },
  {
    title: 'Река',
    icon: 'geo',
    config: 'Набор',
  },
  {
    title: 'Кафе',
    icon: 'geo',
    config: 'Набор',
  },
  {
    title: 'Ночной клуб',
    icon: 'geo',
    config: 'Набор',
  },
  {
    title: 'Торговый центр',
    icon: 'geo',
    config: 'Набор',
  },
];

const GameScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {/* <Text>Game Screen</Text> */}
      {/* <Button
        title="Go to Detailssss"
        onPress={() => navigation.navigate('Details')}
      /> */}
      {optionsList.map((item, i) => (
        <ListItem
          key={i}
          onPress={() => navigation.navigate(item.config)}
          title={item.title}
          leftIcon={{name: item.icon}}
          bottomDivider
          chevron
        />
      ))}
      {packageList.map((item, i) => (
        <ListItem
          key={i}
          rightTitle={item.title}
          rightIcon={{name: item.icon}}
          bottomDivider
        />
      ))}
      <Button title="Начать" onPress={() => navigation.navigate('Роли')} />
    </View>
  );
};

export default GameScreen;
