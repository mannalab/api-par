# BêraPAR *API* #

> Implementação da *API* do Aplicativo BêraPAr em NodeJS

## Desenvolvimento ##

Para o ambiente de desenvolvimento foram utilizados:

- Node v16.13.0
- Yarn v1.22.17

**Dependências**
- Para instalar as dependências, execute o comando ```yarn install```

**Execução**
- Para executar o app utilize o comando ```node .```

**Variáveis**

São necessárias duas etapas para que o projeto funcione corretamente:

- Criar um banco de dados a partir do [dump](./dump/Dump20220325.sql)
- Informar [variáveis de ambiente](./server/datasources.json)
    - DB_HOST: IP ou URL de onde o banco de dados está hospedado
    - DB_NAME: nome da base de dados
    - DB_USER: nome do usuário para acesso à base de dados
    - DB_PASSWORD: senha de acesso à base de dados
    - SENDINBLUE_USER: nome de usuário na Sendinblue para envio de e-mails
    - SENDINBLUE_PASSWORD: senha da Sendinblue para envio de e-mails 

### Contribuidores ###
- Luany Lessa Campos
- Juliano Cézar Chagas Tavares
  
## Copyright ##
Copyright © 2022 BêraPAR All Rights Reserved.

