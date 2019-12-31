import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from 'antd-mobile/lib/nav-bar';
import Icon from 'antd-mobile/lib/icon';

const AppNavbar: React.FunctionComponent = () => {
  const history = useHistory();

  return (
    <NavBar
      mode="light"
      icon={(
        <Icon
          type="left"
          onClick={() => history.goBack()} />
      )}
    />
  );
}

export default AppNavbar;