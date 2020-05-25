import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {setLocale} from 'react-redux-i18n';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import GradientButton from '../shared/GradientButton';
import BackgroundImage from '../shared/BackgroundImageLanguage';

import {languagesList} from '../../languages';

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
  },
});

const StyledBackgroudImage = styled(BackgroundImage)`
  position: absolute;
`;

const Container = styled.View`
  flex: 1;
  /* background-color: red; */
  /* padding-horizontal: 40px; */
`;

const Languge = styled.TouchableOpacity`
  position: relative;
  top: 0;
  background-color: ${({checked}) => (checked ? '#fff' : 'transparent')};
  border-radius: 8px;
  padding: 10px 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-color: green;
  box-shadow: ${({checked}) =>
    checked
      ? '0px 0px 10px rgba(0, 0, 0, 0.2)'
      : '0px 0px 10px rgba(0, 0, 0, 0.0)'};
`;

const LanguageText = styled.Text`
  color: black;
  text-align: center;
  font-size: 18px;
`;

const StyledFlatList = styled.FlatList`
  position: relative;
  background-color: #e2e2e2;
  border-radius: 8px;
  overflow: hidden;
  /* background-color: blue; */
  /* flex: 1; */
  z-index: 10;
  /* flex: 1; */
  width: 218px;
  /* background-color: red; */
  /* max-width: 218px; */
`;

const Header = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  /* background-color: green; */
`;

const HeaderText = styled.Text`
  align-self: center;
  margin-bottom: 25px;
  font-size: 18px;
  font-weight: bold;
`;

const Content = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  margin: 0 80px;
  /* background-color: red; */
`;

const Footer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  /* background-color: blue; */
`;

const LanguageScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [currentLanguage, setCurrentLanguage] = useState(false);

  const handlePress = () => {
    dispatch(setLocale(currentLanguage.value));

    navigation.navigate('Tutorial');
  };

  const keyExtractor = (_, index) => index.toString();

  const renderItem = ({item, i}) => (
    <Languge
      onPress={() => setCurrentLanguage(item)}
      checked={item.title === currentLanguage.title}>
      <View
        style={{
          flex: 1,
        }}>
        <Avatar
          size={20}
          rounded
          title="MD"
          source={item.avatarUrl}
          containerStyle={{marginLeft: 16}}
        />
      </View>
      <View style={{flex: 2}}>
        <LanguageText style={styles.languageText}>{item.title}</LanguageText>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <Icon
          style={{alignContent: 'center'}}
          name="done"
          color={
            item.title === currentLanguage.title ? '#1DCC00' : 'transparent'
          }
        />
      </View>
    </Languge>
  );

  return (
    <>
      <Container style={styles.container}>
        <StyledBackgroudImage />
        <Header>
          <HeaderText>Выбери язык</HeaderText>
        </Header>
        <Content>
          <View
            style={{
              marginBottom: 90,
              zIndex: 10,
              // backgroundColor: 'red',
              alignItems: 'center',
            }}>
            <StyledFlatList
              scrollEnabled={false}
              keyExtractor={keyExtractor}
              data={languagesList}
              renderItem={renderItem}
            />
          </View>
        </Content>
        <Footer>
          {currentLanguage && (
            <GradientButton
              onPress={handlePress}
              title="далее"
              // isSelected={currentLanguage}
            />
          )}
        </Footer>
      </Container>
    </>
  );
};

export default LanguageScreen;
