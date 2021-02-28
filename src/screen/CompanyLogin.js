import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
} from 'native-base';
import Logo from '../component/Logo';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import auth from '@react-native-firebase/auth';

export default function CompanyLogin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const companyUser = () => {
    let object = {email, password};

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.replace('CompanyProfile');
        alert('User signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }

        alert(error);
      });
  };

  return (
    <Container>
      <Content>
        <Form
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
          <Logo />
          <Item style={styles.loginInputs}>
            <Icon
              name="envelope-open"
              style={{
                fontSize: 30,
                padding: 15,
                color: '#212052',
              }}
            />
            <Input
              placeholder="Enter your Email"
              keyboardType="email-address"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
          </Item>
          <Item style={styles.loginInputs}>
            <Icon
              name="key"
              style={{
                fontSize: 30,
                padding: 15,
                color: '#212052',
              }}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              placeholder="Enter your Password"
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </Item>

          <Button block style={styles.btnLogin}>
            <Text style={styles.btnText} onPress={companyUser}>
              Login
            </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  loginInputs: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 5,
    borderBottomColor: '#212052',
  },
  btnLogin: {
    backgroundColor: '#212052',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
