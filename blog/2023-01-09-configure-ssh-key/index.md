---
slug: configure-ssh-key
title: How to configure ssh key on github?
authors: [ elbert ]
tags: [ github, gitlab, code-editor, ssh ]
---


O SSH é um protocolo de rede que permite que a conexão com determinados servidores por meio de uma comunicação
criptografada, trazendo mais segurança para as transações de dados.

O Github permite que você crie chaves SSH para que você gerencie tudo de maneira remota, com segurança e sem precisar
fornecer seu nome de usuário e token de acesso pessoal toda vez que quiser acessar.

O site do Github possui a documentação para essa configuração, que você pode conferir aqui.

Entretanto, com base nessa documentação e outras fontes de pesquisa, escrevi um tutorial passo-a-passo e adicionei
algumas explicações para facilitar o entendimento.

Isso me ajudou a compreender melhor o que é cada coisa, ao invés de só copiar e colar comandos no terminal sem saber o
que eles significam. E quem sabe esse resumo pode ser útil pra você também?
Terminal

Para executar os comandos deste tutorial, você já deve ter o git instalado na máquina e utilizar o terminal "Git Bash".
É possível também executar no "WSL Bash" caso você esteja utilizando a distro do Linux no Windows.

Os exemplos contidos nas imagens a seguir são do WSL utilizado no Windows Terminal, com o tema oh-my-zsh. Se quiser
saber como instalar, recomendo esse post que está muito bem explicado!
Chaves já existentes

O primeiro passo é executar um comando para saber se já existem chaves ssh na máquina. Por padrão o nome delas devem ser
um desses: "id_rsa.pub", "id_ecdsa.pub" ou "id_ed25519.pub".

    Para listar as existentes, executar o comando: ls -al ~/.ssh

Alt Text

Lista das chaves ed25519 já existentes.
Gerar uma nova chave

Caso não exista nenhum par de chaves existentes, precisamos gerar um novo par de chaves. Falamos "par de chaves" porque
assim que gerarmos uma chave, serão criados dois arquivos, um público (.pub) e um privado. O conteúdo do arquivo público
é o que futuramente colocaremos no github para fazer a conexão.

    Para criar uma chave ed25519, executar: ssh-keygen -t ed25519 -C "your_email@example.com"
    Para criar uma chave rsa, executar: ssh-keygen -t rsa -b 4096 -C "your_email@example.com"

Alt Text

Criação de um novo par de chaves rsa.
Adicionar chave privada no ssh-agent

O ssh-agent é um gerenciador de chaves ssh. Para que a conexão funcione, devemos adicionar a chave privada nesse
gerenciador. Para isso vamos executar os códigos:

    Rodar o ssh-agent: eval $(ssh-agent -s)
    Incluir a chave privada: ssh-add ~/.ssh/id_ed25519

Alt Text
Copiar chave pública

Agora que já adicionamos a chave privada no ssh-agent, vamos copiar a chave pública que faz par com ela, para incluirmos
no nosso github. No mesmo terminal executar:

    No Windows: clip < ~/.ssh/id_ed25519.pub. (Automaticamente o conteúdo da sua chave pública será copiado para a área de transferência.)
    No Linux: cat ~/.ssh/id_ed25519.pub. (O conteúdo da chave pública aparecerá no terminal para ser selecionado e copiado.)
    MacOS: pbcopy < ~/.ssh/id_ed25519.pub

Adicionar chave no Github

    Abra o Github e vá no ícone de perfil > Settings, no canto superior direito.
    Na barra lateral de configurações do usuário, clique em "SSH and GPG keys".
    Clique no botão "New SSH key"
    No campo "Título", adicione um rótulo descritivo para a nova chave. Por exemplo, se estiver usando seu computador pessoal, você pode chamar essa chave de "Computador pessoal".
    Cole a chave pública que está na área de transferência no campo "Chave".
    Clique em "Add SSH key" e pronto!

Testando a conexão SSH

    Executar o seguinte comando: ssh -T git@github.com
    Aguardar as mensagens. Digitar "yes" para continuar.
    Verifique se a mensagem resultante contém seu nome de usuário e o sucesso da sua autenticação.

Alt Text

ref: https://dev.to/dxwebster/como-conectar-ao-github-com-chaves-ssh-1i41