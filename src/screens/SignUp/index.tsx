import React from 'react';
import Flex from 'antd-mobile/lib/flex';
import WingBlank from 'antd-mobile/lib/wing-blank'
import Button from 'antd-mobile/lib/button';
import WhiteSpace from 'antd-mobile/lib/white-space';
import Toast from 'antd-mobile/lib/toast';

import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';

import AppNavbar from '../../components/AppNavBar';
import GoogleIcon from '../../assets/icons/search.png';
import Divider from '../../components/Divider';

const SignUp: React.FunctionComponent = () => {
  return (
    <Flex
      direction="column"
      align="stretch">
      <AppNavbar />
      <WingBlank>
        <h1>Sign up with work email</h1>
        <p>Email with organization's domain name is required</p>
        <WhiteSpace />
        <Divider size={2} />
        <WhiteSpace />
        <GoogleLogin
          clientId="458356373181-1l0lv4rogi9ps4h6osgj2js56vicfj03.apps.googleusercontent.com"
          cookiePolicy={'single_host_origin'}
          onSuccess={(response) => {
            const data = (response as GoogleLoginResponse);
            Toast.success(`Google has verified you as ${data.profileObj.name} !!!`);
          }}
          onFailure={(error) => {
            Toast.fail(error.error);
          }}
          render={(props) => (
            <Button
              {...props}
              icon={<img src={GoogleIcon} alt="GoogleIcon" />}>
              Sign up with Google
            </Button>
          )}
        />
      </WingBlank>
    </Flex>
  );
}

export default SignUp;