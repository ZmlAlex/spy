import React, {useMemo, useLayoutEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {ListItem} from 'react-native-elements';
import {resetConfig} from '../../redux/reducers/configReducer';

import {optionsList, packs} from '../../data/config';

const GameScreen = ({navigation}) => {
  const config = useSelector((state) => state.config, shallowEqual);
  const dispatch = useDispatch();
  const currentPack = useMemo(
    () => packs.find((item) => item.name === config.package),
    [config.package],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={(e) => dispatch(resetConfig())} title="Язык" />
      ),
    });
  }, [navigation, dispatch]);

  return (
    <View style={{flex: 1}}>
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
      {currentPack.places.map((item, i) => (
        <ListItem
          key={i}
          rightTitle={item}
          rightIcon={{name: item.icon}}
          bottomDivider
        />
      ))}
      <Button title="Начать" onPress={() => navigation.navigate('Роли')} />
    </View>
  );
};

export default GameScreen;
