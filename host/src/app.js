import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import {Provider, useSelector} from 'react-redux';
import { Link, Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import { store } from './store';
import { App, Content, Sidebar } from './app.styles';
import { Typography } from '@material-ui/core';

const dynamicFederation = async (scope, module) => {
  const container = window[scope]; // or get the container somewhere else
  // Initialize the container, it may provide shared modules
  await container.init(__webpack_share_scopes__.default);
  return container.get(module).then((factory) => {
    const Module = factory();
    return Module;
  });
};

const Micro1 = React.lazy(() => dynamicFederation('micro1', './Micro1'));
const Micro2 = React.lazy(() => dynamicFederation('micro2', './Micro2'));

const SidebarWrapper = () => {
  const { name } = useSelector(state => state.host);
  return (
    <Sidebar>
      <Typography variant="h5">{name}</Typography>
      <ul>
        <li><Link to="/foo"><Typography variant="h4" component="span">Foo</Typography></Link></li>
        <li><Link to="/bar"><Typography variant="h4" component="span">Bar</Typography></Link></li>
      </ul>
    </Sidebar>
  )
};

const HostApp = () => {

  return (
    <Provider store={store}>
      <Router>
        <App>
          <SidebarWrapper />
          <Content>
            <Switch>
              <Route exact path="/foo">
                <Suspense fallback="Loading...">
                  <Micro1 store={store} />
                </Suspense>
              </Route>
              <Route exact path="/bar">
                <Suspense fallback="Loading...">
                  <Micro2 store={store} />
                </Suspense>
              </Route>
            </Switch>
          </Content>
        </App>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<HostApp />, document.getElementById('root'));
