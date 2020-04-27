import React, {useState} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {changeConfig} from '../../redux/reducers/configReducer';
import {View, Text, Button} from 'react-native';
import {ListItem} from 'react-native-elements';

import {packs} from '../../data/config';

const PackagesOption = ({navigation}) => {
  const pack = useSelector((state) => state.config.package, shallowEqual);
  const dispatch = useDispatch();

  const [currentPack, setCurrentPack] = useState(pack);

  const handlePress = () => {
    dispatch(changeConfig({option: 'package', value: currentPack}));
    navigation.goBack();
  };
  return (
    <View style={{flex: 1}}>
      {packs.map((item, i) => (
        <ListItem
          key={i}
          title={item.name}
          leftIcon={{name: item.icon}}
          onPress={() => setCurrentPack(item.name)}
          checkmark={item.name === currentPack}
          bottomDivider
        />
      ))}
      <Button title="Выбрать" onPress={handlePress} />
    </View>
  );
};

export default PackagesOption;
