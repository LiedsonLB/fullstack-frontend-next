# Desafio Fullstack Next - NeoShortener encurtador de URLs (Francisco Liédson)

![Logo NeoShortener](/public/logo.png)

## Sobre o Projeto

Este é o frontend do NeoShortener, um encurtador de URLs moderno e intuitivo, desenvolvido com Next.js 14, TypeScript e TailwindCSS.

A aplicação se comunica com a API desenvolvida em NestJS, permitindo que o usuário insira uma URL, gere um link curto e acesse informações como o número de cliques e data de expiração — tudo de forma simples e rápida.

## Tecnologias Utilizadas

<div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="45"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="45"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="45"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" width="45"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/axios/axios-plain.svg" width="45"/> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" width="45"/> </div>

## Objetivos do Desafio

- Criar interface responsiva para geração de URLs curtas
- Realizar chamadas para API NestJS
- Exibir o link encurtado e dados adicionais
- Possibilitar o redirecionamento via clique
- Usar boas práticas de UI/UX e componentização

## Funcionalidades

1. Formulário para criação de URL encurtada.
2. Exibição do link curto gerado.
3. Validação e feedback de erro.
4. Loading states e UX aprimorada.
5. Consumo da API NestJS.
6. Campo de expiração opcional da URL.

## Configuração do Projeto

```javascript
src/
 ├── app/
 │    ├── page.tsx
 │    └── layout.tsx
 │    └── globals.css
 ├── components/
 │    ├── UrlForm.tsx
 │    └── UrlList.tsx
 └── lib/
      └── api.ts
```

### Passos para Executar Localmente

####  Clone o repositório:
```bash
git clone https://github.com/LiedsonLB/fullstack-frontend-next.git
```

#### Instalando dependências:
```bash
cd fullstack-frontend-next
npm install
```

#### Configure o projeto da API Nest de ambiente:
Rode primeiro a API NestJS seguindo as instruções no repositório correspondente e garanta que ela esteja rodando na porta correta:
```
localhost:3000 (por padrão)
```
#### Inicie a aplicação:
```bash
npm run dev
```
A aplicação estará disponível em `http://localhost:3001` (já que o Nest está rodando na 3000).
  
## Imagens do Projeto

## Tela de Criação de URL
![Criar URL](/snapshots/neoshortener.png)


## Deployment
O projeto está sendo preparado para deploy em serviços como Render.
Status atual: Em desenvolvimento (29/11/2025)

## Releases

- Release v1.0 ✅