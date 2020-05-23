import React, {useState} from 'react';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import styled from 'styled-components';
import SvgUri from 'react-native-svg-uri';
import ModalDetails from './ModalDetails';
import PackageCard from './PackageCard';
import {changeConfig} from '../../../redux/reducers/configReducer';

import {packs} from '../../../data/config';

const styles = StyleSheet.create({
  backgroundImage: {
    top: '-5%',
    position: 'absolute',
  },
  myStarStyle: {
    color: 'yellow',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Container = styled.View`
  flex: 1;
  background-color: white;
`;

const Header = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 20px;
  padding-top: 10px;
  padding: 10px 40px 20px 40px;
`;

const HeaderText = styled.Text`
  font-size: 18px;
`;

const Content = styled.View`
  flex: 1;
`;

const StyledFlatList = styled.FlatList`
  padding-top: 30px;
  padding: 30px 40px 0 40px;
`;

const PacksList = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 40px;
`;

const PackagesOption = ({navigation}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPack, setCurrentPack] = useState('');

  const pack = useSelector((state) => state.config.package, shallowEqual);
  const dispatch = useDispatch();

  const handlePress = (item) => {
    dispatch(changeConfig({option: 'package', value: item}));
  };

  const renderItem = (item, index) => {
    return (
      <PackageCard
        key={index}
        active={pack.id === item.id}
        setIsOpen={setIsOpen}
        handlePress={handlePress}
        setCurrentPack={setCurrentPack}
        item={item}
      />
    );
  };

  return (
    <>
      <Container>
        <ModalDetails
          isOpen={isOpen}
          currentPack={currentPack}
          handleOpen={setIsOpen}
        />
        <SvgUri
          style={styles.backgroundImage}
          width="500"
          source={require('../../../assets/packagesOptions/background.svg')}
        />
        <ScrollView>
          <Header>
            <HeaderText>Выбери набор</HeaderText>
            <HeaderText>под свою компанию</HeaderText>
          </Header>
          <Content>
            <PacksList>{packs.map(renderItem)}</PacksList>
          </Content>
        </ScrollView>
      </Container>
    </>
  );
};

export default PackagesOption;
