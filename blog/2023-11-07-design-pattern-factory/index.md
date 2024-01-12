---
slug: design-pattern-factory
title: Spring Boot DDD Factory
authors: [ elbert ]
tags: [ spring-boot, java, ddd, design-pattern ]
---

# Using Factory Design Pattern with Spring Boot

Design Patterns are solutions to common software development problems. They offer proven guidelines for designing code efficiently and in a reusable manner. Among these patterns, the Factory Pattern is widely used for creating objects in a flexible and decoupled way. In this article, we will explore how to apply the Factory Design Pattern in a Spring Boot project, providing a practical example to illustrate its usage.

## The Factory Pattern

The Factory Pattern is a creational design pattern that focuses on object creation. It provides an interface for creating objects, allowing subclasses to decide which concrete class to instantiate. This promotes the principles of abstraction and decoupling.

There are two main variants of the Factory Pattern: the Factory Method and the Abstract Factory. However, we will focus on the Factory Method here, as it is the most commonly used and easiest to understand.

## Implementing the Factory Method with Spring Boot

Let's consider a scenario where we have an order management system in a Spring Boot application. There are different types of orders, such as physical product orders, service orders, and subscription orders. Each type of order requires different creation logic.

To apply the Factory Method, we will start by creating an `Order` interface that defines the common operations for all types of orders:

```java
public interface Order {
    void process();
}
```

Now, we will create concrete implementations of this interface for each type of order:

```java
public class PhysicalProductOrder implements Order {
    @Override
    public void process() {
        // Logic to process a physical product order
    }
}

public class ServiceOrder implements Order {
    @Override
    public void process() {
        // Logic to process a service order
    }
}

public class SubscriptionOrder implements Order {
    @Override
    public void process() {
        // Logic to process a subscription order
    }
}
```

Next, we will create the order factory that allows us to create concrete order instances:

```java
public class OrderFactory {
    public Order createOrder(OrderType type) {
        return switch (type) {
            case PHYSICAL_PRODUCT -> new PhysicalProductOrder();
            case SERVICE -> new ServiceOrder();
            case SUBSCRIPTION -> new SubscriptionOrder();
            default -> throw new IllegalArgumentException("Unknown order type");
        };
    }
}
```

The `OrderType` enumeration is used to identify the type of order we want to create.

Now, we can use the factory to create orders in our Spring Boot application:

```java
public class OrderService {
    private OrderFactory orderFactory;

    public OrderService(OrderFactory orderFactory) {
        this.orderFactory = orderFactory;
    }

    public void processOrder(OrderType type) {
        Order order = orderFactory.createOrder(type);
        order.process();
    }
}
```

The `OrderService` class injects the order factory and uses the Factory Method to create and process orders based on the specified type.

Finally, we can configure Spring Boot to inject the order factory into our application:

```java
@Configuration
public class AppConfig {
    @Bean
    public OrderFactory orderFactory() {
        return new OrderFactory();
    }
}
```

Now, whenever we need to create a new type of order, we can simply add a new implementation of the `Order` interface and update the order factory to accommodate the new type, keeping our code flexible and extensible.

## Conclusion

The Factory Design Pattern is a valuable tool for creating objects in a flexible and decoupled manner in a Spring Boot project. It promotes the principles of abstraction and makes code more reusable and extensible. By following the principles of the Factory Method, we can create an order management system that can easily accommodate new types of orders without modifying existing code. This is just one example of how the Factory Design Pattern can be applied in software development, and its applications are broad and varied.