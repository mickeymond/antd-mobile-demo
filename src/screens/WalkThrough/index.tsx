import React from 'react';
import { useHistory } from 'react-router-dom';
import WingBlank from 'antd-mobile/lib/wing-blank';
import Button from 'antd-mobile/lib/button';
import WhiteSpace from 'antd-mobile/lib/white-space';
import Carousel from 'antd-mobile/lib/carousel';
import Flex from 'antd-mobile/lib/flex';

import styles from './styles.module.css';

const WalkThrough: React.FunctionComponent = () => {
  const history = useHistory();
  const data = ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'];

  localStorage.clear();

  return (
    <Flex
      direction="column"
      align="stretch"
      style={{minHeight: '100vh'}}>
      <Carousel
        autoplay={false}
        infinite
      >
        {data.map(val => (
          <img
            key={val}
            src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
            alt=""
            style={{ width: '100%', height: '75vh' }}
          />
        ))}
      </Carousel>
      <WingBlank>
        <WhiteSpace />
        <WhiteSpace />
        <WhiteSpace />
        <Button
          type="ghost"
          className={styles.signInButton}
          onClick={() => history.push('/signin')}>Sign In</Button>
        <WhiteSpace />
        <Button
          type="primary"
          className={styles.getStartedButton}
          onClick={() => history.push('/signup')}>Get Started</Button>
      </WingBlank>
    </Flex>
  );
}

export default WalkThrough;
