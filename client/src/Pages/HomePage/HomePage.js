import React, { Component, Fragment } from 'react';
import './HomePage.css';
import { Layout, Menu, Breadcrumb, Icon, Typography } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

import ArtisPageAll from '../ArtisPageAll';
import ArtisPageAdd from '../ArtisPageAdd';
import ArtisPageDetail from '../ArtisPageDetail';
import Dashboard from '../Dashboard';

import PrivacyPolicyPage from '../PrivacyPolicyPage';
import { connect } from 'react-redux';
import { logoutUser } from '../../Configs/Redux/actions/authActions';
import PropTypes from 'prop-types';

import Axios from 'axios';
import {
  BrowserRouter as Router,
  withRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import history from '../../Utils/service/history';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

export class HomePage extends Component {
  state = {
    collapsed: false,
    data: [],
    sider: true,
  };

  handleLogOut = () => {
    this.props.logoutUser();
    this.props.history.push('/');
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push('/');
    }
    this.getData();
  }

  getData = () => {
    Axios.get('/api/artist')
      .then((res) => {
        // console.log('dataHome', res.data);
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { data, collapsed, sider } = this.state;
    return (
      <Router history={history}>
        <Layout style={{ minHeight: '100vh' }}>
          {sider && (
            <Sider
              collapsible
              collapsed={this.state.collapsed}
              onCollapse={this.onCollapse}
            >
              <div
                className="logo"
                style={{ color: 'white', textAlign: 'center' }}
              >
                {!collapsed && (
                  <Title style={{ color: 'white' }} level={3}>
                    Admin Page
                  </Title>
                )}
              </div>

              <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1">
                  <Link to="/home">
                    <Icon type="home" />
                    <span>Dashboard</span>
                  </Link>
                </Menu.Item>

                <SubMenu
                  key="2"
                  title={
                    <span>
                      {/* <Link to="/music"> */}
                      <Icon type="tags" />
                      <span>produk</span>
                      {/* </Link> */}
                    </span>
                  }
                >
                  <Menu.Item key="3">
                    <Link to={`/home/produk/`}>
                      <Icon type="tag" />
                      <span>Semua Produk</span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to={`/home/tambah_produk/`}>
                      <Icon type="plus" />
                      <span>Tambah Produk</span>
                    </Link>
                  </Menu.Item>
                </SubMenu>

                <Menu.Item key="10">
                  <Link to="/home/privacy_policy">
                    <Icon type="bank" />
                    <span>Privacy</span>
                  </Link>
                </Menu.Item>
                <Menu.Item onClick={this.handleLogOut} key="11">
                  <Icon type="export" />
                  <span>Logout</span>
                </Menu.Item>
              </Menu>
            </Sider>
          )}

          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
              {sider ? (
                <MenuFoldOutlined
                  style={{
                    fontSize: '22px',
                    color: '#fff',
                    marginLeft: 20,
                  }}
                  onClick={() => this.setState({ sider: false })}
                />
              ) : (
                <MenuUnfoldOutlined
                  style={{
                    fontSize: '22px',
                    color: '#fff',
                    marginLeft: 20,
                  }}
                  onClick={() => this.setState({ sider: true })}
                />
              )}
            </Header>

            <Content style={{ margin: '0 16px' }}>
              {/* <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>User</Breadcrumb.Item>
                            </Breadcrumb> */}
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360 }}
              >
                <Switch>
                  <Route path="/home" exact component={Dashboard} />

                  <Route path="/home/produk" component={ArtisPageAll} />
                  <Route path="/home/tambah_produk" component={ArtisPageAdd} />

                  <Route
                    path="/artis_detail/:_id"
                    component={ArtisPageDetail}
                  />

                  <Route
                    path="/home/privacy_policy"
                    component={PrivacyPolicyPage}
                  />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              sewa Rental admin ©2020 Created by dede
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

HomePage.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { logoutUser })(withRouter(HomePage));
