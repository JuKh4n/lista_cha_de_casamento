# Lista de Chá de Casamento

## Sobre o Projeto
Este projeto é uma aplicação web para gerenciar uma **Lista de Chá de Casamento**. Desenvolvida em **JavaScript** e integrada ao **Firebase**, a aplicação permite que os convidados escolham um presente disponível na lista, preencham seu nome, e automaticamente o item fica indisponível para outros usuários. Apenas a pessoa que reservou o item pode liberá-lo novamente, utilizando o mesmo nome registrado.

## Funcionalidades
- Visualização em tempo real dos itens disponíveis e indisponíveis;
- Reserva de um item ao inserir o nome no campo correspondente;
- Bloqueio automático para outros usuários após a reserva;
- Liberação do item apenas pelo usuário que o reservou, digitando o mesmo nome.

## Tecnologias Utilizadas
- **JavaScript** - para manipulação dos dados e interação com a interface;
- **Firebase Realtime Database** - para armazenamento e sincronização dos itens em tempo real;
- **HTML & CSS** - para estruturação e estilização da página.

## Estrutura do Projeto
```
├── index.html
├── arquivo
│   └── main.js
├── firebase
│   ├── firebase-config.js
│   └── items
│       └── itens.json
└── style.css
```

## Próximos Passos
- [ ] Melhorias no layout e estilização da interface;
- [ ] Adicionar notificações de confirmação ao reservar e liberar um item;
- [ ] Implementar a opção de filtro para facilitar a busca pelos itens disponíveis.

## Como Executar o Projeto
1. Clone o repositório:
   ```bash
   git clone https://github.com/JuKh4n/lista_cha_de_casamento.git
   ```
2. Abra o arquivo `index.html` em seu navegador.

3. Para funcionar corretamente, configure o Firebase conforme o arquivo `firebase-config.js`.

4. Os itens serão carregados em tempo real a partir do Firebase.

---

Desenvolvido por Juliano Souza.
