import React from 'react';
import {View, Text, Button} from 'react-native';
import {ListItem} from 'react-native-elements';

const list = [
  {
    title: '1',
  },
  {
    title: '2',
  },
  {
    title: '3',
  },
  {
    title: '4',
  },
  {
    title: '5',
  },
  {
    title: '6',
  },
  {
    title: '7',
  },
  {
    title: '8',
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
