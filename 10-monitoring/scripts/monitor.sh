#!/bin/bash

echo "================================="
echo "      SERVER MONITORING REPORT"
echo "================================="

echo ""
echo "Date and Time:"
date

echo ""
echo "Hostname:"
hostname

echo ""
echo "System Uptime:"
uptime

echo ""
echo "CPU Information:"
top -bn1 | grep "Cpu(s)"

echo ""
echo "Memory Usage:"
free -h

echo ""
echo "Disk Usage:"
df -h

echo ""
echo "Running Docker Containers:"
docker ps

echo ""
echo "================================="
echo "Monitoring completed successfully"
echo "================================="
