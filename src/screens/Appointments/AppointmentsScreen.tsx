
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { api } from '../../services/api';
import { Appointment } from '../../types';
import AppointmentCard from '../../components/AppointmentCard';
import { COLORS } from '../../theme/colors';

export default function AppointmentsScreen({ navigation }: any){
  const [data, setData] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState<'upcoming'|'completed'|'all'>('upcoming');
  useEffect(()=>{ api.getAppointments().then(setData); },[]);

  const filtered = filter==='all' ? data : data.filter(d=> d.status===filter);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View><Text style={styles.kicker}>YOUR CARE PLAN</Text><Text style={styles.title}>Appointments</Text></View>
        <TouchableOpacity style={styles.add} onPress={()=> navigation.navigate('BookAppointment')}>
          <Text style={styles.addText}>+ Book</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabs}>
        {(['upcoming','completed','all'] as const).map(t=>(
          <TouchableOpacity key={t} style={[styles.tab, filter===t && styles.tabActive]} onPress={()=> setFilter(t)}>
            <Text style={[styles.tabText, filter===t && styles.tabTextActive]}>{t.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList data={filtered} keyExtractor={i=>i.id} renderItem={({item})=><AppointmentCard item={item}/>} contentContainerStyle={{ padding:16 }} />
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:COLORS.background },
  header:{ flexDirection:'row', justifyContent:'space-between', padding:20, paddingTop:28, alignItems:'center' },
  kicker:{ fontSize:10, letterSpacing:1, color:COLORS.primary, fontWeight:'800', marginBottom:4 },
  title:{ fontSize:22, fontWeight:'800' },
  add:{ backgroundColor:COLORS.primary, paddingHorizontal:15, paddingVertical:11, borderRadius:13 },
  addText:{ color:'#fff', fontWeight:'700' },
  tabs:{ flexDirection:'row', paddingHorizontal:16, gap:8, marginBottom:4 },
  tab:{ paddingHorizontal:12, paddingVertical:6, borderRadius:20, backgroundColor:'#E2E8F0' },
  tabActive:{ backgroundColor:COLORS.primary },
  tabText:{ fontSize:11, fontWeight:'700', color:'#64748B' },
  tabTextActive:{ color:'#fff' }
});
