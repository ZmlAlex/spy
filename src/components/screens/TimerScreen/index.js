import React, {useState, useLayoutEffect} from 'react';
import {HeaderBackButton} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import CompletedGame from './components/CompletedGame';
import ActiveGame from './components/ActiveGame';
import BackgroundImage from '../../shared/Backgrounds/BackgroundImageTimer';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  background-color: ${({timeIsEnd}) => (timeIsEnd ? '#FF6F6F' : 'white')};
`;

const StyledBackgroudImage = styled(BackgroundImage)`
  position: absolute;
  top: 0;
  bottom: 0;
`;

const TimerScreen = ({navigation}) => {
  const [timeIsEnd, setTimeIsEnd] = useState(false);
  const counter = useSelector((state) => state.config.timerCount * 60);

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
    <Container timeIsEnd={timeIsEnd}>
      <StyledBackgroudImage />
      {timeIsEnd ? (
        <CompletedGame onPress={() => navigation.navigate('Игра')} />
      ) : (
        <ActiveGame
          timeIsEnd={timeIsEnd}
          counter={counter}
          onComplete={() => setTimeIsEnd(true)}
          onPress={() => navigation.navigate('Игра')}
        />
      )}
    </Container>
  );
};

export default TimerScreen;
