import React, { Component, Fragment } from 'react';
import { Table, Form, Input, Button, Select } from 'antd';
import swal from 'sweetalert';
import axios from 'axios';

class RegistrationForm extends Component {
  state = {
    subkategori: [],
  };

  componentDidMount() {
    this.getSubkategori();
  }

  getSubkategori = () => {
    axios
      .get('/api/subkategori')
      .then((res) => {
        // console.log('admob data', res.data);

        this.setState({
          subkategori: res.data,
        });
      })
      .catch((err) => {
        swal('Sorry!', 'error Load Data', 'error');
        console.log(err);
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        axios
          .post(`/api/product/`, values)
          .then((res) => {
            swal(
              'Good job!',
              `Produk ${res.data.namaBarang} telah ditambahkan!`,
              'success',
            );
            console.log('respon', res.data);
          })
          .catch((err) => {
            console.log('error update', err);
          });
        // console.log('values: ', values);
      }
    });
  };
  render() {
    const { subkategori } = this.state;
    // console.log('country', country);
    // console.log('genre', genre);
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    return (
      <div>
        <h1 style={{ textAlign: 'center', marginBottom: 20 }}>
          Tambahkan Produk
        </h1>
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Subkategori">
            {getFieldDecorator('subkategori')(
              <Select placeholder="Select sub Kategori">
                {subkategori.map((item) => {
                  return (
                    <Select.Option value={item.nama}>{item.nama}</Select.Option>
                  );
                })}
              </Select>,
            )}
          </Form.Item>
          <Form.Item label="nama barang">
            {getFieldDecorator('namaBarang')(
              <Input placeholder=" nama barang" />,
            )}
          </Form.Item>

          <Form.Item label="harga">
            {getFieldDecorator('harga')(<Input placeholder=" harga" />)}
          </Form.Item>
          <Form.Item label="gambar">
            {getFieldDecorator('gambarBarang')(<Input placeholder=" gambar" />)}
          </Form.Item>

          <Form.Item label="alamat">
            {getFieldDecorator('alamat')(
              <Input.TextArea placeholder=" alamat" />,
            )}
          </Form.Item>
          <Form.Item label="kabupaten">
            {getFieldDecorator('kabupaten')(<Input placeholder=" kabupaten" />)}
          </Form.Item>
          <Form.Item label="provinsi">
            {getFieldDecorator('provinsi')(<Input placeholder=" provinsi" />)}
          </Form.Item>
          <Form.Item label="deskripsi">
            {getFieldDecorator('deskripsi')(
              <Input.TextArea placeholder=" deskripsi" />,
            )}
          </Form.Item>
          <Form.Item label="jaminan">
            {getFieldDecorator('jaminan')(<Input placeholder=" jaminan" />)}
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Tambahkan Produk
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(
  RegistrationForm,
);

export class ArtisPageAdd extends Component {
  render() {
    return (
      <Fragment>
        <WrappedRegistrationForm />
      </Fragment>
    );
  }
}

export default ArtisPageAdd;
