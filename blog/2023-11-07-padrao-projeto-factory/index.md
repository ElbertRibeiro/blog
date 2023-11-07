# Utilizando Design Patterns Factory com Spring Boot

Design Patterns (Padrões de Projeto) são soluções para problemas comuns de desenvolvimento de software. Eles oferecem diretrizes comprovadas para projetar código de maneira eficiente e reutilizável. Entre esses padrões, o padrão Factory é amplamente utilizado para criar objetos de maneira flexível e desacoplada. Neste artigo, exploraremos como aplicar o Design Pattern Factory em um projeto Spring Boot, fornecendo um exemplo prático para ilustrar seu uso.

## O Padrão Factory

O padrão Factory é um padrão de criação, que se concentra na criação de objetos. Ele fornece uma interface para criar objetos, permitindo que as subclasses decidam qual classe concreta instanciar. Isso promove o princípio da abstração e do desacoplamento.

Existem duas variantes principais do padrão Factory: Factory Method e Abstract Factory. No entanto, aqui nos concentraremos no Factory Method, pois é o mais comumente usado e mais fácil de entender.

## Implementando o Factory Method com Spring Boot

Vamos considerar um cenário onde temos um sistema de gerenciamento de pedidos em um aplicativo Spring Boot. Existem diferentes tipos de pedidos, como pedidos de produtos físicos, pedidos de serviços e pedidos de assinatura. Cada tipo de pedido requer uma lógica de criação diferente.

Para aplicar o Factory Method, começaremos criando uma interface `Pedido` que definirá as operações comuns a todos os tipos de pedido:

```java
public interface Pedido {
    void processar();
}
```

Agora, criaremos implementações concretas dessa interface para cada tipo de pedido:

```java
public class PedidoProdutoFisico implements Pedido {
    @Override
    public void processar() {
        // Lógica para processar um pedido de produto físico
    }
}

public class PedidoServico implements Pedido {
    @Override
    public void processar() {
        // Lógica para processar um pedido de serviço
    }
}

public class PedidoAssinatura implements Pedido {
    @Override
    public void processar() {
        // Lógica para processar um pedido de assinatura
    }
}
```

Agora, criaremos a fábrica de pedidos (Factory) que permitirá a criação de instâncias concretas de pedidos:

```java
public class FabricaPedido {
    public Pedido criarPedido(TipoPedido tipo) {
        switch (tipo) {
            case PRODUTO_FISICO:
                return new PedidoProdutoFisico();
            case SERVICO:
                return new PedidoServico();
            case ASSINATURA:
                return new PedidoAssinatura();
            default:
                throw new IllegalArgumentException("Tipo de pedido desconhecido");
        }
    }
}
```

A enumeração `TipoPedido` é usada para identificar o tipo de pedido que desejamos criar.

Agora, podemos usar a fábrica para criar pedidos em nosso aplicativo Spring Boot:

```java
public class PedidoService {
    private FabricaPedido fabricaPedido;

    public PedidoService(FabricaPedido fabricaPedido) {
        this.fabricaPedido = fabricaPedido;
    }

    public void processarPedido(TipoPedido tipo) {
        Pedido pedido = fabricaPedido.criarPedido(tipo);
        pedido.processar();
    }
}
```

A classe `PedidoService` injeta a fábrica de pedidos e usa o Factory Method para criar e processar pedidos com base no tipo especificado.

Por fim, podemos configurar o Spring Boot para injetar a fábrica de pedidos em nossa aplicação:

```java
@Configuration
public class AppConfig {
    @Bean
    public FabricaPedido fabricaPedido() {
        return new FabricaPedido();
    }
}
```

Agora, sempre que precisarmos criar um novo tipo de pedido, podemos simplesmente adicionar uma nova implementação da interface `Pedido` e atualizar a fábrica de pedidos para acomodar o novo tipo, mantendo nosso código flexível e extensível.

## Conclusão

O Design Pattern Factory é uma ferramenta valiosa para criar objetos de maneira flexível e desacoplada em um projeto Spring Boot. Ele promove o princípio da abstração e torna o código mais reutilizável e extensível. Ao seguir os princípios do Factory Method, podemos criar um sistema de gerenciamento de pedidos que pode facilmente acomodar novos tipos de pedidos sem modificar o código existente. Este é apenas um exemplo de como o Design Pattern Factory pode ser aplicado no desenvolvimento de software, e suas aplicações são amplas e variadas.