import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Typography, Button } from '@material-ui/core';
import reducer, { increment, reset } from './reducer';

const SCOPE = 'bar';

const RemoteApp = () => {
  const dispatch = useDispatch();
  const { value, appName } = useSelector(state => state[SCOPE] || {});
  const hostName = useSelector(({ host }) => host?.name);

  useEffect(() => () => { dispatch(reset()) }, [])

  return (
    <div style={{ margin: '30px' }}>
      <Typography variant="h4">Host: {hostName}</Typography>

      <br/>
      <br/>

      <Typography variant="h4">Micro: {appName}</Typography>

      <br/>
      <br/>

      <Typography variant="h4">Clicked: {value}</Typography>

      <br/>
      <br/>

      <div>
        <Button variant="contained" size="large" color="primary" onClick={() => dispatch(increment())}>
          Increment
        </Button>
      </div>
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
