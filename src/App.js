import React, {useState} from 'react';
import {Provider} from 'react-redux';

import SpyNavigator from './navigation';

import store from './redux/store';
import Tutorial from './components/Tutorial';

const App = () => {
  const [onDone, setOnDone] = useState(false);

  const handleOnDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setOnDone(true);
  };

  return (
    <Provider store={store}>
      {/* {onDone ? <SpyNavigator /> : <Tutorial handleOnDone={handleOnDone} />} */}
      <SpyNavigator />
    </Provider>
  );
};

export default App;
