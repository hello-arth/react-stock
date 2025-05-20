# 📦 React Stock

Aplicação web construída com React + Vite para gerenciamento de estoque. Possui rotas dinâmicas, formulários, componentes reutilizáveis, controle de estado via Context API e estrutura modularizada.

## 🧰 Tecnologias utilizadas

- React
- Vite
- React Router
- Context API
- ESLint (Flat config)
- Bootstrap
- CSS global (para estilos gerais)
- CSS Modules (para estilos modularizados em componentes)

## 📁 Estrutura do Projeto

- `src/views`: Páginas principais do sistema (Dashboard, Itens, Novo Item, Atualizar Item, etc).
- `src/components`: Componentes reutilizáveis (como Header, Tabela, Formulário de Itens).
- `src/layouts`: Layouts para páginas com e sem navegação.
- `src/contexts`: Contexto do estoque para gerenciar estado global.
- `src/hooks`: Hooks personalizados para lógica de manipulação de itens (`useStock`, `useStockCollection`).
- `src/entities`: Entidade `StockItem`, representando a estrutura de um item.
- `src/error-boundaries`: Componente de boundary de erro para isolar falhas.
- `src/loaders`: Funções auxiliares para carregar dados.
- `src/router.jsx`: Definição das rotas da aplicação com React Router.
- `index.html` / `main.jsx`: Arquivo de entrada e bootstrap da aplicação.

## 🚀 Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/hello-arth/react-stock.git
   cd react-stock
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## 🔄 Funcionalidades

- Cadastro de novos itens no estoque
- Atualização e remoção de itens existentes
- Visualização de lista com totais
- Persistência de dados no `localStorage`
- Navegação por rotas (SPA)
- Gerenciamento de estado com Context API e hooks personalizados
- Feedback visual para estados vazios
- Tratamento de falhas com boundary de erro

## 🧪 Scripts

- `npm run dev`: inicia o servidor local
- `npm run build`: gera build de produção
- `npm run lint`: executa ESLint com a configuração Flat

## 📄 Licença

MIT © [hello-arth](https://github.com/hello-arth)