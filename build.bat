@echo off
vite build
git add .
git commit -a -m "Build operation - %date% %time%" --quiet
git push --quiet