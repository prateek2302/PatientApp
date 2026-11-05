
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { COLORS } from '../../theme/colors';
import { useAuth } from '../../hooks/useAuth';

export default function LoginScreen({ navigation }: any){
  const [email, setEmail] = useState('patient@demo.com');
  const [password, setPassword] = useState('demo123');
  const { login, loading } = useAuth();
  const demoPatients = [
    { name: 'Aarav Sharma', email: 'aarav.sharma@email.com' },
    { name: 'Meera Iyer', email: 'meera.iyer@email.com' },
    { name: 'Kabir Khan', email: 'kabir.khan@email.com' },
  ];

  const handleLogin = async () => {
    const normalizedEmail = email.trim();
    if (!normalizedEmail || !password) {
      Alert.alert('Missing details', 'Enter your email and password to continue.');
      return;
    }

    try{
      await login(normalizedEmail,password);
      navigation.replace('MainTabs');
    }catch(error) {
      const message = error instanceof Error ? error.message : 'Please try again.';
      Alert.alert('Login failed', message);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.hero}>
          <View style={[styles.orb, styles.orbOne]} />
          <View style={[styles.orb, styles.orbTwo]} />
          <View style={styles.logoMark}><Text style={styles.logoSymbol}>+</Text></View>
          <View style={styles.eyebrow}><View style={styles.dot} /><Text style={styles.eyebrowText}>PERSONAL CARE • SIMPLIFIED</Text></View>
          <Text style={styles.logo}>PatientCare</Text>
          <Text style={styles.sub}>Your health, in your hands</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.heading}>Welcome back</Text>
          <Text style={styles.cardSub}>Sign in to continue your care journey.</Text>
          <Text style={styles.label}>Email address</Text>
          <View style={styles.inputWrap}>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" placeholder="you@email.com" placeholderTextColor="#94A3B8" />
          </View>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrap}>
            <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="Enter your password" placeholderTextColor="#94A3B8" />
          </View>
          <TouchableOpacity style={styles.forgot}><Text style={styles.link}>Forgot password?</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={handleLogin} disabled={loading}>
            <Text style={styles.btnText}>{loading ? 'Signing in...' : 'Sign In  →'}</Text>
          </TouchableOpacity>
          <Text style={styles.demoTitle}>Try a demo patient</Text>
          <Text style={styles.demoHint}>All demo accounts use password: demo123</Text>
          <View style={styles.demoList}>
            {demoPatients.map(patient => (
              <TouchableOpacity
                key={patient.email}
                style={styles.demoBtn}
                onPress={() => {
                  setEmail(patient.email);
                  setPassword('demo123');
                }}
              >
                <Text style={styles.demoName}>{patient.name}</Text>
                <Text style={styles.demoEmail}>{patient.email}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.divider}><View style={styles.line} /><Text style={styles.or}>or</Text><View style={styles.line} /></View>
          <TouchableOpacity onPress={()=> navigation.navigate('Register')} style={styles.secondaryBtn}>
            <Text style={styles.secondaryText}>Create a new account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footerRow}><View style={styles.footerBadge}><Text style={styles.footerBadgeText}>✓</Text></View><Text style={styles.footer}>Protected by secure sign-in</Text></View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:COLORS.background },
  content:{ flexGrow:1, justifyContent:'center', padding:24 },
  hero:{ alignItems:'center', marginBottom:24, overflow:'hidden', paddingTop:8, width:'100%' },
  orb:{ position:'absolute', borderRadius:999, opacity:.5 },
  orbOne:{ width:170, height:170, backgroundColor:'#D8F3F4', top:-65, left:-72 },
  orbTwo:{ width:120, height:120, backgroundColor:'#DCEBFA', top:-25, right:-48 },
  logoMark:{ width:66, height:66, borderRadius:24, backgroundColor:COLORS.primary, alignItems:'center', justifyContent:'center', marginBottom:12, shadowColor:COLORS.primary, shadowOpacity:.3, shadowRadius:16, shadowOffset:{width:0,height:8} },
  logoSymbol:{ color:'#fff', fontSize:38, fontWeight:'300', lineHeight:42 },
  eyebrow:{ flexDirection:'row', alignItems:'center', backgroundColor:'#E6F4F8', borderRadius:20, paddingHorizontal:11, paddingVertical:6, marginBottom:10 },
  dot:{ width:6, height:6, borderRadius:3, backgroundColor:COLORS.secondary, marginRight:6 },
  eyebrowText:{ fontSize:10, letterSpacing:1, color:COLORS.primary, fontWeight:'800' },
  logo:{ fontSize:32, fontWeight:'800', color:COLORS.primary },
  sub:{ textAlign:'center', color:COLORS.textMuted, marginTop:6 },
  card:{ backgroundColor:'#fff', borderRadius:30, padding:24, shadowColor:'#0F172A', shadowOpacity:.1, shadowRadius:24, shadowOffset:{width:0,height:10}, elevation:5, borderWidth:1, borderColor:'#F1F5F9' },
  heading:{ fontSize:23, fontWeight:'800', color:COLORS.text },
  cardSub:{ color:COLORS.textMuted, marginTop:6, marginBottom:18 },
  label:{ fontSize:13, fontWeight:'700', color:COLORS.text, marginTop:12, marginBottom:7 },
  inputWrap:{ flexDirection:'row', alignItems:'center', borderWidth:1, borderColor:COLORS.border, borderRadius:14, paddingHorizontal:14, backgroundColor:'#F8FAFC' },
  input:{ flex:1, padding:14, paddingLeft:10, color:COLORS.text },
  forgot:{ alignSelf:'flex-end', marginTop:10 },
  btn:{ backgroundColor:COLORS.primary, borderRadius:14, padding:16, marginTop:22, alignItems:'center', flexDirection:'row', justifyContent:'center', gap:10 },
  btnText:{ color:'#fff', fontWeight:'800', fontSize:16 },
  demoTitle:{ color:COLORS.text, fontWeight:'800', fontSize:14, marginTop:22 },
  demoHint:{ color:COLORS.textMuted, fontSize:12, marginTop:4 },
  demoList:{ gap:8, marginTop:10 },
  demoBtn:{ borderWidth:1, borderColor:'#D9E7EE', borderRadius:12, padding:11, backgroundColor:'#F8FCFD' },
  demoName:{ color:COLORS.primary, fontWeight:'800' },
  demoEmail:{ color:COLORS.textMuted, fontSize:11, marginTop:2 },
  divider:{ flexDirection:'row', alignItems:'center', marginVertical:20 },
  line:{ flex:1, height:1, backgroundColor:COLORS.border },
  or:{ color:COLORS.textMuted, marginHorizontal:12, fontSize:12 },
  secondaryBtn:{ borderWidth:1, borderColor:COLORS.primary, borderRadius:14, padding:15, alignItems:'center' },
  secondaryText:{ color:COLORS.primary, fontWeight:'800' },
  link:{ color:COLORS.primary, fontWeight:'700' },
  footerRow:{ flexDirection:'row', alignItems:'center', justifyContent:'center', marginTop:20 },
  footerBadge:{ width:20, height:20, borderRadius:10, backgroundColor:'#DFF7EC', alignItems:'center', justifyContent:'center', marginRight:7 },
  footerBadgeText:{ color:COLORS.success, fontWeight:'800', fontSize:12 },
  footer:{ color:COLORS.textMuted, fontSize:12 }
});
