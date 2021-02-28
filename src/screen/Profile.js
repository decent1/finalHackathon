import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
// import Logo from '../component/Logo';
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

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
const db = firestore().collection('StudentPortfolio');

const Profile = (props) => {
  // console.log(props.studentPortfolio);
  const [fullData, setFulldata] = useState([]);
  const [loading, setLoading] = useState(false);

  const realTimeData = () => {
    setLoading(true);
    let arr = [];
    var user = auth().currentUser;
    db.doc(user.uid).onSnapshot((e) => {
      arr.push(e.data());
      var json = JSON.stringify(arr);
      var paarse = JSON.parse(json);
      setFulldata(paarse);
    });
    setLoading(false);
  };
  // console.log('fulldata', fullData);
  useEffect(() => {
    realTimeData();
  }, []);

  return (
    <Container>
      <Content>
        <Image source={logo} style={styles.logo} />
        {fullData.map((v, i) => {
          return (
            <View style={styles.CardShow}>
              <Card transparent key={i}>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note> Name : </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {v.studentName} {v.fatherName}
                      </Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      <Text note> Study Program : </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {v.studyProgram}
                      </Text>
                    </Body>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note> Marks </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {' '}
                        {v.marks}{' '}
                      </Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      <Text note>CNIC</Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {v.cnic}
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
                      <Text note>Address</Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {' '}
                        {v.adress}
                      </Text>
                    </Body>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note> Gender </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {' '}
                        {v.gender}{' '}
                      </Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      <Text note>Phone</Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {' '}
                        {v.phone}
                      </Text>
                    </Body>
                  </Right>
                </CardItem>
              </Card>
            </View>
          );
        })}
        <View style={styles.Cards}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('JobOffers');
            }}>
            <Text style={styles.cardText}> View Job Offers</Text>
          </TouchableOpacity>
        </View>
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  CardShow: {
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
  },
});

const mapStateToProps = (state) => ({
  studentPortfolio: state.studentPortfolio,
  // CompanyList: state.CompanyList,
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, null)(Profile);
