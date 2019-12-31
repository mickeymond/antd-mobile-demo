import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from 'antd-mobile/lib/nav-bar';
import Icon from 'antd-mobile/lib/icon';
import SegmentedControl from 'antd-mobile/lib/segmented-control';

type AppNavbarProps = {
  hasControls?: boolean;
  hasBackButton?: boolean;
  selectedSegment?: number;
}

const AppNavbar: React.FunctionComponent<AppNavbarProps> = ({hasControls = false, selectedSegment = 0, hasBackButton = false }) => {
  const history = useHistory();

  return (
    <NavBar
      mode="light"
      icon={hasBackButton ? (
        <Icon
          type="left"
          onClick={() => history.goBack()} />
      ): ''}
    >
      {hasControls ? <SegmentedControl
        selectedIndex={selectedSegment}
        values={['1st', '2nd', '3rd', '4th']}
        style={{width: '70vw' }}
      /> : ''}
    </NavBar>
  );
}

export default AppNavbar;