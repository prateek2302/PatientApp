
import { Appointment, MedicalRecord, Vital } from '../types';

const delay = (ms:number) => new Promise(r=>setTimeout(r, ms));

export const api = {
  async login(email:string, password:string){
    await delay(800);
    if (!email.trim() || !password) {
      throw new Error('Email and password are required.');
    }
    return { token: 'mock-token', user: { id:'1', name:'Aarav Sharma', email } };
  },
  async getAppointments(): Promise<Appointment[]>{
    await delay(500);
    return [
      { id:'1', doctorName:'Dr. Priya Mehta', specialty:'Cardiologist', date:'2026-11-07', time:'10:30 AM', status:'upcoming'},
      { id:'2', doctorName:'Dr. Rohan Gupta', specialty:'Dermatologist', date:'2026-11-10', time:'02:00 PM', status:'upcoming'},
      { id:'3', doctorName:'Dr. Anjali Rao', specialty:'General Physician', date:'2026-10-28', time:'09:00 AM', status:'completed'},
    ];
  },
  async getRecords(): Promise<MedicalRecord[]>{
    return [
      { id:'1', title:'Complete Blood Count', date:'2026-10-20', doctor:'Dr. Priya Mehta', type:'lab'},
      { id:'2', title:'Amoxicillin 500mg', date:'2026-10-15', doctor:'Dr. Rohan Gupta', type:'prescription'},
      { id:'3', title:'Chest X-Ray', date:'2026-09-30', doctor:'Dr. Anjali Rao', type:'imaging'},
    ];
  },
  async getVitals(): Promise<Vital[]>{
    return [
      { date:'Oct 20', bp:'120/80', heartRate:72, temp:98.6, weight:72 },
      { date:'Oct 22', bp:'118/78', heartRate:70, temp:98.4, weight:71.8 },
      { date:'Oct 24', bp:'122/81', heartRate:74, temp:99.0, weight:71.5 },
      { date:'Oct 26', bp:'119/79', heartRate:71, temp:98.6, weight:71.6 },
    ];
  }
};
