<h3 align="center">
  Projeto criado com o intuito de mostrar meus conhecimentos ao decorrer da minha carreira.
</h3>


https://github.com/JuanCarllos13/BarberPro/assets/86435195/98213a68-e3e3-41e1-87b5-f8a2e06edbe7




## 📝 Sobre o projeto

O projeto é um sistema completo para gerenciamento de uma barbearia, permitindo que o dono da loja crie uma conta para sua empresa. A aplicação permite que o dono cadastre até 3 modelos de corte de cabelo, pois quando ele cria sua conta, automaticamente recebe um plano grátis. No plano gratuito, ele pode agendar horários para clientes, escolhendo um dos 3 tipos de corte cadastrados.

A tela inicial exibe todos os cortes e seus respectivos clientes agendados. Ao clicar em um corte, um modal é aberto, oferecendo a opção de finalizar o corte caso já tenha sido realizado.

Para que o usuário altere seu plano, ele deve acessar o botão de perfil, onde encontrará a opção "Mudar Plano". Ao selecionar essa opção, ele será redirecionado para a tela de checkout do Stripe, onde poderá assinar um plano mensal de R$10,00.

No plano Premium, o usuário poderá cadastrar quantos modelos de corte desejar, além de ter a opção de habilitar e desabilitar cortes conforme sua preferência.

<hr>

## 🚀 Como executar o projeto.

Este projeto é divido em uma parte:
1
💡O Backend deve estar rodando em sua máquina para que o frontend seja renderizado.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

<br>

#### 🎲 Rodando a aplicação (Frontend)

```bash
# Clone este repositório
$ https://github.com/JuanCarllos13/BarberPro
# Acesse a pasta do projeto no terminal/cmd
$ cd + sua pasta + git clone https://github.com/JuanCarllos13/BarberPro
# Instale as dependências com:
$ yarn
# Rode a aplicação em modo de desenvolvimento:
$  yarn dev
# O servidor inciará na porta:3000 - acesse <   localHost:3000

# Para realizar a compra, utilizar o número de cartão
$ 4242 4242 4242 4242
# Uma data posterior a atual e qualquer número de CVV.

# Lembrando que para funcionar o back-end dessa aplicação precisa tá rodando também.
```

---

## 📚 Funcionalidades

- Cadastrar modelo de corte de cabelo
- Registar corte
- Finalizar corte do cliente
- Desabilitar e habilitar corte caso seja premium
- Realizar o checkout via stripe

<hr>

## 👩🏻‍💻 Tecnologias

- ReactJs
- Next.js
- Chakra-ui
- Typescript
- Stripe

<hr>

## 👨‍💻 Autor<br>

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/JuanCarllos13">
        <img src="https://github.com/JuanCarllos13.png" width="150px;" height="150px" alt="Foto do Juan no GitHub"/><br>
        <sub>
          <b>JUAN CARLOS</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
</table>
<hr>
