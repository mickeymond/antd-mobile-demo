import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainAppLayout from './layouts/MainAppLayout';
import WalkThrough from './screens/WalkThrough';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import UserInfo from './screens/AccountSetup/UserInfo';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import localForage from 'localforage';

const client = new ApolloClient({
  uri: 'https://kitchin-app-server.herokuapp.com',
  request: async operation => {
    try {
      const token = await localForage.getItem('token');
      operation.setContext({
        headers: {
          authorization: token ? `Bearer ${token}` : ''
        }
      });
    } catch (error) {
    }
  }
})

const App: React.FunctionComponent = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={MainAppLayout} />
          <Route path="/getting-started" exact component={WalkThrough} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/user/info" exact component={UserInfo} />
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
