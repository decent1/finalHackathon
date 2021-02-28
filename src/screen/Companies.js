import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Logo from '../component/Logo';
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
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function Companies({ navigation }) {
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobRequirment, setJobRequirement] = useState('');
  const [vacancy, setVacancy] = useState('');
  const [location, setLocation] = useState('');
  const [applyDate, setApplyDate] = useState('');
  const [lastDate, setLastDate] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const db = firestore().collection('CompanyVacancy');
  const companyAuth = () => {
    let companyObj = {
        companyName,
        jobDescription,
        jobRequirment,
        vacancy,
        location,
        applyDate,
        lastDate,
        email,
        password
    };
    if (
      !companyName.trim() ||
      !jobDescription.trim() ||
      !jobRequirment.trim() ||
      !vacancy.trim() ||
      !location.trim() ||
      !applyDate.trim() ||
      !lastDate.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      alert('All fields are required..!');
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((e) => {
          let user = e.user;
          db.doc(user.uid)
            .set(companyObj)
            .then(() => {
              alert('send successfully');
              navigation.replace('CompanyProfile');
              
            });
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
    }
  };
  return (
    <Container>
      <Content>
        <Logo />
        <Form>
       
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="envelope" style={{fontSize: 20}} color="#212052" />
                Email :
            </Label>
            <Input
              keyboardType="email-address"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="key" style={{fontSize: 20}} color="#212052" />
                 Password :
            </Label>
            <Input
              secureTextEntry={true}
              value={password}
              onChangeText={(e) => setPassword(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="building" style={{fontSize: 20}} color="#212052" />{' '}
                  Company Name :
            </Label>
            <Input
              keyboardType="default"
              value={companyName}
              onChangeText={(e) => setCompanyName(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon
                name="pencil-square"
                style={{fontSize: 20}}
                color="#212052"
              />
                 Job Description :
            </Label>
            <Input
              keyboardType="default"
              value={jobDescription}
              onChangeText={(e) => setJobDescription(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="plus-square" style={{fontSize: 20}} color="#212052" />{' '}
                  Job requirement :
            </Label>
            <Input
              keyboardType="default"
              value={jobRequirment}
              onChangeText={(e) => setJobRequirement(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="line-chart" style={{fontSize: 20}} color="#212052" />
                 No of Vacancy :
            </Label>
            <Input
              keyboardType="number-pad"
              value={vacancy}
              onChangeText={(e) => setVacancy(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="map-marker" style={{fontSize: 20}} color="#212052" />
                  Location :
            </Label>
            <Input
              keyboardType="default"
              value={location}
              onChangeText={(e) => setLocation(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="calendar" style={{fontSize: 20}} color="#212052" />
                  Apply Date :
            </Label>
            <Input
              keyboardType="number-pad"
              value={applyDate}
              onChangeText={(e) => setApplyDate(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="times" style={{fontSize: 20}} color="#212052" /> Last
                   Date :
            </Label>
            <Input
              keyboardType="number-pad"
              value={lastDate}
              onChangeText={(e) => setLastDate(e)}
            />
          </Item>
          <Button block style={styles.btnLogin}>
            <Text style={styles.btnText} onPress={companyAuth}>
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
    marginBottom: 7,
  },
  labelStyling: {
    color: '#757575',
    // fontWeight: 'bold',
    fontSize: 15,
  },
  btnLogin: {
    backgroundColor: '#212052',
    width: '80%',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
    marginBottom: 7,
  },
  btnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
});
