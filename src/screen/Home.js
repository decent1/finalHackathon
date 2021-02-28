import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
} from 'native-base';
import Logo from '../component/Logo';
import LmsLogin from './StudentLogin'

export default function Home({navigation}) {
  return (
    <Container>
      <Content>
        <View>
          <StatusBar backgroundColor="#212052" barStyle="light-content" />
          <Logo />
          <View style={styles.Cards}>
            <TouchableOpacity onPress={() => navigation.navigate('admin')}>
              <Text style={styles.cardText}>Admin Login</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={styles.Cards}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('JobsAlert');
              }}>
              <Text style={styles.cardText}>Post Vacancies(Company)</Text>
            </TouchableOpacity>
          </View> */}
          {/* <View style={styles.Cards}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('studentPortfolio');
              }}>
              <Text style={styles.cardText}>Create Student PortFolio</Text>
            </TouchableOpacity>
          </View> */}
          <View style={styles.Cards}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('CompanyLogin');
              }}>
              <Text style={styles.cardText}>company Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 5}}>
              <Text style={{color: '#212052' , textAlign:'center'}} >
                Create New Account
                <TouchableOpacity onPress={() => navigation.navigate('JobsAlert')}>
                  <Text style={{color: 'pink'}}> SignUp </Text>
                </TouchableOpacity>
              </Text>
            </View>
          <View style={styles.Cards}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('StudentLogin');
              }}>
              <Text style={styles.cardText}>Student Login</Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 5}}>
              <Text style={{color: '#212052' , textAlign:'center'}} >
                Create New Account
                <TouchableOpacity onPress={() => navigation.navigate('studentPortfolio')}>
                  <Text style={{color: 'pink'}}> SignUp</Text>
                </TouchableOpacity>
              </Text>
            </View>
        </View>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  Cards: {
    borderWidth: 1,
    borderColor: '#212052',
    width: '80%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  cardText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#212052',
  },
});
