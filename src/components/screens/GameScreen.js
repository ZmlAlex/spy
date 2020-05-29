import React, {useMemo, useLayoutEffect, useState} from 'react';
import {View, Button, StyleSheet, Modal} from 'react-native';
import styled from 'styled-components';
import {Icon, Avatar} from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';
import GradientButton from '../shared/GradientButton';

import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {I18n} from 'react-redux-i18n';
import {ListItem} from 'react-native-elements';
import {BlurView, VibrancyView} from '@react-native-community/blur';
import {createSlides} from '../../redux/reducers/rolesReducer';
import {resetConfig} from '../../redux/reducers/configReducer';

import {optionsList, packs} from '../../data/config';
import PlayersOptions from '../options/PlayersOptions';
import TimerOptions from '../options/TimerOptions';

import generateNewGame from '../../utils/generateNewGame';

import BackgroundImage from '../shared/BackgroundImageGame';

const styles = StyleSheet.create({
  backgroundImage: {
    top: '-1%',
    left: '-10%',
    position: 'absolute',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
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
  padding-horizontal: 14px;
  padding-top: 9px;
`;

const CardText = styled.Text`
  font-size: 18px;
`;

const StyledAvatar = styled.View`
  padding-right: 30px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
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

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Button onPress={(e) => dispatch(resetConfig())} title="Язык" />
  //     ),
  //   });
  // }, [navigation, dispatch]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <View style={{paddingHorizontal: 30}}>
          <Icon
            name="question"
            size={20}
            onPress={(e) => dispatch(resetConfig())}
          />
        </View>
      ),
      headerRight: () => (
        <StyledAvatar>
          <Avatar
            size={20}
            rounded
            title="MD"
            onPress={(e) => dispatch(resetConfig())}
            source={require('../../assets/languageScreen/rus.png')}
          />
        </StyledAvatar>
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
