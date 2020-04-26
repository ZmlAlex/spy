import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Button, StyleSheet, Image} from 'react-native';

const slides = [
  {
    key: 1,
    title: 'Cыграем в Шпиона ?',
    text: 'Листай дальше и узнай, что нужно делать.',
    // image: require('./assets/1.jpg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    text:
      'В игре участвуют местные и Шпион. Передеавайте друг другу телефон, чтобы узнать свои роли. Всем...',
    // image: require('./assets/2.jpg'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    text:
      'Задавайте друг другу вопросы связнные с данной локацией. Например: Когда ты по...',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 4,
    text:
      'Прислушивайтесь к ответам других игроков: Шпион не знает локацию, из-за чего может отвеча...',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 5,
    text:
      'Если подозреваешь кого-то в шпионаже, скажи : <Я знаю, кто Шпион>. На счет <три> все вместе',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 6,
    text:
      'Выбрали одного и того же человека? Он должен раскрыть свою роль. Если это действительно Шпион...',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 7,
    text:
      'Если шпион догадался, о каком месте говорят местные, он может его назвать. Если он угадывает',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 8,
    text:
      'Не забывайте про таймер! Время игры ограничего стоит поторопиться...',
    // image: require('./assets/3.jpg'),
    backgroundColor: '#22bcb5',
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

const Tutorial = ({navigation, handleOnDone}) => {
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
      renderItem={renderItem}
      data={slides}
      onDone={handleOnDone}
    />
  );
};

export default Tutorial;
