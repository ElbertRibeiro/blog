---
slug: docker-with-terraform
title: Using Terraform with Docker
authors: [ elbert ]
tags: [ docker, terraform, IaC ]
---

## O que é Terraform?

Segundo o site da [IBM](https://www.ibm.com/br-pt/topics/terraform), o **Terraform** é uma ferramenta de IaC (
Infraestrutura como Código), que permite criação, alteração e versionamento da infraestrutura com segurança e
eficiência.

## Usando Terraform com Docker

Este artigo tem como objetivo abrir os horizontes do leitor, para que o mesmo perceba a grande utilidade que uma
ferramenta como o **Terraform** tem no dia a dia de um desenvolvedor e/ou profissional devOps.

Neste artigo, não levantarei problemas complexos que a ferramenta pode resolver, meu objetivo aqui é prover para o
leitor um primeiro contato com a solução, melhor uso e boas praticas serão tópicos abordados em artigos futuros.

## Detalhes técnicos

O código fonte gerado neste artigo foi feito utilizando uma maáquina com `Windowns 11 Amd64` e a versão do **Terraform**
instalada é a `v1.9.2`.

## Como funciona o Terraform?

1. Definição da Infraestrutura:
   Você escreve arquivos de configuração usando a linguagem de configuração do Terraform (HCL), ou JSON. Esses arquivos
   definem os recursos de infraestrutura que você deseja criar, como máquinas virtuais, redes, e bancos de dados, e suas
   propriedades.

2. Inicialização:
   Antes de aplicar as configurações, você executa ``terraform init``. Este comando inicializa o diretório de trabalho
   do Terraform, baixa os provedores necessários e prepara o ambiente.

3. Planejamento:
   Com o comando ``terraform plan``, o Terraform analisa as configurações e gera um plano de execução. O plano mostra as
   mudanças que serão feitas na infraestrutura para que você possa revisar antes de aplicá-las.

4. Aplicação:
   Após revisar o plano, você executa ``terraform apply``. O Terraform aplica as mudanças conforme o plano gerado,
   criando, modificando ou excluindo recursos conforme necessário.

5. Gerenciamento:
   Terraform mantém o estado da sua infraestrutura em um arquivo de estado (state file). Esse arquivo é usado para
   rastrear as mudanças entre a configuração e a infraestrutura real, permitindo que o Terraform faça atualizações
   incrementais e mantenha a consistência.

6. Destruição:
   Quando você precisa remover a infraestrutura, pode usar o comando ``terraform destroy``. Isso elimina todos os
   recursos definidos nas suas configurações.

## Recursos do Terraform

Abaixo irei listar alguns dos recursos do **Terraform**:

1. `required_providers`:
    * Objetivo: Especifica quais provedores são necessários para sua configuração Terraform e quais versões desses
      provedores devem ser usadas.
    * Localização: Geralmente encontrado dentro do bloco terraform em um arquivo .tf.
    * Componentes:
        * Source: Define a origem do provedor (ex.: "hashicorp/aws").
        * Version: Define a versão desejada do provedor (ex.: "~> 3.0").
    * Exemplo:
      ```hcl
      terraform {
        required_providers {
          aws = {
            source  = "hashicorp/aws"
            version = "~> 3.0"
          }
        }
      }
      ```

2. ``provider``:
    * Objetivo: Configura e autentica o provedor de infraestrutura que o Terraform usará para criar e gerenciar
      recursos. O provedor é responsável por interagir com APIs externas.
    * Localização: Definido em um bloco provider em um arquivo .tf.
    * Componentes:
        * provider: Nome do provedor (ex.: "aws").
        * region: Configuração específica do provedor (ex.: "us-west-1" para AWS).
    * Exemplo:
      ````hcl
      provider "aws" {
      region = "us-west-1"
      }
      ````

3. `resource`
    * Objetivo: Define um recurso específico que você deseja criar, modificar ou excluir em sua infraestrutura. Os
      recursos são os elementos principais que você gerencia com o Terraform.
    * Localização: Definido em um bloco resource em um arquivo .tf.
    * Componentes:
        * resource: Tipo de recurso e nome (ex.: "aws_instance" "example").
        * ami: Propriedade específica do recurso (ex.: ID da imagem AMI para AWS).
        * instance_type: Outra propriedade específica (ex.: tipo da instância EC2).
    * Exemplo:
      ````hcl
      resource "aws_instance" "example" {
      ami           = "ami-0c55b159cbfafe1f0"
      instance_type = "t2.micro"
      }
      ````

### Resumo das Relações

Os ``required_providers`` define quais provedores e suas versões são necessários para a configuração, garantindo que
todos os componentes necessários estejam disponíveis e na versão correta.
O ``provider`` configura como o Terraform se comunica com um provedor específico (como AWS, Azure, Google Cloud) e
define parâmetros essenciais para a autenticação e configuração.
Já o ``resource`` é o bloco onde você define os detalhes específicos dos recursos que você deseja criar, gerenciar ou
excluir na sua infraestrutura.

## Usando Terraform com Docker

Agora vamos falar sobre o tópico principal, o que motivou a criação deste artigo.

Uma vez que o *Terraform* é uma ferramenta poderosa para IaC, é possivel criar infraestruturas complexas e simples (como
é o caso do exemplo a seguir).

Imagine que você precise manter um código fonte de uma infraestrutura, claro que neste caso você poderia optar por
utilizar o docker-compose e utilizar o git para tal, porém sabemos que para casos mais complexos, pode ser que não seja
o suficente.

### Provider para Docker

Os provider's são recursos importantes no momento de criar uma infraestrutura,
no [site do Terraform](https://registry.terraform.io/browse/providers) podem ser encontrados vários providers para
provedores de infraestrutura mais populares.

Para criar uma infra Docker, iremos usar como exemplo o provider ``kreuzwerker/docker``, como mostra o exemplo abaixo:

````terraform
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.15"
    }
  }
}
````

Para utilizar o docker local, utilize o código abaixo:

````terraform
# Win11
provider "docker" {
  host = "npipe:////./pipe/docker_engine"
}
````

### Resource para Docker

Assim como em um processo manual, é importante criar a a infraestrutra de forma sequencial, e passo a passo, e a
primeira coisa a ser feita na construção de um container é pull da imagem base. Para baixar uma imagem utilizando o
Terraform, basta utilizar o ``resource`` abaixo:

````terraform
# Pulls the image
resource "docker_image" "ubuntu" {
  name = "ubuntu:latest"
}
````

--------

Para construção do container iremos utilizar o ``resource`` também, por ser um container, nosso **resource** irá conter
algumas propriedades a mais, como; nome do container e comandos, porém, é importante definir dependencias entre os
resources para que os mesmos sejam executados na ordem correta. Conforme exemplo abaixo:

````terraform
# Create a container
resource "docker_container" "teste_linux" {
  image = docker_image.ubuntu.image_id
  name  = "teste_linux"
  depends_on = [ docker_image.ubuntu ]
  command = [ "sleep", "infinity" ]
}
````

--------

## Conclusão

Por fim, temos o nosso arquivo completo abaixo:

```terraform
# main.tf

terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 2.15"
    }
  }
}

# Win11
provider "docker" {
  host = "npipe:////./pipe/docker_engine"
}


# Pulls the image
resource "docker_image" "ubuntu" {
  name = "ubuntu:latest"
}

# Create a container
resource "docker_container" "teste_linux" {
  image = docker_image.ubuntu.image_id
  name  = "teste_linux"
  depends_on = [ docker_image.ubuntu ]
  command = [ "sleep", "infinity" ]
}

```

Conforme mencionado acima, para executar a infra, basta executar os comandos; ``terraform init`` e ``terraform apply``.

Feito isso você terá sua infra completa baseado em Terraform.
