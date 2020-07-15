import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../Configs/Redux/actions/authActions';
import './LoginPage.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = styled((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class LoginPage extends Component {
  state = {
    data: [],
    errors: {},
    email: '',
    password: '',
  };

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/home');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/home');
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    console.log('values: ', email, password);
    const userData = {
      email,
      password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const classes = useStyles;
    const { errors } = this.state;

    return (
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content>
          <div className="main">
            <CssBaseline />
            <div className="paper">
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <div className="textSatu">Silahkan Login untuk melanjutkan</div>
              <form className={classes.form} noValidate>
                <TextField
                  error={errors.email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(even) =>
                    this.setState({
                      email: even.target.value,
                    })
                  }
                  value={this.state.email}
                  helperText={errors.email}
                />
                <TextField
                  error={errors.password}
                  helperText={errors.password}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(even) =>
                    this.setState({
                      password: even.target.value,
                    })
                  }
                  value={this.state.password}
                />
                <div className="button">
                  <Button
                    fullWidth
                    // variant="contained"
                    // color="#1890ff"
                    onClick={this.handleSubmit}
                  >
                    Masuk
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          sewa Rental admin ©2020 Created by dede
        </Footer>
      </Layout>
    );
  }
}

LoginPage.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(LoginPage));
