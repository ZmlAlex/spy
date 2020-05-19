import React, {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import SvgUri from 'react-native-svg-uri';
import {setLocale} from 'react-redux-i18n';
import {View, Text, StyleSheet} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import GradientButton from '../shared/GradientButton';

import {languagesList} from '../../languages';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  headerText: {
    alignSelf: 'center',
    marginBottom: 25,
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 80,
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  backgroundImage: {
    top: '20%',
    position: 'absolute',
    left: '-14%',
  },
  text: {
    backgroundColor: 'red',
    paddingHorizontal: 50,
    borderRadius: 18,
  },
  submit: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    shadowOffset: {height: 10},
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 35,
  },
  lang: {
    backgroundColor: '#E2E2E2',
    borderRadius: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'green',
  },
  submitText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  languageText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  gradient: {
    paddingRight: 46,
    paddingLeft: 46,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
  },
  itemm: {
    borderRadius: 6,

    overflow: 'hidden',
  },
});

const Container = styled.View`
  flex: 1;
`;

const Languge = styled.TouchableOpacity`
  position: relative;
  top: 0;
  background-color: ${({checked}) => (checked ? '#fff' : 'transparent')};
  border-radius: 8;
  padding-vertical: 10;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-color: green;
  box-shadow: ${({checked}) =>
    checked
      ? '0px 0px 10px rgba(0, 0, 0, 0.2)'
      : '0px 0px 10px rgba(0, 0, 0, 0.0)'};
`;

const StyledFlatList = styled.FlatList`
  position: relative;
  background-color: #e2e2e2;
  border-radius: 8;
  overflow: hidden;
  z-index: 10;
`;

const Header = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
`;

const HeaderText = styled.Text`
  align-self: center;
  margin-bottom: 25;
  font-size: 18;
  font-weight: bold;
`;

const Content = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  margin-horizontal: 80;
`;

const Footer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
        <Text style={styles.languageText}>{item.title}</Text>
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
        <SvgUri
          style={styles.backgroundImage}
          width="500"
          source={require('../../assets/languageScreen/test.svg')}
        />
        <Header>
          <HeaderText>Выбери язык</HeaderText>
        </Header>
        <Content>
          <View style={{marginBottom: 90, marginHorizontal: 18, zIndex: 10}}>
            <StyledFlatList
              scrollEnabled={false}
              keyExtractor={keyExtractor}
              data={languagesList}
              renderItem={renderItem}
            />
          </View>
        </Content>
        <Footer>
          <GradientButton
            onPress={handlePress}
            title="далее"
            // isSelected={currentLanguage}
          />
        </Footer>
      </Container>
    </>
  );
};

export default LanguageScreen;
