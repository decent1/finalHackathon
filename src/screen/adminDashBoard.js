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


export default function adminDashBoard() {
  return (
    <Container>
      <Content>
          <Logo/>
        <View style={{display: 'flex', flexDirection: 'row' , alignSelf:'center'}}>
          <View style={styles.Cards}>
            <TouchableOpacity>
              <Text style={styles.cardText}>Jobs Lists</Text>
            </TouchableOpacity>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View style={styles.Cards}>
              <TouchableOpacity>
                <Text style={styles.cardText}>Student Lists</Text>
              </TouchableOpacity>
            </View>
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
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  cardText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#212052',
  },
});
