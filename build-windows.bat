@echo off 
set source_pwd=%cd%
docker-compose -f docker-compose.windows.yml build
