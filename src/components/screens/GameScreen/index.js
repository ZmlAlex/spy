import React, {useMemo, useLayoutEffect, useState} from 'react';
import {View, StyleSheet, Modal} from 'react-native';
import styled from 'styled-components';
import {Icon, Avatar} from 'react-native-elements';
import GradientButton from '../../shared/GradientButton';

import {useSelector, useDispatch} from 'react-redux';
import {BlurView} from '@react-native-community/blur';
import {createSlides} from '../../../redux/reducers/rolesReducer';
import {resetConfig} from '../../../redux/reducers/configReducer';

import PlayersOptions from './components/PlayersOptions';
import TimerOptions from './components/TimerOptions';
import BackgroundImage from '../../shared/Backgrounds/BackgroundImageGame';

import {packs} from '../../../data/config';
import generateNewGame from '../../../utils/generateNewGame';

const styles = StyleSheet.create({
  backgroundImage: {
    top: '-1%',
    left: '-10%',
    position: 'absolute',
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const StyledBackgroudImage = styled(BackgroundImage)`
  position: absolute;
`;

const Container = styled.View`
  flex: 1;
  padding: 0 30px 20px 30px;
  background-color: white;
`;

const Header = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

const HeaderText = styled.Text`
  font-size: 18px;
`;

const Content = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
`;

const Footer = styled.View`
  flex: 0.3;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Card = styled.TouchableOpacity`
  flex: 1;
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 10px;
  padding: 9px 14px 0 14px;
`;

const CardText = styled.Text`
  font-size: 18px;
`;

const AvatarContainer = styled.View`
  padding-right: 30px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
`;

const IconContainer = styled.View`
  padding: 30px;
`;

const GameScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [option, setOption] = useState('players');

  const dispatch = useDispatch();
  const config = useSelector((state) => state.config);
  const currentPack = useMemo(
    () => packs.find((item) => item.name === config.package.name),
    [config.package],
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconContainer>
          <Icon
            name="question"
            size={20}
            onPress={(e) => dispatch(resetConfig())}
          />
        </IconContainer>
      ),
      headerRight: () => (
        <AvatarContainer>
          <Avatar
            size={20}
            rounded
            title="MD"
            onPress={(e) => dispatch(resetConfig())}
            source={require('../../../assets/languageScreen/rus.png')}
          />
        </AvatarContainer>
      ),
    });
  }, [navigation, dispatch]);

  const renderOptions = () => {
    switch (option) {
      case 'players':
        return (
          <PlayersOptions
            onClose={() => setModalVisible(!modalVisible)}
            onAccept={() => setModalVisible(!modalVisible)}
            maxValue={6}
            minValue={3}
            mode
          />
        );
      case 'timer':
        return (
          <TimerOptions
            onClose={() => setModalVisible(!modalVisible)}
            onAccept={() => setModalVisible(!modalVisible)}
            maxValue={36}
            minValue={3}
          />
        );
    }
  };

  return (
    <>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <BlurView blurType="light" style={styles.contentWrap}>
          {renderOptions()}
        </BlurView>
      </Modal>

      <Container>
        <StyledBackgroudImage />
        <Header>
          <HeaderText>Настрой игру</HeaderText>
          <HeaderText>под свою компанию</HeaderText>
        </Header>
        <Content>
          <View style={{flex: 1, marginBottom: 10, flexDirection: 'row'}}>
            <Card
              onPress={() => {
                setOption('timer');
                setModalVisible(true);
              }}
              style={{marginRight: 12}}>
              <CardText>Время</CardText>
              <CardText>{config.timerCount}</CardText>
            </Card>
            <Card
              onPress={() => {
                setOption('players');
                setModalVisible(true);
              }}>
              <CardText>Кол-во игроков</CardText>
              <CardText>{config.playerCount}</CardText>
            </Card>
          </View>
          <View style={{flex: 2}}>
            <Card onPress={() => navigation.navigate('Набор')}>
              <CardText>Место для разгадки</CardText>
              <CardText>{config.package.name}</CardText>
            </Card>
          </View>
        </Content>
        <Footer>
          <GradientButton
            onPress={() => {
              const slides = generateNewGame(config.playerCount, currentPack);
              dispatch(createSlides(slides));
              navigation.navigate('Роли', {
                slideId: 0,
              });
            }}
            title="Играть"
          />
        </Footer>
      </Container>
    </>
  );
};

export default GameScreen;
