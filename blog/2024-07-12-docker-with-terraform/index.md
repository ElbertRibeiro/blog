---
slug: docker-with-terraform
title: Using Terraform with Docker
authors: [ elbert ]
tags: [ docker, terraform, IaC ]
---

## What is Terraform?

According to the [IBM website](https://www.ibm.com/br-pt/topics/terraform), **Terraform** is an IaC (Infrastructure as
Code) tool that enables the creation, modification, and versioning of infrastructure safely and efficiently.

## Using Terraform with Docker

This article aims to broaden the reader's horizons so that they can perceive the great utility that a tool like
**Terraform** has in the daily life of a developer and/or DevOps professional.

In this article, I will not address complex problems that the tool can solve. My goal here is to provide the reader with
a first contact with the solution. Best practices and better usage will be topics addressed in future articles.

## Technical Details

The source code generated in this article was created using a `Windowns 11 Amd64` machine, and the version of  
*Terraform* installed is `v1.9.2`.

## How does Terraform work?

1. Defining the Infrastructure:
   You write configuration files using Terraform's configuration language (HCL) or JSON. These files define the
   infrastructure resources you want to create, such as virtual machines, networks, and databases, along with their
   properties.

2. Initialization:
   Before applying the configurations, you run ``terraform init``. This command initializes Terraform's working
   directory,
   downloads the necessary providers, and prepares the environment.

3. Planning:
   With the ``terraform plan`` command, Terraform analyzes the configurations and generates an execution plan. The plan
   shows the changes that will be made to the infrastructure, so you can review them before applying.

4. Application:
   After reviewing the plan, you execute ``terraform apply``. Terraform applies the changes according to the generated
   plan, creating, modifying, or deleting resources as needed.

5. Management:
   Terraform maintains the state of your infrastructure in a state file. This file is used to track changes between the
   configuration and the real infrastructure, allowing Terraform to make incremental updates and maintain consistency.

6. Destruction:
   When you need to remove the infrastructure, you can use the ``terraform destroy``command. This command removes all
   resources defined in your configurations.

## Terraform Resources

Below I will list some of the resources of **Terraform**:

1. `required_providers`:
    * Purpose: Specifies which providers are necessary for your Terraform configuration and which versions of these
      providers should be used.
    * Location: Usually found within the terraform block in a .tf file.
    * Components:
        * Source: Defines the provider's source (e.g., "hashicorp/aws").
        * Version: Defines the desired version of the provider (e.g., "~> 3.0").
    * Example:
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
    * Purpose: Configures and authenticates the infrastructure provider that Terraform will use to create and manage
      resources. The provider is responsible for interacting with external APIs.
    * Location: Defined in a provider block in a .tf file.
    * Components:
        * provider: Name of the provider (e.g., "aws").
        * region: Specific provider configuration (e.g., "us-west-1" for AWS).
    * Example:
      ````hcl
      provider "aws" {
      region = "us-west-1"
      }
      ````

3. `resource`
    * Purpose: Defines a specific resource that you want to create, modify, or delete in your infrastructure. Resources
      are the main elements you manage with Terraform.
    * Location: Defined in a resource block in a .tf file.
    * Components:
        * resource: Type of resource and name (e.g., "aws_instance" "example").
        * ami: Specific property of the resource (e.g., AMI image ID for AWS).
        * instance_type: Another specific property (e.g., EC2 instance type).
    * Example:
      ````hcl
      resource "aws_instance" "example" {
      ami           = "ami-0c55b159cbfafe1f0"
      instance_type = "t2.micro"
      }
      ````

### Summary of Relationships

The ``required_providers`` define which providers and their versions are necessary for the configuration, ensuring that
all necessary components are available and in the correct version.
The ``provider`` configures how Terraform communicates with a specific provider (such as AWS, Azure, Google Cloud) and
defines essential parameters for authentication and configuration.
The ``resource`` block is where you define the specific details of the resources you want to create, manage, or delete
in your infrastructure.

## Using Terraform with Docker

Now let's talk about the main topic, which motivated the creation of this article.

Since Terraform is a powerful tool for IaC, it is possible to create both complex and simple infrastructures (as in the
following example).

Imagine you need to maintain a source code of an infrastructure. In this case, you could choose to use docker-compose
and use git for this purpose, but we know that for more complex cases, it may not be sufficient.

### Docker Provider

Providers are important resources when creating infrastructure. On
the [Terraform website](https://registry.terraform.io/browse/providers), you can find several providers for the most
popular infrastructure providers.
To create a Docker infrastructure, we will use the ``kreuzwerker/docker provider``, as shown in the example below:

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

To use the local Docker, use the code below:

````terraform
# Win11
provider "docker" {
  host = "npipe:////./pipe/docker_engine"
}
````

### Docker Resource

Just like in a manual process, it is important to create the infrastructure sequentially and step by step. The first
thing to do in building a container is to pull the base image. To download an image using Terraform, simply use the
``resource`` below:

````terraform
# Pulls the image
resource "docker_image" "ubuntu" {
  name = "ubuntu:latest"
}
````

--------

To build the container, we will also use the ``resource``. As it is a container, our resource will contain some
additional
properties, such as container name and commands. However, it is important to define dependencies between the resources
so that they are executed in the correct order, as shown in the example below:

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

## Conclusion

Finally, we have our complete file below:

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

As mentioned above, to execute the infrastructure, simply run the commands: ``terraform init`` and ``terraform apply``.

Once done, you will have your complete infrastructure based on Terraform.