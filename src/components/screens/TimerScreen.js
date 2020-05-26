import React, {useState, useEffect, useLayoutEffect} from 'react';
import {HeaderBackButton} from '@react-navigation/stack';
import {View, Text, Button, Animated} from 'react-native';
import {Icon} from 'react-native-elements';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import styled from 'styled-components';
import {RoundedButton} from '../../components/shared/RounedButton';
import BackgroundImage from '../shared/BackgroundImageTimer';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
`;

const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
`;

// const Timer = styled.View`
//   font-weight: bold;
//   width: 202px;
//   height: 202px;
//   background-color: white;
//   box-shadow: 28px 28px 50px rgba(0, 0, 0, 0.16);
//   border-radius: 100px;
//   justify-content: center;
//   align-items: center;
// `;

const StyledBackgroudImage = styled(BackgroundImage)`
  position: absolute;
  top: 0;
  bottom: 0;
`;

const StyledCircle = styled.View`
  flex: 1;
  background-color: white;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  margin: 12px;
  box-shadow: 28px 28px 50px rgba(0, 0, 0, 0.16);
`;

const TimerScreen = ({navigation}) => {
  const [counter, setCounter] = useState(20);
  const [TimeIsEnd, setTimeIsEnd] = useState(false);

  // logic for custom timer
  // useEffect(() => {
  //   const timer =
  //     counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

  //   if (!counter) {
  //     setCounter('end');
  //   }

  //   return () => clearInterval(timer);
  // }, [counter]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          label="Игра"
          onPress={() => navigation.navigate('Игра')}
        />
      ),
    });
  }, [navigation]);

  return (
    <Container>
      <StyledBackgroudImage />
      <Title>Начинайте задавать вопросы. Успейте вычислить шпиона.</Title>
      <CountdownCircleTimer
        isPlaying
        size={202}
        trailColor="transparent"
        onComplete={() => console.log('DONE')}
        duration={132}
        colors={[['#2CDA00', 0.33], ['#F7B801', 0.33], ['#EA4A4A']]}>
        {({remainingTime, animatedColor, ...rest}) => {
          // console.log('rest', Math.floor(remainingTime / 60));
          const minutes = Math.floor(remainingTime / 60);
          const seconds = remainingTime - 60 * Math.floor(remainingTime / 60);
          const zeroForValuesLessThan10 =
            remainingTime - 60 * Math.floor(remainingTime / 60) < 10 ? '0' : '';
          return (
            <StyledCircle>
              <Animated.Text
                style={{
                  color: animatedColor,
                  fontSize: 30,
                  fontWeight: 'bold',
                }}>
                {`${minutes} : ${zeroForValuesLessThan10}${seconds}`}
              </Animated.Text>
            </StyledCircle>
          );
        }}
      </CountdownCircleTimer>
      <RoundedButton
        danger
        // onPress={onClose}
      >
        <Icon size={32} name="close" color={'white'} />
      </RoundedButton>
    </Container>
  );
};

TimerScreen.navigationOptions = ({navigate, navigation}) => ({
  tabBarLabel: 'Your custom label...',
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerRight: (
    <Button
      title="Name"
      onPress={() => {
        navigation.navigate('viewname');
      }}
    />
  ),
  headerLeft: (
    <Button
      title="Name"
      onPress={() => {
        navigation.navigate('viewname');
      }}
    />
  ),
});

export default TimerScreen;
