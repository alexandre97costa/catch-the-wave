@echo off
runas "/user:Admin" "pnpm run build"
git add .
git commit -a -m "Build operation - %date% %time%"
git push --quiet