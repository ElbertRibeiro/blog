---
slug: configure-ssh-key
title: How to configure ssh key on github?
authors: [ elbert ]
tags: [ github, gitlab, code-editor, ssh ]
---

## Verificar Chaves Geradas

Para listar as existentes, executar o comando: `ls -al ~/.ssh`

## Gerar Chave SSH

Abra o **git bash** ou seu terminal linux e execute o seguinte comando:

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

> OBS¹: no local onde está "your_email@example.com" informe seu email

## Copiar a chave Gerada

Para copiar a chave gerada para area de transferencia, use o comando:

```shell
cat ~/.ssh/id_ed25519.pub. 
```

## Adicionar chave no Github

Abra o Github e vá no ícone de perfil > Settings, no canto superior direito.
Na barra lateral de configurações do usuário, clique em "SSH and GPG keys".
Clique no botão "New SSH key"
No campo "Título", adicione um rótulo descritivo para a nova chave. Por exemplo, se estiver usando seu computador
pessoal, você pode chamar essa chave de "Computador pessoal".
Cole a chave pública que está na área de transferência no campo "Chave".
Clique em "Add SSH key" e pronto!

## Testar Conexão

Execute o comando a seguir no terminal:

```shell
ssh -T git@github.com
```

> OBS²: Após executar o comando anterior, digite "yes" no terminal interativo do git bash
