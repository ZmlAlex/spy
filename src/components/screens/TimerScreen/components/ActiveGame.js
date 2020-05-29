import React from 'react';
import {Animated} from 'react-native';
import {Icon} from 'react-native-elements';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import styled from 'styled-components';
import {RoundedButton} from '../../../shared/RounedButton';

const Title = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
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

const ActiveGame = ({counter = 60, onComplete, onPress}) => {
  return (
    <>
      <Title>Начинайте задавать вопросы. Успейте вычислить шпиона.</Title>
      <CountdownCircleTimer
        isPlaying
        size={202}
        trailColor="transparent"
        onComplete={onComplete}
        duration={counter}
        colors={[['#2CDA00', 0.33], ['#F7B801', 0.33], ['#EA4A4A']]}>
        {({remainingTime, animatedColor}) => {
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
      <RoundedButton danger onPress={onPress}>
        <Icon size={32} name="close" color={'white'} />
      </RoundedButton>
    </>
  );
};

export default ActiveGame;
