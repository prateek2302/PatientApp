
export type Patient = {
  id: string;
  name: string;
  age: number;
  gender: string;
  bloodGroup: string;
  avatar: string;
};

export type User = Patient & {
  email: string;
};

export type Appointment = {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
};

export type MedicalRecord = {
  id: string;
  title: string;
  date: string;
  doctor: string;
  type: 'lab' | 'prescription' | 'imaging' | 'note';
};

export type Vital = {
  date: string;
  bp: string;
  heartRate: number;
  temp: number;
  weight: number;
};

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  MainTabs: undefined;
  BookAppointment: undefined;
  RecordDetail: { record: MedicalRecord };
};
