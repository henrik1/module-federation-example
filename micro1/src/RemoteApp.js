import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import reducer from './reducer';

const SCOPE = 'micro1';

const RemoteApp = () => {
  const { appName } = useSelector(state => state[SCOPE] || {});
  const hostName = useSelector(({ host }) => host?.name);

  return (
    <div style={{ margin: '30px' }}>
      <Typography variant="h1">Hello from {appName}</Typography>
      <br/>
      <br/>

      <Typography variant="h2">{appName} lives in {hostName}</Typography>

      <br/>
      <br/>

    </div>
  );
};

const RemoteAppWrapper = (props) => {
  const { store } = props;
  useEffect(() => {
    store.injectReducer(SCOPE, reducer);
  }, []);

  return (
    <Provider store={store || {}}>
      <RemoteApp />
    </Provider>
  );
};

export default RemoteAppWrapper;
