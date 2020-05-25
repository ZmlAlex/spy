import React from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {StyleSheet, Dimensions} from 'react-native';
import SvgUri from 'react-native-svg-uri';

import GradientButton from '../shared/GradientButton';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  image: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    position: 'absolute',
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
  justify-content: center;
  /* align-items: center; */
  background-color: white;
  padding: 0 20px;
`;

const Content = styled.View`
  flex: 0.7;
  /* min-height: 321px; */
  justify-content: center;
  /* background-color: red; */
`;

// const Card = styled.View`
//   /* height: 321px; */
//   position: relative;
//   width: 100%;
//   align-items: center;
//   justify-content: flex-start;
//   background-color: white;
//   box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
//   border-radius: 10px;
// max-height: 321px;
// `;

const Card = styled.View`
  /* height: 321px; */
  /* width: 100px; */
  width: 100%;
  align-self: center;
  background-color: white;
  height: 100%;
  max-width: 298px;
  max-height: 321px;
  border-radius: 10px;
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  align-items: center;
  margin: 10px;
  /* overflow: hidden; */
  /* position: relative;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  background-color: red;
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px; */
  /* max-height: 321px; */
`;

const CardText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  margin: ${({isSpy}) => (isSpy ? '0' : 'auto')};
  color: ${({isSpy}) => (isSpy ? '#FF0000' : '#000')};
`;

const Header = styled.View`
  align-self: stretch;
  justify-content: flex-start;
  height: 130px;
  /* background-color: blue; */
  flex: 0.15;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: black;
  text-align: center;
`;
const Footer = styled.View`
  /* flex: 0.15; */
  align-items: center;
  /* background-color: green; */
`;

const FooterText = styled.Text`
  margin: 39px 0 21px 0;
  font-size: 16px;
  height: 18px;
`;

const windowWidth = Dimensions.get('window').width;

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
      <Header>
        <Title>{slide.title}</Title>
      </Header>
      <Content>
        <Card>
          <CardText isSpy={slide.isSpy}>{slide.location}</CardText>
          {slide.image && (
            <SvgUri
              style={styles.image}
              // width="500"
              width={windowWidth}
              source={slide.image}
            />
          )}
        </Card>
      </Content>
      <Footer>
        <FooterText>{slide.additionalText}</FooterText>
        <GradientButton
          onPress={() => {
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
