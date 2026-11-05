
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../theme/colors';
import { api } from '../../services/api';
import { Vital, Appointment } from '../../types';
import VitalChart from '../../components/VitalChart';
import AppointmentCard from '../../components/AppointmentCard';

export default function DashboardScreen({ navigation }: any){
  const [vitals, setVitals] = useState<Vital[]>([]);
  const [appts, setAppts] = useState<Appointment[]>([]);

  useEffect(()=>{
    api.getVitals().then(setVitals);
    api.getAppointments().then(a=> setAppts(a.filter(x=> x.status==='upcoming')));
  },[]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding:20, paddingBottom:40 }}>
      <View style={styles.topBar}><View><Text style={styles.kicker}>THURSDAY, NOVEMBER 5</Text><Text style={styles.greeting}>Good evening, Aarav</Text></View><View style={styles.avatar}><Text style={styles.avatarText}>AS</Text></View></View>
      <Text style={styles.sub}>Here's your health summary today</Text>
      <View style={styles.wellness}><View><Text style={styles.wellnessKicker}>TODAY'S WELLNESS</Text><Text style={styles.wellnessTitle}>Small steps, big impact.</Text><Text style={styles.wellnessSub}>Keep taking care of yourself.</Text></View><Text style={styles.wellnessMark}>✦</Text></View>

      <View style={styles.statsRow}>
        <View style={[styles.statCard, { backgroundColor:'#E0F2FE' }]}><Text style={styles.statIcon}>♥</Text>
          <Text style={styles.statVal}>72 bpm</Text><Text style={styles.statLabel}>Heart Rate</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor:'#DCFCE7' }]}><Text style={styles.statIcon}>↕</Text>
          <Text style={styles.statVal}>120/80</Text><Text style={styles.statLabel}>Blood Pressure</Text>
        </View>
        <View style={[styles.statCard, { backgroundColor:'#FEF3C7' }]}><Text style={styles.statIcon}>☼</Text>
          <Text style={styles.statVal}>98.6°F</Text><Text style={styles.statLabel}>Temperature</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Vitals Trend</Text>
      <VitalChart data={vitals} />

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('Appointments')}><Text style={{ color:COLORS.primary, fontWeight:'600' }}>View all</Text></TouchableOpacity>
      </View>
      {appts.map(a=> <AppointmentCard key={a.id} item={a} />)}

      <TouchableOpacity style={styles.bookBtn} onPress={()=> navigation.navigate('BookAppointment')}>
        <Text style={styles.bookText}>+ Book New Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:COLORS.background },
  topBar:{ flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
  kicker:{ fontSize:10, letterSpacing:1, fontWeight:'800', color:COLORS.primary, marginBottom:5 },
  greeting:{ fontSize:25, fontWeight:'800', color:COLORS.text },
  avatar:{ width:44, height:44, borderRadius:15, backgroundColor:COLORS.primary, alignItems:'center', justifyContent:'center' },
  avatarText:{ color:'#fff', fontWeight:'800' },
  sub:{ color:COLORS.textMuted, marginTop:4, marginBottom:20 },
  wellness:{ backgroundColor:COLORS.primary, borderRadius:22, padding:18, marginBottom:18, flexDirection:'row', justifyContent:'space-between', overflow:'hidden' },
  wellnessKicker:{ color:'#BDEAF0', fontSize:10, fontWeight:'800', letterSpacing:1 },
  wellnessTitle:{ color:'#fff', fontSize:19, fontWeight:'800', marginTop:7 },
  wellnessSub:{ color:'#D5F1F4', marginTop:3 },
  wellnessMark:{ color:'#8DE0E4', fontSize:56, marginTop:-8 },
  statsRow:{ flexDirection:'row', gap:10, marginBottom:20 },
  statCard:{ flex:1, borderRadius:18, padding:13 },
  statIcon:{ fontSize:18, color:COLORS.primary, marginBottom:8 },
  statVal:{ fontWeight:'800', fontSize:16, color:COLORS.text },
  statLabel:{ fontSize:11, color:COLORS.textMuted, marginTop:4 },
  sectionTitle:{ fontSize:18, fontWeight:'800', color:COLORS.text, marginVertical:14 },
  sectionHeader:{ flexDirection:'row', justifyContent:'space-between', alignItems:'center' },
  bookBtn:{ backgroundColor:COLORS.primary, borderRadius:16, padding:17, alignItems:'center', marginTop:16, shadowColor:COLORS.primary, shadowOpacity:.25, shadowRadius:10, shadowOffset:{width:0,height:5} },
  bookText:{ color:'#fff', fontWeight:'700' }
});
