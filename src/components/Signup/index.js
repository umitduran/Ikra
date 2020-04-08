import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
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
  const styles = StyleSheet.create({
    loginTitle: {
      marginTop: 20,
      fontFamily: 'Monoton-Regular',
      fontSize: 80,
      color: '#FF3366',
    },
  });
  return (
    <Container>
      <Content>
        <Title style={styles.loginTitle}>iKra</Title>
        <Text>Detail Screen</Text>
      </Content>
    </Container>
  );
}
