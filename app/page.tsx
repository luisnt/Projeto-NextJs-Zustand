import { redirect } from 'next/navigation';

export default async function HomePage() {
  redirect('/login');
  return (<div>Conteúdo da Página Inicial, redirecionado para page Login</div>)
}