# 🚀 Projeto Next.js com Zustand

Bem-vindo ao **Projeto Next.js com Zustand**! Este é um projeto incrível que utiliza o poder do Next.js para renderização do lado do servidor e o Zustand para gerenciamento de estado global. Vamos embarcar nessa jornada juntos! 🌟

## 📚 Sobre o Projeto

Este projeto é uma aplicação web moderna que demonstra como integrar o Next.js com o Zustand para criar uma experiência de usuário fluida e eficiente. Com este projeto, você aprenderá a:

- ⚙️ Configurar um projeto Next.js
- 🗂️ Utilizar o Zustand para gerenciamento de estado
- 🧩 Criar componentes reutilizáveis e estilizados

## 🛠️ Tecnologias Utilizadas

- **Next.js**: O framework React para produção. [Documentação](https://nextjs.org/docs)
  - 🌐 Renderização do lado do servidor (SSR)
  - 📄 Geração de sites estáticos (SSG)
  - ✨ Suporte a TypeScript
  - 🗺️ Roteamento baseado em arquivos
- **Zustand**: Um pequeno, rápido e escalável gerenciador de estado para React. [Documentação](https://zustand-demo.pmnd.rs/docs)
  - 🧩 API simples e minimalista
  - 🔌 Suporte a middlewares
  - 💾 Persistência de estado
- **Tailwind CSS**: Um framework CSS utilitário para estilização rápida e responsiva. [Documentação](https://tailwindcss.com/docs)
  - 🎨 Classes utilitárias para estilização
  - 🛠️ Configuração altamente customizável
  - 🌗 Suporte a temas e modos escuros

## 🚀 Começando

Siga estas etapas para configurar o projeto localmente:

1. 📥 Clone o repositório:
   ```sh
   git clone https://github.com/luis-portfolio/Projeto-NextJs-Zustand.git
   ```
2. 📂 Navegue até o diretório do projeto:
   ```sh
   cd Projeto-NextJs-Zustand
   ```
3. 📦 Instale as dependências:
   ```sh
   npm install
   ```
4. ▶️ Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

> **Nota:** Este projeto utiliza Next.js com TypeScript para garantir uma melhor experiência de desenvolvimento e maior robustez no código.

## ⚙️ Configurar um projeto Next.js

Para configurar um projeto Next.js, siga os passos abaixo:

1. Crie um novo projeto Next.js com suporte a TypeScript:
   ```sh
   npx create-next-app@latest --typescript
   ```
2. Navegue até o diretório do projeto:
   ```sh
   cd nome-do-projeto
   ```
3. Inicie o servidor de desenvolvimento:
   ```sh
   npm run dev
   ```

## 🗂️ Utilizar o Zustand para gerenciamento de estado

Para utilizar o Zustand no seu projeto, siga os passos abaixo:

1. Instale o Zustand:
   ```sh
   npm install zustand
   ```
2. Crie um store para gerenciar o estado:
   ```typescript
   import create from 'zustand';

   interface State {
     count: number;
     increment: () => void;
     decrement: () => void;
   }

   const useStore = create<State>(set => ({
     count: 0,
     increment: () => set(state => ({ count: state.count + 1 })),
     decrement: () => set(state => ({ count: state.count - 1 }))
   }));

   export default useStore;
   ```
3. Utilize o store nos seus componentes:
   ```typescript
   import useStore from '../path/to/store';

   function Counter() {
     const { count, increment, decrement } = useStore();
     return (
       <div>
         <h1>{count}</h1>
         <button onClick={increment}>Increment</button>
         <button onClick={decrement}>Decrement</button>
       </div>
     );
   }
   ```

## 🧩 Criar componentes reutilizáveis e estilizados

Para criar componentes reutilizáveis e estilizados, siga os passos abaixo:

1. Crie um componente reutilizável:
   ```typescript
   interface ButtonProps {
     onClick: () => void;
     children: React.ReactNode;
   }

   function Button({ onClick, children }: ButtonProps) {
     return (
       <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded">
         {children}
       </button>
     );
   }

   export default Button;
   ```
2. Utilize o componente nos seus outros componentes:
   ```typescript
   import Button from '../path/to/Button';

   function App() {
     return (
       <div>
         <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
       </div>
     );
   }
   ```

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

## 👤 Autor

Este projeto foi desenvolvido por **Luis Caldas**, Senior Software Engineer. 

<div style="display: flex; flex-wrap: wrap; gap: 10px;">
  <a href="https://app.qbits.pl/LuisCaldas" style="text-decoration: none;">
    <img src="https://img.icons8.com/color/48/000000/contact-card.png" alt="Contato" style="vertical-align: middle;">
    <span style="vertical-align: middle;">Contato</span>
  </a>
  <a href="https://www.linkedin.com/in/luisnt" style="text-decoration: none;">
    <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" style="vertical-align: middle;">
    <span style="vertical-align: middle;">LinkedIn</span>
  </a>
  <a href="https://github.com/luis-portfolio/Index" style="text-decoration: none;">
    <img src="https://img.icons8.com/color/48/000000/github.png" alt="GitHub" style="vertical-align: middle;">
    <span style="vertical-align: middle;">GitHub</span>
  </a>
  <a href="https://g.dev/luisnt" style="text-decoration: none;">
    <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Dev" style="vertical-align: middle;">
    <span style="vertical-align: middle;">Google Dev</span>
  </a>
  <a href="https://www.grepper.com/profile/luisnt" style="text-decoration: none;">
    <img src="https://seeklogo.com/images/G/grepper-logo-C48D8B98F3-seeklogo.com.png" width="48"  alt="Greeper" style="vertical-align: middle;">
    <span style="vertical-align: middle;">Greeper</span>
  </a>
  <a href="https://wa.me/5598981112233" style="text-decoration: none;">
    <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="WhatsApp" style="vertical-align: middle;">
    <span style="vertical-align: middle;">WhatsApp</span>
  </a>
  <a href="https://t.me/luisnt" style="text-decoration: none;">
    <img src="https://img.icons8.com/color/48/000000/telegram-app.png" alt="Telegram" style="vertical-align: middle;">
    <span style="vertical-align: middle;">Telegram</span>
  </a>
</div>