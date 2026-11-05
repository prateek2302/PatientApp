
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS } from '../../theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfileScreen({ navigation }: any){
  const logout = async () => {
    await AsyncStorage.clear();
    navigation.replace('Login');
  };
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding:20 }}>
      <View style={styles.hero}><View style={styles.avatar}><Text style={styles.avatarText}>AS</Text></View><Text style={styles.verified}>✓ VERIFIED PROFILE</Text></View>
      <Text style={styles.name}>Aarav Sharma</Text>
      <Text style={styles.email}>aarav.sharma@email.com • 28y • O+</Text>
      <Text style={styles.section}>Personal details</Text>

      <View style={styles.card}>
        <Row label="Patient ID" value="P-2026-00142" />
        <Row label="Blood Group" value="O+ Positive" />
        <Row label="Allergies" value="Penicillin, Dust" />
        <Row label="Emergency Contact" value="+91 98765 43210" />
      </View>

      <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Edit Profile</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.btn, { backgroundColor:'#FEE2E2' }]} onPress={logout}><Text style={[styles.btnText, { color:COLORS.danger }]}>Log Out</Text></TouchableOpacity>
    </ScrollView>
  );
}
const Row = ({label,value}:{label:string,value:string})=>(
  <View style={styles.row}><Text style={styles.rowLabel}>{label}</Text><Text style={styles.rowValue}>{value}</Text></View>
);
const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:COLORS.background },
  hero:{ alignItems:'center', backgroundColor:COLORS.primaryLight, marginHorizontal:-20, marginTop:-20, paddingTop:38, paddingBottom:25, borderBottomLeftRadius:32, borderBottomRightRadius:32 },
  avatar:{ width:88, height:88, borderRadius:30, backgroundColor:COLORS.primary, justifyContent:'center', alignItems:'center' },
  avatarText:{ color:'#fff', fontSize:28, fontWeight:'800' },
  verified:{ color:COLORS.primary, fontSize:10, fontWeight:'800', letterSpacing:1, marginTop:10 },
  name:{ fontSize:24, fontWeight:'800', textAlign:'center', marginTop:18, color:COLORS.text },
  email:{ textAlign:'center', color:COLORS.textMuted, marginTop:4 },
  section:{ fontSize:17, fontWeight:'800', color:COLORS.text, marginTop:26, marginBottom:4 },
  card:{ backgroundColor:'#fff', borderRadius:20, padding:16, marginTop:10, borderWidth:1, borderColor:'#EEF2F6' },
  row:{ flexDirection:'row', justifyContent:'space-between', paddingVertical:10, borderBottomWidth:1, borderBottomColor:'#F1F5F9' },
  rowLabel:{ color:COLORS.textMuted },
  rowValue:{ fontWeight:'600' },
  btn:{ backgroundColor:'#fff', borderRadius:14, padding:16, alignItems:'center', marginTop:12, borderWidth:1, borderColor:COLORS.border },
  btnText:{ fontWeight:'700' }
});
