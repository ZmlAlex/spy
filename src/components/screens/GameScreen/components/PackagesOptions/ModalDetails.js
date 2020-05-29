import React from 'react';
import styled from 'styled-components';

import {StyleSheet, Modal, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {Icon} from 'react-native-elements';

const styles = StyleSheet.create({
  contentWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

const Content = styled.View`
  background-color: white;
  flex: 1;
  min-height: 345px;
  margin-horizontal: 35px;
  padding-vertical: 15px;
  padding-horizontal: 15px;
  border-radius: 10px;
`;

const ModalDetails = ({isOpen, handleOpen, currentPack}) => {
  return (
    <>
      <Modal animationType="slide" transparent={true} visible={isOpen}>
        <BlurView blurType="light" style={styles.contentWrap}>
          <Content>
            <Icon
              name="close"
              iconStyle={{alignSelf: 'flex-end'}}
              activeOpacity={1}
              color="#d1d1d1"
              size={26}
              onPress={() => handleOpen(false)}
            />
            <Text>{currentPack.name}</Text>
            <Text>ololo</Text>
            <Text>ololo</Text>
            <Text>ololo</Text>
          </Content>
        </BlurView>
      </Modal>
    </>
  );
};

export default ModalDetails;
