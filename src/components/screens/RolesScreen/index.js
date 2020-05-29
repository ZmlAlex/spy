import React, {useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import {StyleSheet, Dimensions, View} from 'react-native';
import {Icon} from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';

import GradientButton from '../../shared/GradientButton';

const styles = StyleSheet.create({
  image: {
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
  backgroundImage: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    right: '-50%',
  },
});

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: white;
  padding: 0 20px;
`;

const Content = styled.View`
  flex: 2;
  justify-content: center;
`;

const Card = styled.View`
  width: 100%;
  background-color: white;
  height: 100%;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
`;

const CardContainer = styled.View`
  align-self: center;
  height: 100%;
  width: 100%;
  max-width: 212px;
  max-height: 153px;
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
`;

const CardText = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  margin: auto;
  color: ${({isSpy}) => (isSpy ? '#FF0000' : '#000')};
`;

const Header = styled.View`
  align-self: stretch;
  justify-content: center;
  height: 130px;
  flex: 1;
`;

const Title = styled.Text`
  font-weight: ${({isNormal}) => (isNormal ? 'normal' : 'bold')};
  color: ${({isSpy}) => (isSpy ? '#FF0000' : '#000')};
  font-size: 20px;
  line-height: 23px;
  text-align: center;
`;
const Footer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const FooterText = styled.Text`
  margin: 0 0 21px 0;
  font-size: 16px;
  height: 18px;
`;

const windowWidth = Dimensions.get('window').width;

const RolesScreen = ({route, navigation}) => {
  const {slideId} = route.params;

  const isLastSlide = useSelector(
    (state) => state.roles.slides[state.roles.slides.length - 1].id === slideId,
  );

  const slide = useSelector((state) =>
    state.roles.slides.find((currentSlide) => currentSlide.id === slideId),
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{paddingLeft: 30}}>
          <Icon
            name="close"
            label="Игра"
            onPress={() => navigation.navigate('Игра')}
          />
        </View>
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <Header>
        <Title isSpy={slide.isSpy} isNormal={slide.location || slide.isSpy}>
          {slide.title}
        </Title>
      </Header>
      <Content>
        {slide.backgroundImage && (
          <SvgUri
            style={styles.backgroundImage}
            width={windowWidth}
            source={slide.backgroundImage}
          />
        )}
        <CardContainer>
          <Card>
            <CardText isSpy={slide.isSpy}>{slide.location}</CardText>
            {slide.image && (
              <SvgUri
                style={styles.image}
                width={windowWidth}
                source={slide.image}
              />
            )}
          </Card>
        </CardContainer>
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
