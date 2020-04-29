import React, {useState} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {changeConfig} from '../../redux/reducers/configReducer';
import {View, Button, FlatList} from 'react-native';
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

  const keyExtractor = (_, index) => index.toString();

  const renderItem = ({item, i}) => (
    <ListItem
      key={i}
      title={item.number}
      leftIcon={{name: item.icon}}
      bottomDivider
      checkmark={item.number === currentCount}
      onPress={() => setCount(item.number)}
    />
  );

  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          keyExtractor={keyExtractor}
          data={players}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Button title="Выбрать" onPress={handlePress} />
      </View>
    </>
  );
};

export default Players;
