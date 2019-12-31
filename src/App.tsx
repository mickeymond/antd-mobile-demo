import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import WalkThrough from './screens/WalkThrough';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={WalkThrough} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
