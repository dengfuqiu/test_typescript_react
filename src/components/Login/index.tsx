import React, { SFC } from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Form } from 'antd';

import { FormComponentProps } from 'antd/lib/form';
import { LoginStore } from 'stores/login';

interface LoginProps {
  loginStore?: LoginStore
}

const Login: SFC<LoginProps> = ({ loginStore }) => {
  console.log(loginStore, '-----');
  return (
    <Row>
      <Col span={12} offset={6}>
        <Form>
          this is login
        </Form>
      </Col>
    </Row>
  );
};

export default inject('loginStore')(observer(Login));
