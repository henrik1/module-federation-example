import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Typography, Button } from '@material-ui/core';
import reducer, { increment, reset } from './reducer';

const SCOPE = 'micro2';

const RemoteApp = () => {
  const dispatch = useDispatch();
  const { value, appName } = useSelector(state => state[SCOPE] || {});
  const hostName = useSelector(({ host }) => host?.name);

  useEffect(() => () => { dispatch(reset()) }, [])

  return (
    <div style={{ margin: '30px' }}>
      <Typography variant="h1">Hello from {appName}</Typography>
      <br/>
      <br/>

      <Typography variant="h2">{appName} lives in {hostName}</Typography>

      <br/>
      <br/>

      <Typography variant="h3">Clicked: {value}</Typography>

      <br/>
      <br/>

      <div>
        <Button variant="contained" size="large" color="secondary" onClick={() => dispatch(increment())}>
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
