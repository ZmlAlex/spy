import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';
import {StyledButton} from '../../../shared/Button';

const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`;

const TestTitle = styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

const CompletedGame = ({onPress}) => {
  return (
    <>
      <TestTitle>Время вышло !</TestTitle>
      <Text>Местные не смогли вычислить шпиона :(</Text>
      <StyledButton>
        <ButtonText onPress={onPress}> В меню</ButtonText>
      </StyledButton>
    </>
  );
};

export default CompletedGame;
