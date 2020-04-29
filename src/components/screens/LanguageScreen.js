import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {setLocale} from 'react-redux-i18n';
import {View, Text, Button, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements';

import {languagesList} from '../../languages';

const LanguageScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [currentLanguage, setCurrentLanguage] = useState({});

  const handlePress = () => {
    dispatch(setLocale(currentLanguage.value));

    navigation.navigate('Tutorial');
  };

  const keyExtractor = (_, index) => index.toString();

  const renderItem = ({item, i}) => (
    <ListItem
      key={i}
      title={item.title}
      leftIcon={{name: item.icon}}
      checkmark={item.title === currentLanguage.title}
      onPress={() => setCurrentLanguage(item)}
      bottomDivider
    />
  );

  return (
    <>
      <View style={{flex: 1, marginTop: 30}}>
        <FlatList
          keyExtractor={keyExtractor}
          data={languagesList}
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
