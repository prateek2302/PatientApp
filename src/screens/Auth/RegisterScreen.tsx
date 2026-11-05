
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { COLORS } from '../../theme/colors';
export default function RegisterScreen({ navigation }: any){
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.back}><Text style={styles.backText}>←</Text></TouchableOpacity>
      <View style={styles.icon}><Text style={styles.iconText}>+</Text></View>
      <Text style={styles.title}>Create your account</Text>
      <Text style={styles.subtitle}>Join PatientCare and keep your health records close.</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Full name</Text><TextInput style={styles.input} placeholder="Aarav Sharma" placeholderTextColor="#94A3B8" />
        <Text style={styles.label}>Email address</Text><TextInput style={styles.input} placeholder="you@email.com" keyboardType="email-address" autoCapitalize="none" placeholderTextColor="#94A3B8" />
        <Text style={styles.label}>Phone number</Text><TextInput style={styles.input} placeholder="+1 555 000 0000" keyboardType="phone-pad" placeholderTextColor="#94A3B8" />
        <Text style={styles.label}>Password</Text><TextInput style={styles.input} placeholder="Create a secure password" secureTextEntry placeholderTextColor="#94A3B8" />
        <TouchableOpacity style={styles.btn} onPress={()=> navigation.replace('MainTabs')}>
          <Text style={styles.btnText}>Create Account  →</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.signIn}>Already registered? <Text onPress={() => navigation.goBack()} style={styles.link}>Sign in</Text></Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:COLORS.background },
  content:{ padding:24, paddingTop:54, paddingBottom:40 },
  back:{ width:42, height:42, borderRadius:14, backgroundColor:'#fff', alignItems:'center', justifyContent:'center', marginBottom:28 },
  backText:{ fontSize:24, color:COLORS.text },
  icon:{ width:58, height:58, borderRadius:20, backgroundColor:COLORS.primary, alignItems:'center', justifyContent:'center', marginBottom:16 },
  iconText:{ color:'#fff', fontSize:38, fontWeight:'300', lineHeight:42 },
  title:{ fontSize:29, fontWeight:'800', color:COLORS.text },
  subtitle:{ fontSize:15, color:COLORS.textMuted, lineHeight:22, marginTop:8, marginBottom:24 },
  card:{ backgroundColor:'#fff', borderRadius:24, padding:22, shadowColor:'#0F172A', shadowOpacity:.07, shadowRadius:18, shadowOffset:{width:0,height:8}, elevation:3 },
  label:{ fontSize:13, fontWeight:'700', color:COLORS.text, marginBottom:7, marginTop:10 },
  input:{ borderWidth:1, borderColor:COLORS.border, borderRadius:14, padding:14, color:COLORS.text, backgroundColor:'#F8FAFC' },
  btn:{ backgroundColor:COLORS.primary, borderRadius:14, padding:16, alignItems:'center', justifyContent:'center', flexDirection:'row', gap:10, marginTop:24 },
  btnText:{ color:'#fff', fontWeight:'800', fontSize:16 },
  signIn:{ textAlign:'center', color:COLORS.textMuted, marginTop:22 },
  link:{ color:COLORS.primary, fontWeight:'800' }
});
