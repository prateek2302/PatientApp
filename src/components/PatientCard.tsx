
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default function PatientCard(){
  return <View style={styles.card}><Text>Patient Card</Text></View>;
}
const styles = StyleSheet.create({ card:{ padding:12, backgroundColor:'#fff', borderRadius:12 } });
