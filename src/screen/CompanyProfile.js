import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
var logo = require('../images/crs_logo.png');
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Left,
  Right,
  Body,
  List,
  ListItem,
  Thumbnail,
  Card,
  CardItem,
} from 'native-base';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function CompanyProfile(props) {
  const [companyData, setCompanyData] = useState([]);
  const db = firestore().collection('CompanyVacancy');
  const showCompanyData = () => {
    // setLoading(true);
    let arr = [];
    var user = auth().currentUser;
    db.doc(user.uid).onSnapshot((e) => {
      arr.push(e.data());
      var json = JSON.stringify(arr);
      var paarse = JSON.parse(json);
      setCompanyData(paarse);
      console.log('companyData', paarse);
    });
    // setLoading(false);
  };

  useEffect(() => {
    showCompanyData();
  }, []);
  return (
    <Container>
      <Content>
        <Image source={logo} style={styles.logo} />
        {companyData.map((v, i) => {
          return (
            <View style={styles.CardShow}>
              <Card transparent key={i}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note> Company Name : </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {v.companyName}
                      </Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      
                      <Text note> job Description: </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {v.jobDescription}
                      </Text>
                    </Body>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note> job Requirment </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {' '}
                        {v.jobRequirment}{' '}
                      </Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      <Text note> location </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {v.location}
                      </Text>
                    </Body>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note> Email </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {' '}
                        {v.email}{' '}
                      </Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      <Text note> applyDate </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {' '}
                        {v.applyDate}
                      </Text>
                    </Body>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note> lastDate </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {' '}
                        {v.lastDate}{' '}
                      </Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </View>
          );
        })}
      
          <View style={styles.Cards}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('JobsAlert');
              }}>
              <Text style={styles.cardText}>Post Vacancies(Company)</Text>
            </TouchableOpacity>
          </View>
        
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({CardShow: {
  width: '90%',
  borderWidth: 2,
  borderColor: '#212052',
  alignSelf: 'center',
  overflow: 'hidden',
  margin: 10,
  borderRadius: 10,
},
Cards: {
  borderWidth: 1,
  borderColor: '#212052',
  width: '80%',
  alignSelf: 'center',
  padding: 10,
  borderRadius: 20,
  marginTop: 20,
  marginBottom: 20,
},
cardText: {
  textAlign: 'center',
  fontWeight: 'bold',
  color: '#212052',
},
logo: {
  width: 100,
  height: 100,
  alignSelf: 'center',
  margin: 10,
  resizeMode: 'contain',
},});
