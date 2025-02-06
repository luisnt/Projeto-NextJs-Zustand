import type { TAuthData } from '@/core/types/AuthData';
import type { TUserData } from '@/core/types/UserData';

export interface TData {
  data: TUserData[] | null;
  setData: (data: TUserData[] | null) => void;
  selectedUser: TUserData | null;
  setSelectedUser: (user: TUserData | null) => void;
  authenticate: ({ email, password }: TAuthData) => Promise<void>;
  logoff: () => void;
}   
