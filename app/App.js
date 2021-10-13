import React from 'react';
import {RecoilRoot} from 'recoil';

import AppContainer from './containers/AppContainer';

const App = () => {
  return (
    <RecoilRoot>
      <AppContainer />
    </RecoilRoot>
  );
};

export default App;
