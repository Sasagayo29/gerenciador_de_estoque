# 📦 Gerenciador de Estoque (Angular + PrimeNG)

<p align="center">
  <img alt="Angular" src="https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white">
  <img alt="PrimeNG" src="https://img.shields.io/badge/PrimeNG-2196F3?style=for-the-badge&logo=primeng&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</p>

---

## 📖 Sobre o Projeto

Um painel de controle simples para gerenciamento de estoque (CRUD) construído com a arquitetura Standalone do Angular (v17+) e os componentes ricos do PrimeNG (v20+), focado em uma interface limpa e responsiva.

---

## 📸 Visualização

<p align="center">
  <img alt="Demo do Gerenciador de Estoque" src="https://github.com/user-attachments/assets/671fd988-5839-413a-aae0-438b1e631cf6" width="90%">
</p>

---

## ✨ Funcionalidades Principais

Este projeto implementa todas as funcionalidades básicas de um sistema CRUD:

* ✅ **Listar Produtos:** Visualização paginada e ordenável de todos os produtos.
* ✅ **Buscar Produtos:** Filtro global instantâneo para buscar por Nome ou SKU.
* ✅ **Criar Produto:** Adiciona um novo produto ao estoque através de um formulário em modal.
* ✅ **Editar Produto:** Atualiza as informações de um produto existente no mesmo modal.
* ✅ **Excluir Produto:** Remove um produto da lista com um modal de confirmação.
* ✅ **Notificações (Toasts):** Feedback visual para o usuário após cada ação.

---

## 🛠️ Tecnologias Utilizadas

* **[Angular (v17+)](https://angular.io/):** Framework principal, utilizando a nova arquitetura de **Standalone Components**.
* **[PrimeNG (v20+)](https://primeng.org/):** Biblioteca de componentes UI. Principais componentes usados:
    * `Table` (Tabela de dados)
    * `Dialog` (Modais de formulário)
    * `ConfirmDialog` (Modal de confirmação)
    * `Toast` (Notificações)
    * `IconField` / `InputIcon` (Barra de busca estilizada)
    * `Button`, `InputText`, `InputNumber`
* **[PrimeIcons](https://primeflex.org/primeicons):** Biblioteca de ícones.
* **[SCSS](https://sass-lang.com/):** Para a estilização personalizada do tema escuro e layout.

---

## 🚀 Como Executar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SEU_USUARIO/gerenciador_de_estoque.git](https://github.com/SEU_USUARIO/gerenciador_de_estoque.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd gerenciador_de_estoque
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Execute o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```

5.  **Abra no navegador:**
    Acesse `http://localhost:4200` e o aplicativo estará funcionando.
