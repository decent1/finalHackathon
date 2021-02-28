import React, {Profiler} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import StudentLogin from '../screen/StudentLogin';
import StudentPortfolio from '../screen/StudentPortfolio';
import Companies from '../screen/Companies';
import Profile from '../screen/Profile';
import VacancyList from '../screen/VacancyList';
import CompanyProfile from '../screen/CompanyProfile';
import CompanyLogin from '../screen/CompanyLogin';
import adminDashBoard from '../screen/adminDashBoard';
// #212052
const Stack = createStackNavigator();
export default function CrsNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: {backgroundColor: '#212052'},
            headerTitle: 'Campus Recruitment System',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="studentPortfolio"
          component={StudentPortfolio}
          options={{
            headerStyle: {backgroundColor: '#212052'},
            headerTitle: 'Student Portfolio',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              // fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerStyle: {backgroundColor: '#212052'},
            headerTitle: 'Campus Recruitment System',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="CompanyProfile"
          component={CompanyProfile}
          options={{
            headerStyle: {backgroundColor: '#212052'},
            headerTitle: 'Company Profile',
            headerTintColor: '#fff',

            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />

        <Stack.Screen
          name="JobsAlert"
          component={Companies}
          options={{
            headerStyle: {backgroundColor: '#212052'},
            headerTitle: 'Jobs (Vanacies)',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              // fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="admin"
          component={adminDashBoard}
          options={{
            headerStyle: {backgroundColor: '#212052'},
            headerTitle: 'DashBoard',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              // fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />

        <Stack.Screen
          name="StudentLogin"
          component={StudentLogin}
          options={{
            headerStyle: {backgroundColor: '#212052'},
            headerTitle: 'Student Login',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="CompanyLogin"
          component={CompanyLogin}
          options={{
            headerStyle: {backgroundColor: '#212052'},
            headerTitle: 'Company Login',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
        <Stack.Screen
          name="JobOffers"
          component={VacancyList}
          options={{
            headerStyle: {backgroundColor: '#212052'},
            headerTitle: 'Job Offers',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
