import React from 'react';
import {View, Text, Button} from 'react-native';

const TutorialScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>TutorialScreen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default TutorialScreen;
