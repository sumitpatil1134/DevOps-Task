# Task 14 - Jenkins CI/CD Pipeline

## Objective

Learn Continuous Integration using Jenkins.

## Pipeline Stages

1. Checkout source code
2. Run tests
3. Build application

## Architecture

GitHub
  ↓
Jenkins
  ↓
Checkout
  ↓
Test
  ↓
Build
  ↓
Success

## Run Jenkins

```bash
docker volume create jenkins_home

docker run -d \
  --name jenkins \
  --restart unless-stopped \
  -p 8081:8080 \
  -p 50000:50000 \
  -v jenkins_home:/var/jenkins_home \
  jenkins/jenkins:lts
