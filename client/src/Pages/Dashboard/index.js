import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import axios from 'axios';

export class Dashboard extends Component {
  state = {
    user: [],
    produk: [],
    kategori: [],
  };

  componentDidMount() {
    this.getData();
    this.getProduk();
    this.getKategori();
  }

  getData = () => {
    axios
      .get('/api/user')
      .then((res) => {
        // console.log('user data', res.data);
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getProduk = () => {
    axios
      .get('/api/product')
      .then((res) => {
        // console.log('produk data', res.data);
        this.setState({
          produk: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getKategori = () => {
    axios
      .get('/api/kategori')
      .then((res) => {
        // console.log('kategori data', res.data);
        this.setState({
          kategori: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { user, produk, kategori } = this.state;
    return (
      <div>
        <Row type="flex">
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <div
              style={{
                height: 120,
                borderRadius: 10,
                borderColor: 'grey',
                margin: '5px 15px',
                background: '#4285F4',
                borderWidth: 1,
                padding: 20,
              }}
            >
              <Col span={6}>
                <Icon
                  type="user"
                  style={{
                    fontSize: '60px',
                    color: 'white',
                  }}
                  theme="outlined"
                />
                {/* <CustomerServiceOutlined /> */}
              </Col>
              <Col
                span={18}
                style={{
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    marginLeft: 20,
                    color: 'white',
                    fontSize: 18,
                  }}
                >
                  Jumlah User
                </div>
                <div
                  style={{
                    marginLeft: 20,
                    color: 'white',
                    fontSize: 24,
                  }}
                >
                  {user.length}
                </div>
              </Col>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <div
              style={{
                height: 120,
                borderRadius: 10,
                borderColor: 'grey',
                margin: '5px 15px',
                background: 'orange',
                borderWidth: 1,
                padding: 20,
              }}
            >
              <Col span={6}>
                <Icon
                  type="file-protect"
                  style={{
                    fontSize: '60px',
                    color: 'white',
                  }}
                  theme="outlined"
                />
                {/* <CustomerServiceOutlined /> */}
              </Col>
              <Col
                span={18}
                style={{
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    marginLeft: 20,
                    color: 'white',
                    fontSize: 18,
                  }}
                >
                  Jumlah Produk
                </div>
                <div
                  style={{
                    marginLeft: 20,
                    color: 'white',
                    fontSize: 24,
                  }}
                >
                  {produk.length}
                </div>
              </Col>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} lg={8} xl={8}>
            <div
              style={{
                height: 120,
                borderRadius: 10,
                borderColor: 'grey',
                margin: '5px 15px',
                background: '#0F9D58',
                borderWidth: 1,
                padding: 20,
              }}
            >
              <Col span={6}>
                <Icon
                  type="gold"
                  style={{
                    fontSize: '60px',
                    color: 'white',
                  }}
                  theme="outlined"
                />
                {/* <CustomerServiceOutlined /> */}
              </Col>
              <Col
                span={18}
                style={{
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    marginLeft: 20,
                    color: 'white',
                    fontSize: 18,
                  }}
                >
                  Jumlah Kategori
                </div>
                <div
                  style={{
                    marginLeft: 20,
                    color: 'white',
                    fontSize: 24,
                  }}
                >
                  {kategori.length}
                </div>
              </Col>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Dashboard;
