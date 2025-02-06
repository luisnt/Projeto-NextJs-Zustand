"use client";
import useData from '@/core/store';
import { useState } from 'react';
import { TUserData } from '@/core/types/UserData';
import useOnNoAuth from '@/core/hooks/useOnNoAuth';
import { Button } from '@/core/components/ui/Button';
import { Title } from '../Title';

export function Display() {
  const { data, selectedUser, setSelectedUser } = useData();
  useOnNoAuth('/login');
  return (<>
    {data && (<div>
      <div>
        <div className="mx-2 my-4">
          <div className="mx-2 my-4"><Title>Selecione o local:</Title></div>
          {data.map((user) => (
            <Button
              key={user?.ID}
              onClick={() => setSelectedUser(user)}>
              {user?.Fantasia}
            </Button>
          ))}
        </div>
      </div>
      {selectedUser && (<div>
        <Title>Dados do Store</Title>
        <h2>Usuário Selecionado:</h2>
        {Object.entries(selectedUser).map(([key, value]) => (
          <p key={key}>
            <span className="text-gray-700 font-bold">{key.charAt(0).toUpperCase() + key.slice(1)}: </span>{value}
          </p>
        ))}
      </div>)}
    </div >)
    }
  </>)
}