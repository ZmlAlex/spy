import React, {useState} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {changeConfig} from '../../redux/reducers/configReducer';
import {View, Text, Button} from 'react-native';
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

  return (
    <View style={{flex: 1}}>
      {minutes.map((item, i) => (
        <ListItem
          key={i}
          title={`${item.number} мин.`}
          leftIcon={{name: item.icon}}
          checkmark={item.number === currentCount}
          onPress={() => setCount(item.number)}
          bottomDivider
        />
      ))}
      <Button title="Выбрать" onPress={handlePress} />
    </View>
  );
};

export default Timer;
