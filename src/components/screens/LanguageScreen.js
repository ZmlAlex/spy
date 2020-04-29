import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeConfig} from '../../redux/reducers/configReducer';
import {View, Text, Button, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

import languages from '../../languages';

const LanguageScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [currentLanguage, setCurrentLanguage] = useState(null);

  const handlePress = () => {
    dispatch(changeConfig({option: 'language', value: currentLanguage}));

    navigation.navigate('Tutorial');
  };

  const keyExtractor = (_, index) => index.toString();

  const renderItem = ({item, i}) => (
    <ListItem
      key={i}
      title={`${item}`}
      leftIcon={{name: item.icon}}
      checkmark={item === currentLanguage}
      onPress={() => setCurrentLanguage(item)}
      bottomDivider
    />
  );

  return (
    <>
      <View style={{flex: 1, marginTop: 30}}>
        <FlatList
          keyExtractor={keyExtractor}
          data={Object.keys(languages).map((elem) => languages[elem].title)}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Button title="Выбрать" onPress={handlePress} />
      </View>
    </>
  );
};

export default LanguageScreen;
