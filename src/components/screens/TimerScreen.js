import React, {useState, useLayoutEffect} from 'react';
import {HeaderBackButton} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import CompletedGame from '../options/CompletedGame';
import ActiveGame from '../options/ActiveGame';
import BackgroundImage from '../shared/BackgroundImageTimer';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background-color: white;
  background-color: ${({timeIsEnd}) => (timeIsEnd ? '#FF6F6F' : 'white')};
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

const TimerScreen = ({navigation}) => {
  const [timeIsEnd, setTimeIsEnd] = useState(false);
  const counter = useSelector((state) => state.config.timerCount * 60);

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
