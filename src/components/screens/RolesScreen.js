import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const slides = [
  {
    key: 1,
    title: 'Передай телефон первому игроку',
    text: 'Нажми ок когда будешь готов',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Озеро',
    text:
      'Ты местный. Все игроки, кроме шпиона, знают эту локацию. Задавай вопросы другим игрокам, чтобы вычислить, кто из них Шпион',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Передай телефон следующему игроку',
    text: 'Нажми ок когда будешь готов',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 4,
    title: 'Ты шпион',
    text: 'Постарайся понять, о какой локации говорят местные',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 5,
    title: 'Передай телефон следующему игроку',
    text: 'Нажми ок когда будешь готов',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 6,
    title: 'Озеро',
    text:
      'Ты местный. Все игроки, кроме шпиона, знают эту локацию. Задавай вопросы другим игрокам, чтобы вычислить, кто из них Шпион',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
];

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
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>TutorialScreen</Text>
    //   <Button title="Go back" onPress={() => navigation.goBack()} />
    // </View>
    <AppIntroSlider
      scrollEnabled={false}
      renderItem={renderItem}
      data={slides}
      onDone={() => navigation.navigate('Время')}
      dotStyle={{display: 'none'}}
      activeDotStyle={{display: 'none'}}
    />
  );
};

export default RolesScreen;
