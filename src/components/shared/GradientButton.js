import React from 'react';
import styled from 'styled-components';

import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    paddingRight: 26,
    paddingLeft: 26,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
});

const Container = styled.View`
  /* opacity: ${({isSelected}) => (isSelected ? 1 : 0)}; */
`;

const StyledLTouchableOpacity = styled.TouchableOpacity`
  box-shadow: 10px 10px 35px rgba(0, 0, 0, 0.2);
  border-radius: 8;
  width: 148px;
`;

const Title = styled.Text`
  color: #fff;
  text-align: center;
  font-size: 20;
`;

const GradientButton = ({onPress, isSelected, title}) => {
  return (
    <>
      <Container isSelected={isSelected}>
        <StyledLTouchableOpacity onPress={onPress}>
          <LinearGradient
            colors={['#B10CFF', '#9D00E8']}
            style={styles.gradient}>
            <Title>{title}</Title>
          </LinearGradient>
        </StyledLTouchableOpacity>
      </Container>
    </>
  );
};

export default GradientButton;
