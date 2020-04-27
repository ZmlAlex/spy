import React, {useMemo} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

import {packs} from '../../data/config';
import generateNewGame from '../../utils/generateNewGame';

// const slides = [
//   {
//     key: 1,
//     title: 'Передай телефон первому игроку',
//     text: 'Нажми ок когда будешь готов',
//     // image: require('./assets/1.jpg'),
//     backgroundColor: '#59b2ab',
//   },
//   {
//     key: 2,
//     title: 'Озеро',
//     text:
//       'Ты местный. Все игроки, кроме шпиона, знают эту локацию. Задавай вопросы другим игрокам, чтобы вычислить, кто из них Шпион',
//     // image: require('./assets/2.jpg'),
//     backgroundColor: '#febe29',
//   },
//   {
//     key: 3,
//     title: 'Передай телефон следующему игроку',
//     text: 'Нажми ок когда будешь готов',
//     backgroundColor: '#59b2ab',
//   },
//   {
//     key: 4,
//     title: 'Ты шпион',
//     text: 'Постарайся понять, о какой локации говорят местные',
//     backgroundColor: '#febe29',
//   },
//   {
//     key: 5,
//     title: 'Передай телефон следующему игроку',
//     text: 'Нажми ок когда будешь готов',
//     // image: require('./assets/1.jpg'),
//     backgroundColor: '#59b2ab',
//   },
//   {
//     key: 6,
//     title: 'Озеро',
//     text:
//       'Ты местный. Все игроки, кроме шпиона, знают эту локацию. Задавай вопросы другим игрокам, чтобы вычислить, кто из них Шпион',
//     // image: require('./assets/2.jpg'),
//     backgroundColor: '#febe29',
//   },
// ];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

const RolesScreen = ({navigation, handleOnDone}) => {
  const config = useSelector((state) => state.config, shallowEqual);
  const currentPack = useMemo(
    () => packs.find((item) => item.name === config.package),
    [config.package],
  );

  const renderItem = ({item}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <AppIntroSlider
      scrollEnabled={false}
      renderItem={renderItem}
      data={generateNewGame(config.playerCount, currentPack)}
      onDone={() => navigation.navigate('Время')}
      dotStyle={{display: 'none'}}
      activeDotStyle={{display: 'none'}}
    />
  );
};

export default RolesScreen;
