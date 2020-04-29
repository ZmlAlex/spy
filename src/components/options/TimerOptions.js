import React, {useState} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {changeConfig} from '../../redux/reducers/configReducer';
import {View, Button, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

import {minutes} from '../../data/config';

const Timer = ({navigation}) => {
  const timerCount = useSelector(
    (state) => state.config.timerCount,
    shallowEqual,
  );
  const dispatch = useDispatch();

  const [currentCount, setCount] = useState(timerCount);

  const handlePress = () => {
    dispatch(changeConfig({option: 'timerCount', value: currentCount}));
    navigation.goBack();
  };

  const keyExtractor = (_, index) => index.toString();

  const renderItem = ({item, i}) => (
    <ListItem
      key={i}
      title={`${item.number} мин.`}
      leftIcon={{name: item.icon}}
      checkmark={item.number === currentCount}
      onPress={() => setCount(item.number)}
      bottomDivider
    />
  );

  return (
    <>
      <View style={{flex: 1}}>
        <FlatList
          keyExtractor={keyExtractor}
          data={minutes}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Button title="Выбрать" onPress={handlePress} />
      </View>
    </>
  );
};

export default Timer;
