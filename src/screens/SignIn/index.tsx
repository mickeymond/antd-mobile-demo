import React from 'react';
import Flex from 'antd-mobile/lib/flex';
import WingBlank from 'antd-mobile/lib/wing-blank'
import Button from 'antd-mobile/lib/button';
import WhiteSpace from 'antd-mobile/lib/white-space';

import AppNavbar from '../../components/AppNavBar';
import GoogleIcon from '../../assets/icons/search.png';
import Divider from '../../components/Divider';

const SignIn: React.FunctionComponent = () => {
  return (
    <Flex
      direction="column"
      align="stretch">
      <AppNavbar />
      <WingBlank>
        <h1>Sign in with work email</h1>
        <p>Email with organization's domain name is required</p>
        <WhiteSpace />
        <Divider size={2} />
        <WhiteSpace />
        <Button
          icon={<img src={GoogleIcon} alt="GoogleIcon" />}>
          Sign in with Google
        </Button>
      </WingBlank>
    </Flex>
  );
}

export default SignIn;