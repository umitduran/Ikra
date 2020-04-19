import React, {Component, useState} from 'react';
import {Image, TextInput, Text} from 'react-native';
import {
  backgroundImg,
  signUpImg,
} from '/Users/umitduran/workspace/ReadingBook/src/image'; // todo
import styles from './Login.style';
import {postData} from '../../utils/helpers';
import {
  Container,
  Content,
  Form,
  Item,
  Title,
  Button,
  Label,
  Input,
} from 'native-base';

export default function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onPressLogin() {
    console.log(email + password);
    const data = await postData('/authenticate', {
      username: email,
      password: password,
    });
  }

  return (
    <Container style={styles.container}>
      <Content>
        <Image source={backgroundImg} style={styles.loginBackground} />
        <Title style={styles.loginTitle}>iKra</Title>
        <Form style={styles.formContent}>
          <Item floatingLabel>
            <Label style={styles.label}>Email</Label>
            <Input value={email} onChange={e => setEmail(e.nativeEvent.text)} />
          </Item>

          <Item floatingLabel last>
            <Label style={styles.label}>Password</Label>
            <Input
              value={password}
              onChange={e => setPassword(e.nativeEvent.text)}
            />
          </Item>
          <Button
            transparent
            block
            disabled={email === '' || password === ''}
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
