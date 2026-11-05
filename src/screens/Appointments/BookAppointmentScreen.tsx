
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { COLORS } from '../../theme/colors';

export default function BookAppointmentScreen({ navigation }: any){
  const [doctor, setDoctor] = useState('');
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={()=>navigation.goBack()}><Text style={styles.back}>← Back</Text></TouchableOpacity>
      <Text style={styles.kicker}>PERSONAL CARE</Text>
      <Text style={styles.title}>Book a visit</Text>
      <Text style={styles.sub}>Tell us what you need and we’ll help arrange the right care.</Text>
      <View style={styles.card}>
      <Text style={styles.label}>Doctor / Specialty</Text>
      <TextInput style={styles.input} placeholder="e.g. Cardiologist" value={doctor} onChangeText={setDoctor} />
      <Text style={styles.label}>Preferred Date</Text>
      <TextInput style={styles.input} placeholder="YYYY-MM-DD" />
      <Text style={styles.label}>Notes</Text>
      <TextInput style={[styles.input, { height:100 }]} multiline placeholder="Describe symptoms..." />
      <TouchableOpacity style={styles.btn} onPress={()=> { Alert.alert('Booked','Appointment request sent'); navigation.goBack(); }}>
        <Text style={styles.btnText}>Confirm Booking  →</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:COLORS.background },
  content:{ padding:22, paddingTop:30 },
  back:{ color:COLORS.primary, fontWeight:'800', marginBottom:28 },
  kicker:{ fontSize:10, letterSpacing:1, color:COLORS.primary, fontWeight:'800' },
  title:{ fontSize:30, fontWeight:'800', color:COLORS.text, marginTop:6 },
  sub:{ color:COLORS.textMuted, lineHeight:21, marginTop:8, marginBottom:22 },
  card:{ backgroundColor:'#fff', borderRadius:24, padding:20, borderWidth:1, borderColor:'#EEF2F6' },
  label:{ fontWeight:'700', color:COLORS.text, marginTop:12 },
  input:{ borderWidth:1, borderColor:COLORS.border, borderRadius:14, padding:14, marginTop:7, backgroundColor:'#F8FAFC', color:COLORS.text },
  btn:{ backgroundColor:COLORS.primary, borderRadius:15, padding:17, alignItems:'center', marginTop:24 },
  btnText:{ color:'#fff', fontWeight:'800', fontSize:16 }
});
