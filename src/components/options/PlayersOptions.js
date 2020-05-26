import React, {useState} from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';
import {changeConfig} from '../../redux/reducers/configReducer';
import {RoundedButton} from '../shared/RounedButton';
// import {View, Button, FlatList, StyleSheet, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const Container = styled.View`
  flex: 1;
  padding: 20px 40px;
  align-items: center;
`;

const CardTitle = styled.Text`
  font-weight: bold;
  font-size: 20px;
  padding-bottom: 16px;
`;

const CardsRow = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const CardContainer = styled.View`
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background-color: white;
  flex-direction: row;
`;

const CardNumber = styled.View`
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  height: 91px;
  width: 83px;
  align-items: center;
  justify-content: center;
  background-color: white;
  transform: scale(1.1);
`;

const CardPlus = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 4px 18px;
`;

const ButtonsRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 200px;
`;

const CardText = styled.Text`
  font-size: 24px;
`;

const Players = ({navigation, onClose, maxValue, minValue, mode}) => {
  const playerCount = useSelector((state) => state.config.playerCount);
  const dispatch = useDispatch();

  const [currentCount, setCurrentCount] = useState(playerCount);

  const handlePress = () => {
    dispatch(changeConfig({option: 'playerCount', value: currentCount}));
    onClose();
  };

  return (
    <>
      <Container>
        <CardsRow>
          <CardTitle>игроков</CardTitle>
          <CardContainer>
            <CardPlus
              onPress={() =>
                setCurrentCount((count) =>
                  count <= minValue ? count : count - 1,
                )
              }>
              <CardText>-</CardText>
            </CardPlus>

            <CardNumber>
              <CardText>{currentCount}</CardText>
            </CardNumber>
            <CardPlus
              onPress={() =>
                setCurrentCount((count) =>
                  count >= maxValue ? count : count + 1,
                )
              }>
              <CardText>+</CardText>
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

export default Players;
