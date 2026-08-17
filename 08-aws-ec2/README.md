# AWS EC2 Docker Deployment

## Architecture

Internet
   |
   v
AWS EC2
   |
   v
Nginx :80
   |
   v
Node.js
   |
   v
MongoDB

## Technologies

- AWS EC2
- Ubuntu
- Docker
- Docker Compose
- Docker Hub
- Nginx
- Node.js
- MongoDB

## Deployment

1. Launch EC2 instance
2. Configure Security Group
3. Connect using SSH
4. Install Docker
5. Login to Docker Hub
6. Pull Docker image
7. Create Docker Compose configuration
8. Start containers
9. Test application

## Useful Commands

```bash
docker compose ps
docker compose logs
docker compose pull
docker compose up -d
docker compose down
