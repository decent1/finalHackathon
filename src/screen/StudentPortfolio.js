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
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import firestore from '@react-native-firebase/firestore';

export default function StudentPortfolio({ navigation }) {
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [gender, setGender] = useState('');
  const [studyProgram, setStudyProgram] = useState('');
  const [marks, setMarks] = useState('');
  const [cnic, setCnic] = useState('');
  const [adress, setAdress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const db = firestore().collection('StudentPortfolio');

  const studentAuth = () => {
    let stdAuthObj = {
      studentName,
      fatherName,
      gender,
      studyProgram,
      marks,
      cnic,
      adress,
      email,
      password,
      phone,
    };
    if (
      !email.trim() ||
      !password.trim() ||
      !studentName.trim() ||
      !fatherName.trim() ||
      !gender.trim() ||
      !studyProgram.trim() ||
      !marks.trim() ||
      !cnic.trim() ||
      !adress.trim() ||
      !email.trim() ||
      !password.trim() ||
      !phone.trim()
    ) {
      alert('All fields are required..!')
    }else {
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then((e) => {
        let user = e.user;
        db.doc(user.uid).set(stdAuthObj).then(()=>{
          alert('send successfully')
          navigation.navigate('Profile')
        })
       
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
              <Icon
                name="graduation-cap"
                style={{fontSize: 20}}
                color="#212052"
              />{' '}
              Student Name :
            </Label>
            <Input
              keyboardType="default"
              value={studentName}
              onChangeText={(e) => setStudentName(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="user" style={{fontSize: 20}} color="#212052" />{' '}
                 Father's Name :
            </Label>
            <Input
              keyboardType="default"
              value={fatherName}
              onChangeText={(e) => setFatherName(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon
                name="venus-double"
                style={{fontSize: 20}}
                color="#212052"
              />{' '}
                   Gender:
            </Label>
            <Input
              keyboardType="default"
              value={gender}
              onChangeText={(e) => setGender(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon
                name="venus-double"
                style={{fontSize: 20}}
                color="#212052"
              />{' '}
                 Study Program:
            </Label>
            <Input
              keyboardType="default"
              value={studyProgram}
              onChangeText={(e) => setStudyProgram(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon
                name="birthday-cake"
                style={{fontSize: 20}}
                color="#212052"
              />{' '}
                 Marks :
            </Label>
            <Input
              keyboardType="number-pad"
              value={marks}
              onChangeText={(e) => setMarks(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="id-card" style={{fontSize: 20}} color="#212052" />{' '}
                 CNIC :
            </Label>
            <Input
              keyboardType="number-pad"
              value={cnic}
              onChangeText={(e) => setCnic(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon
                name="address-book"
                style={{fontSize: 20}}
                color="#212052"
              />{' '}
                  Permanent Address :
            </Label>
            <Input
              keyboardType="default"
              value={adress}
              onChangeText={(e) => setAdress(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="envelope" style={{fontSize: 20}} color="#212052" />{' '}
                  Student Email :
            </Label>
            <Input
              keyboardType="email-address"
              value={email}
              onChangeText={(e) => setEmail(e)}
            />
          </Item>
          <Item stackedLabel style={styles.loginInputs}>
            <Label style={styles.labelStyling}>
              <Icon name="key" style={{fontSize: 20}} color="#212052" />{' '}
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
              <Icon name="phone" style={{fontSize: 20}} color="#212052" />    
                   Phone(Mobile) :
            </Label>
            <Input
              keyboardType="number-pad"
              value={phone}
              onChangeText={(e) => setPhone(e)}
            />
          </Item>
          <Button block style={styles.btnLogin}>
            <Text style={styles.btnText} onPress={studentAuth}>Login</Text>
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
