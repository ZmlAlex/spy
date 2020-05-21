import React from 'react';
import styled from 'styled-components';
import SvgUri from 'react-native-svg-uri';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import Stars from './Stars';

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

const Card = styled.TouchableOpacity`
  width: 47%;
  height: 213px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  background-color: white;
  border-radius: 10px;
  padding: 14px;
  padding-top: 9px;
  margin: auto;
  margin-bottom: 10px;
  justify-content: space-between;
`;

const CardText = styled.Text`
  font-size: 16px;
`;

const ActiveLabelContainer = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  opacity: ${({active}) => (active ? 1 : 0)};
`;

const PackageCard = ({
  active,
  setIsOpen,
  handlePress,
  item,
  setCurrentPack,
}) => {
  return (
    <>
      <Card
        active={active}
        onPress={() => {
          handlePress(item);
        }}>
        <ActiveLabelContainer active={active}>
          <SvgUri
            style={styles.acceptImage}
            // width="500"
            source={require('../../../assets/packagesOptions/accept.svg')}
          />
        </ActiveLabelContainer>
        <ActiveLabelContainer active>
          <Icon name="done" color="#fff" size={26} />
        </ActiveLabelContainer>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <CardText>{item.name}</CardText>
          <TouchableOpacity
            // activeOpacity={1}
            onPress={() => {
              setCurrentPack(item);
              setIsOpen(true);
            }}>
            <Icon name="error-outline" color="#d1d1d1" size={26} />
          </TouchableOpacity>
        </View>

        <View>
          <CardText>Cложность</CardText>
          <Stars level={item.level} />
        </View>
      </Card>
    </>
  );
};

export default PackageCard;
