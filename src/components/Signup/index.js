import React, {Component} from 'react';
import {Image} from 'react-native';
import styles from './Signup.style';
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
export default function SignUp() {
  return (
    <Container>
      <Content>
        <Title style={styles.loginTitle}>iKra</Title>
        <Text>Detail Screen</Text>
      </Content>
    </Container>
  );
}
