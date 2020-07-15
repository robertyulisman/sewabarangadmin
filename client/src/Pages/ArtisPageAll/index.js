import React, { Component } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import {
  Card,
  Col,
  Row,
  Button,
  Popconfirm,
  PageHeader,
  Tag,
  Breadcrumb,
  Descriptions,
  Layout,
  Icon,
} from 'antd';
import './ArtisPageAll.css';
import { CustomerServiceOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Header, Content, Footer, Sider } = Layout;
export default class index extends Component {
  state = {
    data: [],
    size: 'large',
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get('/api/product')
      .then((res) => {
        // console.log('admob data', res.data);

        this.setState({
          data: res.data,
        });
      })
      .catch((err) => {
        swal('Sorry!', 'error Load Data', 'error');
        console.log(err);
      });
  };

  handleDelete = (item) => {
    console.log('item id', item._id);
    axios
      .delete(`/api/product/${item._id}`)
      .then((res) => {
        this.getData();
        swal('Success!', `Artis ${res.data.name} telah dihapus!`, 'success');
        console.log('respon', res.data);
      })
      .catch((err) => console.log('err', err));
  };

  render() {
    const { data } = this.state;
    console.log('ini data terbaru', data);

    return (
      <div>
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              background: '#fff',
              minHeight: 360,
            }}
          >
            <Row type="flex">
              {data !== undefined &&
                data.map((item, index) => {
                  return (
                    <Col
                      xs={24}
                      sm={12}
                      md={8}
                      lg={8}
                      xl={6}
                      key={index}
                      className="gutter-row"
                      style={{
                        margin: '16px 0px',
                      }}
                    >
                      <Card
                        hoverable
                        style={{
                          width: 200,
                        }}
                        cover={
                          <img
                            height={200}
                            alt="example"
                            src={
                              item.gambarBarang === ''
                                ? 'https://bigbadwolfbooks.com/wp-content/themes/bbw2019/images/no-preview.jpg'
                                : item.gambarBarang
                            }
                          />
                        }
                      >
                        <Meta
                          title={item.namaBarang}
                          description={`Rp. ${item.harga}`}
                        />
                        <Button
                          style={{ marginTop: 10 }}
                          type="primary"
                          onClick={() => {
                            this.props.history.push(
                              `/artis_detail/${item._id}`,
                            );
                          }}
                        >
                          Details
                        </Button>
                        <Popconfirm
                          title={`Delete ${item.name} ？`}
                          okText="Yes"
                          cancelText="No"
                          onConfirm={() => {
                            this.handleDelete(item);
                          }}
                        >
                          <Button
                            style={{
                              marginTop: 10,
                              marginLeft: 2,
                            }}
                            type="danger"
                          >
                            Delete
                          </Button>
                        </Popconfirm>
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </div>
        </Content>
      </div>
    );
  }
}
