import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';

const Stars = ({level}) => {
  return (
    <>
      <View style={{flexDirection: 'row'}}>
        <Icon name={`${level >= 1 ? 'star' : 'star-border'}`} color="#FFE600" />
        <Icon name={`${level >= 2 ? 'star' : 'star-border'}`} color="#FFE600" />
        <Icon name={`${level >= 3 ? 'star' : 'star-border'}`} color="#FFE600" />
        <Icon name={`${level >= 4 ? 'star' : 'star-border'}`} color="#FFE600" />
        <Icon name={`${level >= 5 ? 'star' : 'star-border'}`} color="#FFE600" />
      </View>
    </>
  );
};

export default Stars;
