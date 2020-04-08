import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
  backgroundImg,
  signUpImg,
} from '/Users/umitduran/workspace/ReadingBook/src/image'; // todo
//module "/Users/umitduran/workspace/ReadingBook/src/image/index"
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Title,
  Button,
  Label,
  Text,
  View,
} from 'native-base';

const styles = StyleSheet.create({
  container: {},
  loginButton: {
    position: 'relative',
    margin: 25,
    backgroundColor: '#FF3366',
    borderRadius: 36,
  },
  loginButtonText: {
    fontSize: 20,
    color: 'white',
    fontStyle: 'normal',
  },
  formContent: {
    padding: 20,
  },
  loginImg: {
    position: 'absolute',
    left: 160,
    bottom: 200,
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
  loginTitle: {
    marginTop: 20,
    fontFamily: 'Monoton-Regular',
    fontSize: 80,
    color: '#FF3366',
  },
  label: {
    alignItems: 'center',
    textAlign: 'center',
    color: '#28848e',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
  signUpLink: {
    textAlign: 'center',
    fontSize: 25,
    color: 'red',
    marginRight: 2,
  },
  signUpIcon: {
    width: 50,
    height: 50,
  },
});

export default function LoginScreen({navigation}) {
  return (
    <Container style={styles.container}>
      <Content>
        <Image source={backgroundImg} style={styles.loginBackground} />
        <Title style={styles.loginTitle}>iKra</Title>
        <Form style={styles.formContent}>
          <Item floatingLabel>
            <Label style={styles.label}>Username</Label>
            <Input />
          </Item>

          <Item floatingLabel last>
            <Label style={styles.label}>Password</Label>
            <Input />
          </Item>
          <Button transparent block style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </Button>
          <Text style={styles.text}>You don't have an account !</Text>
          <Text
            style={styles.signUpLink}
            onPress={() => navigation.navigate('SignUp')}>
            Sign up <Image source={signUpImg} style={styles.signUpIcon} />
          </Text>
        </Form>
      </Content>
    </Container>
  );
}
