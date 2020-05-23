import React, {useMemo} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import styled from 'styled-components';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Button, StyleSheet, Image, Dimensions} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../shared/GradientButton';

import {packs} from '../../data/config';
import generateNewGame from '../../utils/generateNewGame';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {},
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
  gradient: {
    paddingRight: 46,
    paddingLeft: 46,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
});

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding-vertical: 80;
  padding-horizontal: 50;
`;

const Card = styled.View`
  align-self: stretch;
  height: 321px;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const CardText = styled.Text`
  font-weight: bold;
  color: ${({spy}) => (spy ? '#FF0000' : '#000')};
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  flex-basis: 93px;
  color: black;
`;
const Footer = styled.View`
  align-items: center;
`;

const FooterText = styled.Text`
  padding: 10px;
`;

const RolesScreen = ({route, navigation}) => {
  const {slideId} = route.params;

  const isLastSlide = useSelector(
    (state) => state.roles.slides[state.roles.slides.length - 1].id === slideId,
  );
  console.log('isLastSlide', isLastSlide);
  const slide = useSelector((state) =>
    state.roles.slides.find((currentSlide) => currentSlide.id === slideId),
  );

  return (
    <Container>
      <Title>{slide.title}</Title>
      <Card>
        <CardText spy={slide.isSpy}>{slide.location}</CardText>
        {slide.image && (
          <SvgUri
            style={styles.image}
            // width="500"
            source={slide.image}
          />
        )}
      </Card>
      <Footer>
        <FooterText>{slide.additionalText}</FooterText>
        <GradientButton
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            isLastSlide
              ? navigation.navigate('Время')
              : navigation.navigate('Роли', {
                  slideId: slideId + 1,
                });
          }}
          title={slide.buttonText}
        />
      </Footer>
    </Container>
  );
};

export default RolesScreen;
