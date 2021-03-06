import React, { useMemo } from 'react';
import {
  View,
  StatusBar,
  Image, 
  Text,
} from 'react-native';
import FAB from './lib/react-native-modern-fab';

import backgroundImg from './assets/recife.jpg';
import plusImg from './assets/plus.png';

const App = () => {
  const list = useMemo(()=>([
    {key: '1', component: <Text>Item 1</Text>},
    {key: '2', component: <Text>Item 2</Text>},
    {key: '3', component: <Text>Item 3</Text>},
    {key: '4', component: <Text>Item 4</Text>},
  ]),[]);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{flex: 1}}>
        <Image source={backgroundImg} resizeMethod="resize" resizeMode="contain" />
      </View>
      <FAB list={list} backgroundColor="#ffffffcc" buttonColor="#ffa500" icon={<Image source={plusImg} />} />
    </>
  );
};

export default App;
