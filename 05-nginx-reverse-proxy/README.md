# Nginx Reverse Proxy with Docker Compose

## Architecture

```text
Internet
   |
   v
Nginx :80
   |
   v
Node.js :3000
   |
   v
MongoDB :27017
