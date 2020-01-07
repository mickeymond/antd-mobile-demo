import React from 'react';
import Flex from 'antd-mobile/lib/flex';
import WingBlank from 'antd-mobile/lib/wing-blank';
import WhiteSpace from 'antd-mobile/lib/white-space';
import ActivityIndicator from 'antd-mobile/lib/activity-indicator';
import Toast from 'antd-mobile/lib/toast';
import List from 'antd-mobile/lib/list';
import InputItem from 'antd-mobile/lib/input-item';
import Picker from 'antd-mobile/lib/picker';

import { Avatar } from 'antd/es';

import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import AppNavbar from '../../components/AppNavBar';
import Divider from '../../components/Divider';
import InputFieldWrapper from '../../components/InputFieldWrapper';

import { GET_PROFILE } from '../../queries';
import { ProfileType } from '../../typedefs';

const countries = [
  { value: 'GH', label: 'Ghana' },
  { value: 'NG', label: 'Nigeria' },
  { value: 'CM', label: 'Cameroon' },
  { value: 'VR', label: 'Ivory Coast' },
  { value: 'LN', label: 'Togo' },
];

const UserInfo: React.FunctionComponent = () => {
  const [country, setCountry] = React.useState('LN');
  const { loading, error, data } = useQuery(GET_PROFILE);

  if (loading) {
    return <ActivityIndicator toast text="Getting User Info..." />
  }

  if (error) {
    Toast.fail(error.message);
    return <Redirect to="/getting-started" />;
  }

  const profile: ProfileType = data.profile;

  return (
    <Flex
      direction="column"
      align="stretch"
    >
      <AppNavbar
        hasBackButton
        hasControls
      />
      <WingBlank>
        <h2>Welcome!!! First things first...</h2>
        <p>Create a profile to help the kitchen serve you better</p>
        <Divider size={2} />
        <WhiteSpace />
        <WhiteSpace />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            size={64}
            icon={<img src={profile.picture} alt={profile.lastName} />}
          />
        </div>
        <WhiteSpace />
        <WhiteSpace />
        <InputFieldWrapper label="First Name">
          <InputItem
            type="text"
            placeholder="First Name"
            name="firstName"
            value={profile.firstName}
          />
        </InputFieldWrapper>
        <WhiteSpace />
        <InputFieldWrapper label="Last Name">
          <InputItem
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={profile.lastName}
          />
        </InputFieldWrapper>
        <WhiteSpace />
        <InputFieldWrapper label="Email">
          <InputItem
            type="text"
            placeholder="Email"
            name="email"
            value={profile.email}
          />
        </InputFieldWrapper>
        <WhiteSpace />
        <InputFieldWrapper label="Country">
        <Picker
          data={countries}
          cols={1}
          okText="Okay"
          dismissText="Dismiss"
          extra=" "
          value={[country]}
          onPickerChange={val => {
            setCountry(val[0].toString());
          }}
        >
          <List.Item arrow="horizontal">Pick A Country</List.Item>
        </Picker>
        </InputFieldWrapper>
      </WingBlank>
    </Flex>
  );
}

export default UserInfo;