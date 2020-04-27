import React, {useState} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {changeConfig} from '../../redux/reducers/configReducer';
import {View, Text, Button} from 'react-native';
import {ListItem} from 'react-native-elements';

import {players} from '../../data/config';

const Players = ({navigation}) => {
  const playerCount = useSelector(
    (state) => state.config.playerCount,
    shallowEqual,
  );
  const dispatch = useDispatch();

  const [currentCount, setCount] = useState(playerCount);

  const handlePress = () => {
    dispatch(changeConfig({option: 'playerCount', value: currentCount}));
    navigation.goBack();
  };

  return (
    <View style={{flex: 1}}>
      {players.map((item, i) => (
        <ListItem
          key={i}
          title={item.number}
          leftIcon={{name: item.icon}}
          bottomDivider
          checkmark={item.number === currentCount}
          onPress={() => setCount(item.number)}
        />
      ))}
      <Button title="Выбрать" onPress={handlePress} />
    </View>
  );
};

export default Players;
