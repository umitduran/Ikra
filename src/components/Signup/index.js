import React, {Component, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './Signup.style';
import {postData} from '../../utils/helpers';
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
  Toast,
  Root,
} from 'native-base';
export default function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showIndicator, setIndicator] = useState(false);
  const MyContext = React.createContext('');

  async function onPressSignUp(e) {
    setIndicator(true);
    const oSign = await postData('/public/user/create', {
      fullName: name,
      email: email,
      password: password,
    });
    setIndicator(false);
    if (oSign.isAxiosError) {
      // TODO: Error mesaji handle edilecek
      console.log('error');
      Toast.show({
        text: 'Hata',
        type: 'danger',
        duration: 6000,
        position: 'bottom',
        style: {marginBottom: 300, borderRadius: 10},
        buttonText: 'Kapat',
      });
      navigation.navigate('Main');
    } else {
      console.log('Success');
      MyContext.Token = oSign.data.token;
      Toast.show({
        text: 'Kayit Basarili',
        type: 'success',
        duration: 3000,
        position: 'bottom',
        style: {marginBottom: 300, borderRadius: 10},
        buttonText: 'Kapat',
      });
      navigation.navigate('Main');
      // TODO kayit basarili
    }
  }
  if (!showIndicator) {
    return (
      // Toast mesajini gosterebilmek icin nativebase de Container i Root ile wrap ettim.
      <Root>
        <Container style={styles.container}>
          <Content>
            <Title style={styles.signupTitle}>Read, Discover & Share</Title>
            <Form style={styles.formContent}>
              <Item floatingLabel>
                <Label style={styles.label}>Name</Label>
                <Input
                  onChange={e => setName(e.nativeEvent.text)}
                  value={name}
                />
              </Item>
              <Item floatingLabel>
                <Label style={styles.label}>Email</Label>
                <Input
                  value={email}
                  onChange={e => setEmail(e.nativeEvent.text)}
                />
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
                style={styles.signupButton}
                disabled={name === '' || email === '' || password === ''}
                onPress={onPressSignUp}>
                <Text style={styles.signupButtonText}>Sign Up</Text>
              </Button>
            </Form>
          </Content>
        </Container>
      </Root>
    );
  } else {
    return (
      <Container style={styles.indicatorContainer}>
        <ActivityIndicator size="large" color="#382110" />
      </Container>
    );
  }
}
