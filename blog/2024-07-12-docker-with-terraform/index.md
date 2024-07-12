---
slug: docker-with-terraform
title: Using Terraform with Docker
authors: [ elbert ]
tags: [ spring-boot, java, ddd, design-pattern ]
---



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