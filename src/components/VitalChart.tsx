
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Vital } from '../types';
import { COLORS } from '../theme/colors';

export default function VitalChart({ data }: { data: Vital[] }){
  if(!data.length) return null;
  return (
    <View style={styles.wrap}>
      <LineChart
        data={{ labels: data.map(d=> d.date), datasets: [{ data: data.map(d=> d.heartRate) }] }}
        width={Dimensions.get('window').width - 48}
        height={180}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces:0,
          color:()=> COLORS.primary,
          labelColor:()=> '#94A3B8',
          propsForDots:{ r:'4', strokeWidth:'2', stroke:COLORS.primary }
        }}
        bezier style={{ borderRadius:16 }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  wrap:{ backgroundColor:'#fff', borderRadius:22, padding:8, borderWidth:1, borderColor:'#EEF2F6', shadowColor:'#0F172A', shadowOpacity:.05, shadowRadius:12, shadowOffset:{width:0,height:5}, elevation:2 }
});
