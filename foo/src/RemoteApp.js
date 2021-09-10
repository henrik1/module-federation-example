import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import reducer from './reducer';

const SCOPE = 'foo';

const RemoteApp = () => {
  const { appName } = useSelector(state => state[SCOPE] || {});
  const hostName = useSelector(({ host }) => host?.name);

  return (
    <div style={{ margin: '30px' }}>
      <Typography variant="h4">Host: {hostName}</Typography>

      <br/>
      <br/>

      <Typography variant="h4">Micro: {appName}</Typography>

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
