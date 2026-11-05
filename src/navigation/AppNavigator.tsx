
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList } from '../types';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import DashboardScreen from '../screens/Home/DashboardScreen';
import AppointmentsScreen from '../screens/Appointments/AppointmentsScreen';
import BookAppointmentScreen from '../screens/Appointments/BookAppointmentScreen';
import MedicalRecordsScreen from '../screens/Records/MedicalRecordsScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import RecordDetailScreen from '../screens/Records/RecordDetailScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { COLORS } from '../theme/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function MainTabs(){
  return (
    <Tab.Navigator screenOptions={({route})=>({
      tabBarIcon: ({color}) => {
        const map:any = { Dashboard:'⌂', Appointments:'□', Records:'▤', Profile:'○' };
        return <Text style={{ color, fontSize:22, fontWeight:'700', lineHeight:24 }}>{map[route.name] || '⌂'}</Text>;
      },
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: '#94A3B8',
      headerShown: false,
      tabBarStyle: { height: 72, paddingBottom: 10, paddingTop: 8, borderTopWidth: 0, backgroundColor: '#FFFFFF', shadowColor: '#0F172A', shadowOpacity: .08, shadowRadius: 12, shadowOffset: { width: 0, height: -4 }, elevation: 8 },
      tabBarLabelStyle: { fontSize: 11, fontWeight: '700' },
    })}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Appointments" component={AppointmentsScreen} />
      <Tab.Screen name="Records" component={MedicalRecordsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator(){
  const [initial, setInitial] = useState<keyof RootStackParamList>('Login');

  useEffect(()=>{
    AsyncStorage.getItem('token')
      .then(token => {
        if (token) {
          setInitial('MainTabs');
        }
      })
      .catch(error => {
        console.warn('Unable to restore the saved session.', error);
      });
  },[]);

  return (
    <Stack.Navigator initialRouteName={initial} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="BookAppointment" component={BookAppointmentScreen} options={{ headerShown:true, title:'Book Appointment'}} />
      <Stack.Screen name="RecordDetail" component={RecordDetailScreen} options={{ headerShown: true, title: 'Record Preview' }} />
    </Stack.Navigator>
  );
}
