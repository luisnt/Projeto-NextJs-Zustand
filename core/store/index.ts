import { create } from 'zustand';
import { TUserData } from '@/core/types/UserData';
import { redirect } from 'next/navigation';
import { response } from './mocha';
import type { TData } from '@/core/interfaces/Data';
import type { TAuthData } from '@/core/types/AuthData';

const useData = create<TData>((set) => ({
  data: null,
  setData: (data) => set({ data }),
  selectedUser: null,
  setSelectedUser: (user: TUserData | null) => set({ selectedUser: user || null }),
  authenticate: async ({ email, password }: TAuthData) => {
    // a lógica da autenticação vai aqui
    // const response = await axios.post('https://api.proinddy.com/auth', { email, password })
    set({ data: response.data });
    redirect("/private/dashboard")
  },
  logoff: () => {
    set({ data: null, selectedUser: null })
    redirect("/login")
  }
}))

export default useData;