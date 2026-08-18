# Task 12 - Kubernetes Basics

## Objective

Deploy a Docker container using Kubernetes.

## Architecture

User
  ↓
Kubernetes Service
  ↓
Kubernetes Deployment
  ↓
Docker Container

## Files

### deployment.yaml

Creates:

- 2 application replicas
- Docker container deployment
- Kubernetes labels and selectors

### service.yaml

Creates:

- Kubernetes Service
- Port mapping
- Access to the application

## Docker Image

The application image is hosted on Docker Hub.

Example:

```text
sumitpatil1406/devops-nginx-app:latest
