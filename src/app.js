import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faKey} from '@fortawesome/free-solid-svg-icons';
import {loginImg, backgroundImg} from './image';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Body,
  Title,
  Button,
  Label,
  Text,
} from 'native-base';
import {red} from 'color-name';

const styles = StyleSheet.create({
  container: {},
  loginButton: {
    backgroundColor: '#FFE4B5',
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontStyle: 'normal',
  },
  formContent: {
    padding: 30,
    marginTop: 60,
  },
  loginImg: {
    position: 'absolute',
    left: 180,
    bottom: 230,
    width: 75,
    height: 75,
    borderColor: 'green',
  },
  loginBackground: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '240%',
  },
});

export default class App extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Login</Title>
          </Body>
        </Header>
        <Content>
          <Image source={backgroundImg} style={styles.loginBackground} />
          <Form style={styles.formContent}>
            <Image style={styles.loginImg} source={loginImg} />

            <Item floatingLabel>
              <Label style={styles.textContent}>Username</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label style={styles.textContent}>Password</Label>
              <Input />
            </Item>
            <Button transparent block style={styles.loginButton}>
              <Text style={styles.loginButtonText}>SIGN IN</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
