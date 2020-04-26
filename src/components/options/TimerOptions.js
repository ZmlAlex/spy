import React from 'react';
import {View, Text, Button} from 'react-native';
import {ListItem} from 'react-native-elements';

const list = [
  {
    title: '1 мин.',
  },
  {
    title: '2 мин.',
  },
  {
    title: '3 мин.',
  },
  {
    title: '4 мин.',
  },
  {
    title: '5 мин.',
  },
  {
    title: '6 мин.',
  },
  {
    title: '7 мин.',
  },
  {
    title: '8 мин.',
  },
];

const Timer = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      {list.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          leftIcon={{name: item.icon}}
          onPress={() => alert('234')}
          bottomDivider
          checkmark
        />
      ))}
      <Button title="Выбрать" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Timer;
