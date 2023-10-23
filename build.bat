@echo off
pnpm run build
git add . --quiet
git commit -a -m "Build operation - %date% %time%"
git push --quiet