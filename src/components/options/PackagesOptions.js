import React from 'react';
import {View, Text, Button} from 'react-native';
import {ListItem} from 'react-native-elements';

const list = [
  {
    title: 'Базовый',
  },
  {
    title: 'Страны',
  },
  {
    title: 'Путешествие',
  },
];

const Players = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{name: item.icon}}
          bottomDivider
          checkmark
        />
      ))}
      <Button title="Выбрать" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Players;
