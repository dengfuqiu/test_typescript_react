import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Menu } from 'antd';

class Navbar extends Component {
  render() {
    const menuConfig = [
      {
        key: 'home',
        link: '/',
        text: 'Home'
      },
      {
        key: 'about',
        link: '/about',
        text: 'About'
      },
      {
        key: 'login',
        link: '/login',
        text: 'Login'
      },
      {
        key: 'register',
        link: '/register',
        text: 'Register'
      },
    ];

    return (
      <Menu
        mode="horizontal"
        defaultSelectedKeys={['home']}
      >
        {menuConfig.map(item => (
          <Menu.Item key={item.key}>
            <Link to={item.link}>{item.text}</Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

export default observer(Navbar);
