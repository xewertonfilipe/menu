# Bytebank Menu MFE

Microfrontend responsavel pelo menu lateral de navegacao do shell do Bytebank.

## Visao geral

- Package: `@bytebank/menu`
- Porta local (webpack): `9003`
- Porta container (docker): `8082`
- Artefato servido: `bytebank-menu.js`

## Pre-requisitos

1. Node.js 18+
2. npm 9+
3. Docker Desktop (opcional, para execucao via container)

## Instalacao

```bash
npm install
```

## Executando em desenvolvimento (npm)

1. Inicie o servidor de desenvolvimento:

```bash
npm start
```

2. O MFE sera servido em `http://localhost:9003/bytebank-menu.js`.

3. Para rodar isolado (sem orchestrator), use:

```bash
npm run start:standalone
```

## Executando em desenvolvimento (Docker)

1. Suba o container:

```bash
npm run start:docker
```

2. O MFE sera servido em `http://localhost:8082/bytebank-menu.js`.

Para parar os containers:

```bash
npm run stop:docker
```

## Integracao com o orchestrator

- Modo local do orchestrator (`isLocal`): consome `http://localhost:9003/bytebank-menu.js`

## Responsividade

- Layout do menu ajustado para telas pequenas, tablets e desktop.
- Breakpoints validados: 320px, 768px e 1024px.
- Ajustes principais: container com espacamento responsivo, itens com tipografia escalavel e links com area clicavel mais confortavel.

## Scripts uteis

- `npm start`: sobe webpack dev server na porta 9003
- `npm run start:standalone`: executa standalone
- `npm run start:docker`: sobe container Docker com build
- `npm run stop:docker`: derruba containers do Docker Compose
- `npm run build`: build de producao
- `npm test`: executa testes
- `npm run coverage`: executa testes com cobertura
- `npm run lint`: lint
- `npm run type-check`: verificacao de tipos
- `npm run format`: formatacao com Prettier

## Testes

```bash
npm test
```

Para cobertura:

```bash
npm run coverage
```

## Troubleshooting

1. Se a porta `9003` estiver ocupada, finalize o processo em conflito e rode `npm start` novamente.
2. Se os links do menu nao aparecerem no shell, valide se o import map aponta para o host/porta corretos.
3. Se houver CSS desatualizado, limpe cache e recarregue (Ctrl+F5).
