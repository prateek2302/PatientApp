
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';

export function useAuth(){
  const [loading, setLoading] = useState(false);
  const login = async (email:string, password:string) => {
    setLoading(true);
    try{
      const res = await api.login(email,password);
      await AsyncStorage.setItem('token', res.token);
      await AsyncStorage.setItem('user', JSON.stringify(res.user));
      return res;
    } finally { setLoading(false); }
  };
  const logout = async () => {
    await AsyncStorage.clear();
  };
  return { login, logout, loading };
}
