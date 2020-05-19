import React, {useState} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {changeConfig} from '../../redux/reducers/configReducer';
// import {View, Button, FlatList, StyleSheet, Text} from 'react-native';
import {RoundedButton} from '../shared/RounedButton';
import {Icon} from 'react-native-elements';

const Container = styled.View`
  flex: 1;
  padding-horizontal: 40px;
  padding-vertical: 20px;
  align-items: center;
`;

const CardTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 16px;
`;

const CardsRow = styled.View`
  flex: 1.5;
  align-items: center;
  justify-content: flex-end;
`;

const CardContainer = styled.View`
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 80px;
  background-color: white;
`;

const CardNumber = styled.View`
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 96px;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

const CardPlus = styled.TouchableOpacity`
  align-items: center;
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding-horizontal: 34px;
  padding-vertical: 4px;
`;

const ButtonsRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 200px;
`;

const CardText = styled.Text`
  font-size: 24px;
`;

const Timer = ({onClose, maxValue, minValue}) => {
  const timerCount = useSelector((state) => state.config.timerCount);
  const dispatch = useDispatch();

  const [currentCount, setCurrentCount] = useState(timerCount);

  const handlePress = () => {
    dispatch(changeConfig({option: 'timerCount', value: currentCount}));
    onClose();
  };

  return (
    <>
      <Container>
        <CardsRow>
          <CardTitle>минуты</CardTitle>
          <CardContainer>
            <CardPlus
              onPress={() =>
                setCurrentCount((count) =>
                  count >= maxValue ? count : count + 1,
                )
              }>
              <CardText>+</CardText>
            </CardPlus>
            <CardNumber>
              <CardText>{currentCount}</CardText>
            </CardNumber>
            <CardPlus
              onPress={() =>
                setCurrentCount((count) =>
                  count <= minValue ? count : count - 1,
                )
              }>
              <CardText>-</CardText>
            </CardPlus>
          </CardContainer>
        </CardsRow>
        <ButtonsRow>
          <RoundedButton danger onPress={onClose}>
            <Icon size={32} name="close" color={'white'} />
          </RoundedButton>
          <RoundedButton onPress={handlePress}>
            <Icon size={32} name="done" color={'white'} />
          </RoundedButton>
        </ButtonsRow>
      </Container>
    </>
  );
};

export default Timer;
