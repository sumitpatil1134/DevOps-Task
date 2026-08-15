# DevOps Linux Server Administration Lab

## 📌 Project Overview

This project is a beginner-level DevOps practical lab focused on Linux server administration, Bash scripting, Nginx, process management, permissions, logs, and basic server monitoring.

The goal is to build practical Linux skills that are required for DevOps and cloud engineering roles.

---

## 🎯 Objectives

* Learn Linux server administration
* Manage users and permissions
* Install and manage software packages
* Manage services using `systemctl`
* Monitor CPU, memory, and disk usage
* Analyze application and system logs
* Check network ports
* Work with Linux processes
* Create Bash automation scripts
* Install and configure Nginx
* Practice troubleshooting a failed service
* Use Git and GitHub to document the project

---

## 🛠️ Technologies Used

* Ubuntu Linux
* Bash Shell
* Nginx
* Git
* GitHub
* WSL2 (Windows Subsystem for Linux)

---

## 📁 Project Structure

```text
devops-linux-server-lab/
│
├── README.md
│
├── scripts/
│   └── server-health.sh
│
└── notes/
    └── linux-commands.md
```

---

## 🔧 Tasks Completed

### 1. Linux System Administration

Practiced:

```bash
pwd
ls
ls -la
cd
mkdir
touch
cp
mv
rm
cat
```

### 2. File Permissions

Practiced:

```bash
chmod
chown
ls -l
```

Created executable Bash scripts using:

```bash
chmod +x script.sh
```

### 3. User Management

Created and managed Linux users:

```bash
sudo adduser devopsuser
id devopsuser
```

### 4. Process Management

Practiced:

```bash
ps aux
top
ps aux | grep nginx
```

### 5. System Monitoring

Checked system resources using:

```bash
df -h
free -h
lscpu
uptime
```

### 6. Nginx Installation

Installed Nginx:

```bash
sudo apt update
sudo apt install nginx -y
```

Checked Nginx:

```bash
sudo systemctl status nginx
```

### 7. Service Management

Practiced:

```bash
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl enable nginx
sudo systemctl status nginx
```

### 8. Network and Port Checking

Checked listening ports:

```bash
sudo ss -tulpn
```

Tested the Nginx server:

```bash
curl localhost
```

### 9. Log Monitoring

Checked Nginx logs:

```bash
sudo tail /var/log/nginx/access.log
sudo tail /var/log/nginx/error.log
```

Followed logs in real time:

```bash
sudo tail -f /var/log/nginx/access.log
```

---

## 🤖 Server Health Check Automation

Created a Bash script:

```text
scripts/server-health.sh
```

The script checks:

* Hostname
* Server uptime
* Disk usage
* Memory usage
* Nginx status
* Listening network ports

Run the script:

```bash
chmod +x scripts/server-health.sh
./scripts/server-health.sh
```

Example workflow:

```text
Server
  │
  ├── CPU / Memory
  ├── Disk
  ├── Processes
  ├── Network Ports
  └── Nginx
        │
        ↓
  Health Check Script
        │
        ↓
   Terminal Report
```

---

## 🧪 Troubleshooting Practice

A real DevOps engineer must be able to troubleshoot failures.

I intentionally stopped Nginx:

```bash
sudo systemctl stop nginx
```

Then checked the service:

```bash
sudo systemctl status nginx
```

Verified that the application was unavailable:

```bash
curl localhost
```

Started Nginx again:

```bash
sudo systemctl start nginx
```

Verified the service:

```bash
sudo systemctl status nginx
```

Finally tested the application:

```bash
curl localhost
```

---

## 📚 Key DevOps Concepts Learned

* Linux filesystem
* Linux users and groups
* File permissions
* Process management
* Service management
* Package management
* Network ports
* Nginx
* Application logs
* Bash scripting
* Server monitoring
* Troubleshooting
* Git version control
* GitHub repository management

---

## 🚀 Future Improvements

The next stages of this DevOps learning project will include:

* Git branching and Pull Requests
* Advanced Bash scripting
* Docker
* Docker Compose
* Nginx reverse proxy
* GitHub Actions CI/CD
* AWS EC2 deployment
* Terraform
* Prometheus
* Grafana
* Kubernetes

---

## 👨‍💻 Author

**Sumit Patil**

DevOps / Backend / MERN Stack Learner

---

## ⭐ Learning Approach

The project follows this DevOps learning cycle:

```text
Build
  ↓
Break
  ↓
Troubleshoot
  ↓
Fix
  ↓
Automate
  ↓
Document
```

This project is part of my hands-on journey toward becoming a job-ready DevOps engineer.
