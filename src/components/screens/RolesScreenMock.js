import React, {useMemo} from 'react';
import {useSelector, shallowEqual} from 'react-redux';
import styled from 'styled-components';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Button, StyleSheet, Image, Dimensions} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import LinearGradient from 'react-native-linear-gradient';

import {packs} from '../../data/config';
import generateNewGame from '../../utils/generateNewGame';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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
    // width: 320,
    // height: 320,
    // marginVertical: 32,
    // backgroundColor: 'red',
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
  gradient: {
    paddingRight: 46,
    paddingLeft: 46,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
});

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   gradient: {
//     paddingRight: 46,
//     paddingLeft: 46,
//     paddingTop: 10,
//     paddingBottom: 10,
//     borderRadius: 8,
//   },
// });

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  /* justify-content: flex-end; */
  background-color: white;
  padding-vertical: 80;
  padding-horizontal: 50;
`;

const Card = styled.View`
  /* flex: 1; */
  /* width: 298px; */
  align-self: stretch;
  height: 321px;
  align-items: center;
  justify-content: center;
  background-color: white;
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  flex-basis: 93px;
  /* flex: 1; */
  color: black;
`;
const ButtonContainer = styled.View`
  /* background-color: red; */
  width: ${windowWidth / 2.5}px;
  /* padding-horizontal: ${windowWidth}px; */
  /* flex: 1; */
  /* padding-horizontal: ${windowWidth}; */
  position: absolute;
  bottom: ${windowHeight / 16}px;
  /* justify-content: center;
  align-items: center; */
  /* top: 0; */
  /* left: 10%; */
  right: ${windowWidth / 4}px;
`;
const StyledButton = styled.View`
  background-color: blue;
`;

const ButtonText = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20;
`;

const RolesScreen = ({navigation}) => {
  const config = useSelector((state) => state.config, shallowEqual);
  const currentPack = useMemo(
    () => packs.find((item) => item.name === config.package.name),
    [config.package],
  );

  const renderItem = ({item}) => {
    return (
      <Container>
        <Title>{item.text}</Title>
        <Card>
          {item.title === 'Ты шпион' && (
            <Text
              style={{
                // justifyContent: 'flex-start',
                fontSize: 20,
                fontWeight: 'bold',
                // backgroundColor: 'blue',
                color: 'red',
              }}>
              Ты шпион
            </Text>
          )}
          {item.image ? (
            <SvgUri
              style={styles.image}
              // width="500"
              source={item.image}
            />
          ) : (
            <Text>{item.location}</Text>
          )}
          {/* <Text style={styles.title}>{item.title}</Text>
          <Image source={item.image} />
          <Text style={styles.text}>{item.text}</Text> */}
        </Card>
        {/* <GradientButton title="ok" /> */}
      </Container>
    );
  };

  const renderNextButton = () => {
    return (
      <ButtonContainer>
        {/* <StyledButton> */}
        <LinearGradient colors={['#B10CFF', '#9D00E8']} style={styles.gradient}>
          <ButtonText>Ок</ButtonText>
        </LinearGradient>
        {/* </StyledButton> */}
      </ButtonContainer>
    );
    // <GradientButton title="ok" />;
  };

  return (
    <AppIntroSlider
      scrollEnabled={false}
      renderItem={renderItem}
      data={generateNewGame(config.playerCount, currentPack)}
      onDone={() => navigation.navigate('Время')}
      dotStyle={{display: 'none'}}
      activeDotStyle={{display: 'none'}}
      renderNextButton={renderNextButton}
      // bottomButton={renderNextButton}
    />
  );
};

export default RolesScreen;
