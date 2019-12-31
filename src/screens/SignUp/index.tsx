import React, { useState } from 'react';
import Flex from 'antd-mobile/lib/flex';
import WingBlank from 'antd-mobile/lib/wing-blank'
import Button from 'antd-mobile/lib/button';
import WhiteSpace from 'antd-mobile/lib/white-space';
import Toast from 'antd-mobile/lib/toast';

import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';

import AppNavbar from '../../components/AppNavBar';
import GoogleIcon from '../../assets/icons/search.png';
import Divider from '../../components/Divider';

import { REGISTER } from '../../mutations';

const SignUp: React.FunctionComponent = () => {
  const [register] = useMutation(REGISTER);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  return (
    <Flex
      direction="column"
      align="stretch">
      <AppNavbar
        hasBackButton={true}
      />
      <WingBlank>
        <h2>Sign up with work email</h2>
        <p>Email with organization's domain name is required</p>
        <WhiteSpace />
        <Divider size={2} />
        <WhiteSpace />
        <GoogleLogin
          clientId="458356373181-1l0lv4rogi9ps4h6osgj2js56vicfj03.apps.googleusercontent.com"
          cookiePolicy={'single_host_origin'}
          onSuccess={(response) => {
            const data = (response as GoogleLoginResponse);
            setLoading(true);
            register({ variables: { googleOAuthToken: data.tokenId } })
            .then(success => {
              setLoading(false);
              localStorage.setItem('token', success.data.login.token);
              history.push('/user/info');
            })
            .catch(error => {
              setLoading(false);
              Toast.fail(error.message, 10);
            });
          }}
          onFailure={(error) => {
            Toast.fail(error.error);
          }}
          render={(props) => (
            <Button
              {...props}
              disabled={loading}
              loading={loading}
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