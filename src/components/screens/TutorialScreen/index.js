import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useDispatch} from 'react-redux';
import AppIntroSlider from 'react-native-app-intro-slider';
import {changeConfig} from '../../../redux/reducers/configReducer';

import {tutorialSlides} from '../../../data/config';

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

const TutorialScreen = () => {
  const dispatch = useDispatch();

  const handleOnDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    dispatch(changeConfig({option: 'tutorialIsRead', value: true}));
  };

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
      renderItem={renderItem}
      data={tutorialSlides}
      onDone={handleOnDone}
    />
  );
};

export default TutorialScreen;
