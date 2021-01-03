import React from 'react';
import {Provider} from 'react-redux';
import store from '../../store/auth';

import Routes from './Routes';

export default function Providers() {
  return (
    <Provider store={store()}>
      <Routes />
    </Provider>
  );
}
