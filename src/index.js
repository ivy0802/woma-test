import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Link,
  BrowserRouter as Router,
  withRouter
} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import './index.css';
import * as serviceWorker from './serviceWorker';
import logo from './dhilogo.png';
import dashboard from './pages/dashboard';
import overview from './pages/overview';
import home from './pages/home';
import management from './pages/management';

const { Header, Content, Footer } = Layout;

const MainMenu = withRouter(props => {
  const { location } = props;
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[location.pathname]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/overview">
        <Link to="/overview">Scenarios Overview</Link>
      </Menu.Item>
      <Menu.Item key="/dashboard">
        <Link to="/dashboard">Scenarios Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="/management">
        <Link to="/management">Site Management</Link>
      </Menu.Item>
    </Menu>
  );
});

ReactDOM.render(
  <Router>
    <Layout className="layout">
      <Header>
        <img src={logo} className="logo" alt="logo" />
        <MainMenu />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Route exact path="/" component={home} />
        <Route path="/overview" component={overview} />
        <Route path="/dashboard" component={dashboard} />
        <Route path="/management" component={management} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>DHI ©2019 Created by ZCHE</Footer>
    </Layout>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
