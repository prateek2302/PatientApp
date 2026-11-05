
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { api } from '../../services/api';
import { MedicalRecord } from '../../types';
import { COLORS } from '../../theme/colors';

export default function MedicalRecordsScreen(){
  const [data, setData] = useState<MedicalRecord[]>([]);
  useEffect(()=>{ api.getRecords().then(setData); },[]);
  return (
    <View style={styles.container}>
      <View style={styles.header}><Text style={styles.kicker}>YOUR HEALTH HISTORY</Text><Text style={styles.title}>Medical Records</Text><Text style={styles.sub}>Everything important, organized in one place.</Text></View>
      <FlatList data={data} keyExtractor={i=>i.id} contentContainerStyle={{ padding:16 }}
        renderItem={({item})=>(
          <View style={styles.card}>
            <View style={styles.iconBox}><Text style={styles.iconText}>{item.type === 'lab' ? 'L' : item.type === 'prescription' ? 'Rx' : item.type === 'imaging' ? 'I' : 'N'}</Text></View>
            <View style={{ flex:1 }}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSub}>{item.doctor} • {item.date}</Text>
            </View>
            <Text style={styles.badge}>{item.type}</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.upload}><Text style={styles.uploadText}>+ Upload Report</Text></TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:COLORS.background },
  header:{ padding:20, paddingTop:28 },
  kicker:{ fontSize:10, letterSpacing:1, color:COLORS.primary, fontWeight:'800' },
  title:{ fontSize:27, fontWeight:'800', color:COLORS.text, marginTop:5 },
  sub:{ color:COLORS.textMuted, marginTop:6 },
  card:{ flexDirection:'row', backgroundColor:'#fff', borderRadius:18, padding:15, marginBottom:12, alignItems:'center', borderWidth:1, borderColor:'#EEF2F6' },
  iconBox:{ width:40, height:40, borderRadius:10, backgroundColor:COLORS.primaryLight, justifyContent:'center', alignItems:'center', marginRight:12 },
  iconText:{ color:COLORS.primary, fontWeight:'800' },
  cardTitle:{ fontWeight:'800', color:COLORS.text },
  cardSub:{ color:COLORS.textMuted, fontSize:12, marginTop:2 },
  badge:{ fontSize:10, backgroundColor:'#F1F5F9', paddingHorizontal:8, paddingVertical:4, borderRadius:6, textTransform:'uppercase' },
  upload:{ backgroundColor:COLORS.primaryLight, borderWidth:1, borderColor:'#B9E3E8', borderStyle:'dashed', borderRadius:16, padding:17, margin:16, alignItems:'center' },
  uploadText:{ color:COLORS.primary, fontWeight:'700' }
});
