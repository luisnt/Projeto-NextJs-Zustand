'use client'

import { Button } from "@/core/components/ui/Button";
import { Title } from "@/core/components/ui/Title";
import useData from "@/core/store";

export default function Login() {
  const { authenticate } = useData()

  const handleLogin = async () => {
    await authenticate({ email: "admin", password: "admin" });
  };
  return (<>
    <Title>Formulário de Login</Title>
    <Button onClick={handleLogin}>Entrar</Button>
    <Button href="https://github.com/luis-portfolio/Projeto-NextJs-Zustand" target="_blank">Código Fonte</Button>
  </>
  )
}