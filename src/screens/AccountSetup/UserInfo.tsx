import React from 'react';
import Flex from 'antd-mobile/lib/flex';
import WingBlank from 'antd-mobile/lib/wing-blank';
import WhiteSpace from 'antd-mobile/lib/white-space';
import ActivityIndicator from 'antd-mobile/lib/activity-indicator';
import Toast from 'antd-mobile/lib/toast';

import { Avatar } from 'antd/es';

import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import AppNavbar from '../../components/AppNavBar';
import Divider from '../../components/Divider';

import { GET_PROFILE } from '../../queries';
import { ProfileType } from '../../typedefs';

const UserInfo: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(GET_PROFILE);

  if (!localStorage.getItem('token')) {
    return <Redirect to="/signin" />
  }

  if (loading) {
    return <ActivityIndicator toast text="Getting User Info..." />
  }

  if (error) {
    Toast.fail(error.message, 10);
    return <Redirect to="/" />;
  }

  const profile: ProfileType = data.profile;

  return (
    <Flex
      direction="column"
      align="stretch"
    >
      <AppNavbar />
      <WingBlank>
        <h2>Welcome!!! First things first...</h2>
        <p>Create a profile to help the kitchen serve you better</p>
        <Divider size={2} />
        <WhiteSpace />
        <WhiteSpace />
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Avatar
            size={84}
            icon={<img src={profile.picture} alt={profile.lastName} />}
          />
        </div>
      </WingBlank>
    </Flex>
  );
}

export default UserInfo;