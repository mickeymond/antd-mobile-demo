import React from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from 'antd-mobile/lib/nav-bar';
import { Icon } from 'antd/es';
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
          type="arrow-left"
          onClick={() => history.goBack()} />
      ): ''}
    >
      {hasControls ? <SegmentedControl
        selectedIndex={selectedSegment}
        values={['Step 1', 'Step 2', 'Step 3', 'Step 4']}
        style={{width: '70vw' }}
      /> : ''}
    </NavBar>
  );
}

export default AppNavbar;