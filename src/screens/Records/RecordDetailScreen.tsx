import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Line, Path, Rect, Text as SvgText } from 'react-native-svg';
import { COLORS } from '../../theme/colors';
import { MedicalRecord } from '../../types';

export default function RecordDetailScreen({ route }: any) {
  const record = route.params.record as MedicalRecord;
  const isPrescription = record.type === 'prescription';
  const isImaging = record.type === 'imaging';

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>{record.type.toUpperCase()} RECORD</Text>
      <Text style={styles.title}>{record.title}</Text>
      <Text style={styles.meta}>{record.doctor} • {record.date}</Text>
      <View style={styles.preview}>
        {isPrescription ? <PrescriptionPreview /> : isImaging ? <XRayPreview /> : <DocumentPreview />}
      </View>
      <Text style={styles.caption}>
        {isPrescription ? 'Prescription image' : isImaging ? 'X-ray image' : 'Record preview'}
      </Text>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Record details</Text>
        <Text style={styles.infoText}>Reviewed by {record.doctor}</Text>
        <Text style={styles.infoText}>Recorded on {record.date}</Text>
      </View>
    </ScrollView>
  );
}

function PrescriptionPreview() {
  return (
    <View style={styles.paper}>
      <View style={styles.rxHeader}><Text style={styles.rxMark}>Rx</Text><Text style={styles.clinic}>PatientCare Clinic</Text></View>
      <View style={styles.rule} />
      <Text style={styles.paperText}>Patient prescription</Text>
      <Text style={styles.medicine}>Amoxicillin 500mg</Text>
      <Text style={styles.paperText}>Take one capsule by mouth three times daily after meals.</Text>
      <View style={styles.signature}><Text style={styles.signatureLine}>Dr. Rohan Gupta</Text><Text style={styles.paperText}>Authorized signature</Text></View>
    </View>
  );
}

function XRayPreview() {
  return (
    <View style={styles.xray}>
      <Svg width="230" height="300" viewBox="0 0 230 300">
        <Rect width="230" height="300" rx="12" fill="#172033" />
        <Circle cx="115" cy="52" r="28" fill="none" stroke="#B8D7E8" strokeWidth="5" />
        <Path d="M92 80 C76 115 79 168 96 205 L86 270 M138 80 C154 115 151 168 134 205 L144 270 M115 82 L115 212 M89 110 L55 150 M141 110 L175 150" fill="none" stroke="#D5ECF5" strokeWidth="6" strokeLinecap="round" />
        <Line x1="115" y1="92" x2="115" y2="198" stroke="#6EA8C0" strokeWidth="3" />
        <SvgText x="14" y="286" fill="#B8D7E8" fontSize="10">CHEST X-RAY • PA VIEW</SvgText>
      </Svg>
    </View>
  );
}

function DocumentPreview() {
  return (
    <View style={styles.paper}>
      <Text style={styles.paperText}>Medical record</Text>
      <View style={styles.rule} />
      <Text style={styles.medicine}>Complete Blood Count</Text>
      <Text style={styles.paperText}>This record is available for review.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 20, paddingBottom: 40 },
  kicker: { fontSize: 10, letterSpacing: 1, color: COLORS.primary, fontWeight: '800', marginTop: 8 },
  title: { fontSize: 27, fontWeight: '800', color: COLORS.text, marginTop: 6 },
  meta: { color: COLORS.textMuted, marginTop: 6 },
  preview: { minHeight: 350, marginTop: 24, borderRadius: 22, backgroundColor: '#E8F4F6', alignItems: 'center', justifyContent: 'center', padding: 20 },
  paper: { width: '100%', minHeight: 300, backgroundColor: '#FFFEF8', borderRadius: 6, padding: 24, shadowColor: '#0F172A', shadowOpacity: 0.15, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 4 },
  rxHeader: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  rxMark: { fontSize: 34, color: COLORS.primary, fontWeight: '800' },
  clinic: { color: COLORS.text, fontSize: 16, fontWeight: '700' },
  rule: { height: 1, backgroundColor: '#CBD5E1', marginVertical: 20 },
  paperText: { color: COLORS.textMuted, lineHeight: 22 },
  medicine: { color: COLORS.text, fontSize: 18, fontWeight: '800', marginVertical: 12 },
  signature: { marginTop: 70 },
  signatureLine: { color: COLORS.primary, fontSize: 18, fontStyle: 'italic' },
  xray: { borderRadius: 12, overflow: 'hidden', shadowColor: '#0F172A', shadowOpacity: 0.25, shadowRadius: 12, shadowOffset: { width: 0, height: 5 }, elevation: 5 },
  caption: { textAlign: 'center', color: COLORS.textMuted, fontSize: 12, marginTop: 10 },
  infoCard: { backgroundColor: '#fff', borderRadius: 18, padding: 18, marginTop: 22 },
  infoTitle: { color: COLORS.text, fontSize: 17, fontWeight: '800', marginBottom: 8 },
  infoText: { color: COLORS.textMuted, marginTop: 5 },
});
