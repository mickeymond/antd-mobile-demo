import React from 'react';
import { Redirect } from 'react-router-dom';

import { useQuery } from '@apollo/react-hooks';

import TabBar from 'antd-mobile/lib/tab-bar';
import WingBlank from 'antd-mobile/lib/wing-blank';
import ActivityIndicator from 'antd-mobile/lib/activity-indicator';
import Toast from 'antd-mobile/lib/toast';
import { Icon } from 'antd/es';

import { ProfileType } from '../../typedefs';
import { GET_PROFILE } from '../../queries';

const MENUS = [
  { key: 1, title: 'Home', icon: 'home' },
  { key: 2, title: 'Menu', icon: 'menu' },
  { key: 3, title: 'Calendar', icon: 'calendar' },
  { key: 4, title: 'Profile', icon: 'user' },
]

const MainAppLayout: React.FunctionComponent = () => {
  const [selectedTab, setSelectedTab] = React.useState(1);
  const { loading, error, data } = useQuery(GET_PROFILE);

  if (!localStorage.getItem('token')) {
    return <Redirect to="/getting-started" />
  }

  if (loading) {
    return <ActivityIndicator toast text="Getting User Info..." />
  }

  if (error) {
    Toast.fail(error.message, 10);
    return <Redirect to="/getting-started" />;
  }

  const profile: ProfileType = data.profile;

  return (
    <React.Fragment>
      <div
        style={{ position: 'fixed', bottom: 0, width: '100%', height: '100%' }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#1787E0"
          barTintColor="white"
        >
          {
            MENUS.map(({ key, title, icon }) => (
              <TabBar.Item
                title={title}
                key={key}
                icon={<Icon type={icon} style={{ fontSize: '24px' }} />}
                selectedIcon={<Icon type={icon} style={{ fontSize: '24px', color: '#1787E0' }} />}
                onPress={() => setSelectedTab(key)}
                selected={key === selectedTab}
              >
                <WingBlank>
                  <h2>{title} Screen</h2>
                  <h3>Welcome, {profile.firstName} {profile.lastName}</h3>
                </WingBlank>
              </TabBar.Item>
            ))
          }
        </TabBar>
      </div>
    </React.Fragment>
  );
}

export default MainAppLayout;