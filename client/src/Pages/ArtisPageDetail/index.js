import React, { Component } from 'react';
import axios from 'axios';
import './ArtisPageDetail.css';
import { Form, Select, Input, Button, PageHeader, Layout } from 'antd';
import swal from 'sweetalert';
import { LoadingOutlined } from '@ant-design/icons';
const { Content } = Layout;

class ArtisPageDetail extends Component {
  state = {
    data: [],
    subkategoriData: [],
    namaBarang: '',
    harga: '',
    alamat: '',
    deskripsi: '',
    gambarBarang: '',
    jaminan: '',
    kabupaten: '',
    provinsi: '',
    subkategori: '',
    visible: false,
    visibleMusic: false,
    confirmLoading: false,
    isLoading: false,
    isUpdate: false,
  };

  componentDidMount() {
    this.getProduk();
    this.getSubkategori();
  }

  getProduk = () => {
    const id = this.props.match.params._id;
    // console.log('ini id terbaru', id);
    axios
      .get(`/api/product/${id}`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  getSubkategori = () => {
    axios
      .get(`/api/subkategori`)
      .then((res) => {
        this.setState({
          subkategoriData: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  handleUpdateProduk = () => {
    const id = this.props.match.params._id;
    const {
      namaBarang,
      harga,
      alamat,
      deskripsi,
      gambarBarang,
      jaminan,
      kabupaten,
      provinsi,
      subkategori,
    } = this.state;
    const dataUpdate = {
      namaBarang,
      harga,
      alamat,
      deskripsi,
      gambarBarang,
      jaminan,
      kabupaten,
      provinsi,
      subkategori,
    };
    console.log('data', dataUpdate);
    // const { name, bio, image, genre, country } = req.body;
    axios
      .put(`/api/product/update/${id}`, dataUpdate)
      .then((res) => {
        console.log('respon sukses', res.data);
        swal('Sukses!', `Update successfull`, 'success');
        this.getProduk();
        this.setState({ isUpdate: false });
      })
      .catch((err) => {
        swal('Sorry!', 'error Load Data', 'error');
        console.log(err);
      });
  };

  render() {
    const {
      data,
      subkategoriData,
      namaBarang,
      harga,
      alamat,
      deskripsi,
      gambarBarang,
      jaminan,
      kabupaten,
      provinsi,
      subkategori,
      isUpdate,
    } = this.state;
    // console.log('data detail', data);

    const formItemLayout = {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 14,
          offset: 8,
        },
      },
    };

    return (
      <Layout className="site-layout">
        <PageHeader
          avatar={{
            src:
              data.gambarBarang !== ''
                ? data.gambarBarang
                : 'https://jdih.anri.go.id/admin/uploads/nopreview.png',
          }}
          style={{ marginBottom: 20, backgroundColor: 'white' }}
          className="site-page-header"
          onBack={() => this.props.history.goBack()}
          title={data.namaBarang}
        />
        <Content>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360, backgroundColor: 'white' }}
          >
            <Form {...formItemLayout}>
              <Form.Item label="subkategori">
                {isUpdate ? (
                  <Select
                    onChange={(value) => {
                      this.setState({
                        subkategori: value,
                      });
                    }}
                    defaultValue={subkategori}
                    placeholder="Select subkategori"
                  >
                    {subkategoriData.map((item) => {
                      return (
                        <Select.Option
                          value={item.nama}
                          onChange={(even) =>
                            this.setState({
                              country: even.target.value,
                            })
                          }
                        >
                          {item.nama}
                        </Select.Option>
                      );
                    })}
                  </Select>
                ) : (
                  <Input value={data.subkategori} />
                )}
              </Form.Item>
              <Form.Item label="nama barang">
                {isUpdate ? (
                  <Input
                    allowClear
                    value={namaBarang}
                    placeHolder="nama barang"
                    onChange={(even) =>
                      this.setState({
                        namaBarang: even.target.value,
                      })
                    }
                  />
                ) : (
                  <Input value={data.namaBarang} />
                )}
              </Form.Item>
              <Form.Item label="gambar barang">
                {isUpdate ? (
                  <Input
                    allowClear
                    value={gambarBarang}
                    placeHolder="gambar barang"
                    onChange={(even) =>
                      this.setState({
                        gambarBarang: even.target.value,
                      })
                    }
                  />
                ) : (
                  <Input value={data.gambarBarang} />
                )}
              </Form.Item>
              <Form.Item label="harga">
                {isUpdate ? (
                  <Input
                    allowClear
                    value={harga}
                    placeHolder="harga"
                    onChange={(even) =>
                      this.setState({
                        harga: even.target.value,
                      })
                    }
                  />
                ) : (
                  <Input value={data.harga} />
                )}
              </Form.Item>
              <Form.Item label="alamat">
                {isUpdate ? (
                  <Input
                    allowClear
                    value={alamat}
                    placeHolder="alamat"
                    onChange={(even) =>
                      this.setState({
                        alamat: even.target.value,
                      })
                    }
                  />
                ) : (
                  <Input value={data.alamat} />
                )}
              </Form.Item>
              <Form.Item label="kabupaten">
                {isUpdate ? (
                  <Input
                    allowClear
                    value={kabupaten}
                    placeHolder="kabupaten"
                    onChange={(even) =>
                      this.setState({
                        kabupaten: even.target.value,
                      })
                    }
                  />
                ) : (
                  <Input value={data.kabupaten} />
                )}
              </Form.Item>
              <Form.Item label="provinsi">
                {isUpdate ? (
                  <Input
                    allowClear
                    value={provinsi}
                    placeHolder="provinsi"
                    onChange={(even) =>
                      this.setState({
                        provinsi: even.target.value,
                      })
                    }
                  />
                ) : (
                  <Input value={data.provinsi} />
                )}
              </Form.Item>
              <Form.Item label="jaminan">
                {isUpdate ? (
                  <Input
                    allowClear
                    value={jaminan}
                    placeHolder="jaminan"
                    onChange={(even) =>
                      this.setState({
                        jaminan: even.target.value,
                      })
                    }
                  />
                ) : (
                  <Input value={data.jaminan} />
                )}
              </Form.Item>
              <Form.Item label="deskripsi">
                {isUpdate ? (
                  <Input.TextArea
                    allowClear
                    value={deskripsi}
                    placeHolder="field deskripsi"
                    onChange={(even) =>
                      this.setState({
                        deskripsi: even.target.value,
                      })
                    }
                  />
                ) : (
                  <Input.TextArea value={data.deskripsi} />
                )}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                {this.state.isLoading ? (
                  <Button type="primary" disabled>
                    <LoadingOutlined
                      style={{
                        marginLeft: 20,
                        marginRight: 20,
                      }}
                    />
                  </Button>
                ) : (
                  <Button
                    type="primary"
                    onClick={
                      isUpdate
                        ? this.handleUpdateProduk
                        : () =>
                            this.setState({
                              isUpdate: true,
                              namaBarang: data.namaBarang,

                              harga: data.harga,
                              alamat: data.alamat,
                              deskripsi: data.deskripsi,
                              gambarBarang: data.gambarBarang,
                              jaminan: data.jaminan,
                              kabupaten: data.kabupaten,
                              provinsi: data.provinsi,
                              subkategori: data.subkategori,
                            })
                    }
                  >
                    {isUpdate ? 'Submit Update' : 'Update'}
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default ArtisPageDetail;
