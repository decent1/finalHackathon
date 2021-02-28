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
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const VacancyList = () => {
  const [vacancyList, setVacancyList] = useState([]);
  const db = firestore().collection('CompanyVacancy');
  const getData = () => {
    
    let arr = [];
    db.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          arr.push(change.doc.data());
          var js = JSON.stringify(arr);
          var pr = JSON.parse(js);
          setVacancyList(pr)
          console.log("Added: ", pr);
          
        }
        if (change.type === "modified") {
          console.log("Modified: ", pr);
        }
        if (change.type === "removed") {
          console.log("Removed : ", pr);
        }
      });
    });
  };
//   const showFulldata = () => {
//     let arr = []
//     db.onSnapshot((snapshot) => {
//       snapshot.docChanges().forEach((change) => {
//         if (change.type === 'added') {
//             arr.push(change.doc.data())
//             var json = JSON.stringify(arr);
//             var paarse = JSON.parse(json);
            
//           console.log('New city: ', paarse);
//         }
//         if (change.type === 'modified') {
//           console.log('Modified city: ', change.doc.data());
//         }
//         if (change.type === 'removed') {
//           console.log('Removed city: ', change.doc.data());
//         }
//       });
//     });
//   };
  useEffect(() => {
    getData();
  }, []);
  console.log(vacancyList)
  return (
    <Container>
      <Content>
        <Image source={logo} style={styles.logo} />
        {vacancyList.map((v, i) => {
          return (
            <View style={styles.CardShow}  key={i} >
              <Card transparent>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note> company Name : </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {v.companyName}
                      </Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      <Text note> Job Description : </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {v.jobDescription}
                      </Text>
                    </Body>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note> Job Requirment </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {' '}
                        {v.jobRequirment}{' '}
                      </Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      <Text note>vacancy</Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {v.vacancy}
                      </Text>
                    </Body>
                  </Right>
                </CardItem>
                <CardItem>
                  <Left>
                    <Body>
                      <Text note> location </Text>
                      <Text style={{fontWeight: 'bold', fontSize: 17}}>
                        {' '}
                        {v.location}{' '}
                      </Text>
                    </Body>
                  </Left>
                  <Right>
                    <Body>
                      <Text note>applyDate</Text>
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
                  <Right>
                    <Body>
                      <Text note>email</Text>
                      <Text style={{fontSize: 10 , fontWeight: 300}}>
                        {' '}
                        {v.email}
                      </Text>
                    </Body>
                  </Right>
                </CardItem>
              </Card>
            </View>
          );
        })}
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
    logo:{
        width: 100,
        height: 100,
        alignSelf:'center',
        margin: 10,
        resizeMode:'contain'
    },
    CardShow: {
        width: '90%',
        borderWidth: 2,
        borderColor: '#212052',
        alignSelf: 'center',
        overflow: 'hidden',
        margin: 10,
        borderRadius: 10,
      },
});
export default VacancyList;
