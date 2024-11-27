---
sidebar_position: 2
title: Comandos Basicos no VIM
tags:
- vim
---

## Basics Comands in VIM

- ``:e``  = navegando entre aquivos
- ``:q``  = saindo do NVIM
- ``:w``  = salvar arquivo
- ``:wq`` = salvar arquivo e sair
- ``:bd`` = sair do arquivo sem sair do editor

## Movimentação Básica
- ``h, j, k, l`` = Movem o cursor para a esquerda, baixo, cima e direita, respectivamente.
- ``w, W``       = Move o cursor para o início da próxima palavra. W ignora pontuação.
- ``b, B``       = Move o cursor para o início da palavra anterior. B ignora pontuação.
- ``e, E``       = Move o cursor para o final da próxima palavra. E ignora pontuação.

## Movimentação por Linhas e Colunas
- ``0``  = Move o cursor para o início da linha atual.
- ``^``  = Move o cursor para o primeiro caractere não em branco na linha.
- ``$``  = Move o cursor para o final da linha.
- ``g_`` = Move o cursor para o último caractere não em branco na linha.

## Movimentação por Parágrafos e Sentenças
- ``{``    = Move o cursor para o início do parágrafo anterior.
- ``}``    = Move o cursor para o início do próximo parágrafo.
- ``(, )`` = Move o cursor para o início da sentença anterior/próxima.

## Movimentação por Telas
H: Move o cursor para o início da tela (topo).
M: Move o cursor para o meio da tela.
L: Move o cursor para o final da tela (rodapé).
Ctrl-u: Rola a tela para cima em meia página.
Ctrl-d: Rola a tela para baixo em meia página.
Ctrl-b: Rola a tela para cima em uma página inteira.
Ctrl-f: Rola a tela para baixo em uma página inteira.
zz: Centraliza a linha atual na tela.

## Movimentação por Arquivo
gg: Move o cursor para o início do arquivo.
G: Move o cursor para o final do arquivo.
: Move o cursor para a linha n.

<!-- 
## Movimentação por Procuras e Padrões
/: Inicia uma pesquisa para frente.
?: Inicia uma pesquisa para trás.
n: Move para a próxima ocorrência da pesquisa.
N: Move para a ocorrência anterior da pesquisa.
f<char>: Move o cursor para o próximo caractere <char> na linha atual.
t<char>: Move o cursor para antes do próximo caractere <char> na linha atual.
F<char>: Move o cursor para o caractere <char> anterior na linha atual.
T<char>: Move o cursor para depois do caractere <char> anterior na linha atual.
;: Repete o último comando f, t, F ou T.
,: Repete o último comando f, t, F ou T na direção oposta. 
-->

## Movimentação por Parênteses, Colchetes e Chaves
%: Move o cursor para o par correspondente de parênteses, colchetes ou chaves.

## Movimentação por Blocos de Código
[[: Move o cursor para o início do bloco de código anterior.
]]: Move o cursor para o início do próximo bloco de código.
[]: Move o cursor para o final do bloco de código anterior.
][: Move o cursor para o final do próximo bloco de código.

## Movimentação por Funções
- ``[m`` = Move o cursor para o início da função anterior.
- ``]m`` = Move o cursor para o início da próxima função.
- ``[M`` = Move o cursor para o final da função anterior.
- ``]M`` = Move o cursor para o final da próxima função.

## Desfazer alterações
Pressione u (lowercase) para desfazer a última alteração.
Se quiser desfazer múltiplas alterações, continue pressionando u.
Refazer alterações
Pressione Ctrl + r para refazer uma alteração desfeita.
Isso reaplica as alterações que você desfez com u.
Ver o histórico de alterações
Você pode visualizar o histórico de alterações no Vim com o comando:


:undolist
Isso exibe uma lista de ações que podem ser desfeitas ou refeitas, com identificadores específicos.

Ir para um ponto específico no histórico
Você pode usar os comandos:

:undo N - Para voltar ao estado de um ponto específico no histórico (onde N é o número da mudança, como mostrado no :undolist).
:redo N - Para refazer mudanças específicas no histórico.


## Gerenciado as dependencias
- ``:PlugInstall`` = Instalando as dependencias definidas no init.vim
- ``:PlugUpdate`` = Atualizando dependencias definidas no init.vim
