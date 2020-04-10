import React, {Component, useState} from 'react';
import {Image, TextInput} from 'react-native';
import {
  backgroundImg,
  signUpImg,
} from '/Users/umitduran/workspace/ReadingBook/src/image'; // todo
import styles from './Login.style';
import {postData, getData} from '../../utils/helpers';
import axios from 'axios';
import {
  Container,
  Content,
  Form,
  Item,
  Title,
  Button,
  Label,
  Text,
  View,
} from 'native-base';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function onPressLogin() {
    const data = await postData(
      'https://ikra-back.herokuapp.com/api/authenticate',
      {
        username: email,
        password: password,
      },
    );
  }

  function onChangeEmail(sEmail, sValue) {
    setEmail(sValue);
  }

  function onChangePassword(sPassword, sValue) {
    setPassword(sValue);
  }

  return (
    <Container style={styles.container}>
      <Content>
        <Image source={backgroundImg} style={styles.loginBackground} />
        <Title style={styles.loginTitle}>iKra</Title>
        <Form style={styles.formContent}>
          <Item floatingLabel>
            <Label style={styles.label}>Email</Label>
            <TextInput
              autoCapitalize="none"
              autoCompleteType="email"
              type="email"
              value={email}
              onChangeText={value => onChangeEmail('Email', value)}
            />
          </Item>

          <Item floatingLabel last>
            <Label style={styles.label}>Password</Label>
            <TextInput
              type="password"
              autoCapitalize="none"
              autoCompleteType="password"
              value={password}
              onChangeText={value => onChangePassword('Password', value)}
            />
          </Item>
          <Button
            disabled={email === '' || password === ''}
            transparent
            block
            style={styles.loginButton}
            onPress={onPressLogin}>
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
