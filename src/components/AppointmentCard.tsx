
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appointment } from '../types';
import { COLORS } from '../theme/colors';

export default function AppointmentCard({ item }: { item: Appointment }){
  return (
    <View style={styles.card}>
      <View style={styles.left}><Text style={styles.day}>{item.date.split('-')[2]}</Text><Text style={styles.month}>{item.date.split('-')[1]}</Text></View>
      <View style={{ flex:1 }}>
        <Text style={styles.doc}>{item.doctorName}</Text>
        <Text style={styles.spec}>{item.specialty} • {item.time}</Text>
      </View>
      <View style={[styles.status, { backgroundColor: item.status==='upcoming' ? '#DCFCE7' : '#F1F5F9' }]}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card:{ flexDirection:'row', backgroundColor:'#fff', borderRadius:20, padding:15, marginBottom:12, alignItems:'center', borderWidth:1, borderColor:'#EEF2F6', shadowColor:'#0F172A', shadowOpacity:.05, shadowRadius:10, shadowOffset:{width:0,height:4}, elevation:2 },
  left:{ width:52, height:52, borderRadius:16, backgroundColor:COLORS.primaryLight, justifyContent:'center', alignItems:'center', marginRight:13 },
  day:{ fontWeight:'800', color:COLORS.primary },
  month:{ fontSize:10, color:COLORS.textMuted },
  doc:{ fontWeight:'800', color:COLORS.text, fontSize:15 },
  spec:{ fontSize:12, color:COLORS.textMuted, marginTop:2 },
  status:{ paddingHorizontal:9, paddingVertical:6, borderRadius:9 },
  statusText:{ fontSize:10, textTransform:'capitalize', fontWeight:'700' }
});
